import React, { useContext, useState, useEffect } from "react";
import {
  Alert,
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";

// ico
import { Ionicons } from "@expo/vector-icons";
import { UserContext } from "./UserContext";
import AppLogo from "./AppLogo";
import CircularProgressBar from "./circularProgressLine";
import { firebaseapp, db } from "../firebase";
import { doc, collection, addDoc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loading from "./Loading";
import { FlatList } from "react-native-gesture-handler";

const auth = getAuth();

export default HomeYourSub = ({ navigation }) => {
  const { user } = useContext(UserContext);

  const [subscription, setSubscription] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [loading, setLoading] = useState(true);

  const imageMapping = {
    Spotify: require("../assets/SpotifyLogo.png"),
    "YouTube Premium": require("../assets/YTPremiumLogo.png"),
    "Microsoft Onedrive": require("../assets/OneDriveLogo.png"),
    Netflix: require("../assets/NetflixLogo.png"),
    "HBO Go": require("../assets/HBOGOLogo.png"),
  };

  const getUserData = async () => {
    try {
      const docRef = doc(db, "userData", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log(docSnap.data());
        setSubscription(docSnap.data().subscriptions);

        setLoading(false);
        console.log("subscription :", subscription);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, [user]);

  useEffect(() => {
    if (!subscription) {
      return;
    }
    const calculateTotal = subscription.reduce((total, subscription) => {
      return total + parseFloat(subscription.cost);
    }, 0);
    setTotalCost(calculateTotal);
    console.log("subscription :", totalCost);
  }, [subscription]);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <View>
          <View>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => navigation.navigate("Setting")}
            >
              <Ionicons
                style={styles.icon}
                name="settings-outline"
                size="30"
                color="#A2A2B5"
              />
            </TouchableOpacity>
            <View style={{ position: "absolute", top: 40, left: 65 }}>
              <CircularProgressBar
                size={300}
                value={65}
                degree={"-98deg"}
                color={"#fff"}
                zIndex={-1}
              />
              <CircularProgressBar
                size={300}
                value={60}
                degree={"-135deg"}
                color={"#B21818"}
                zIndex={1}
              />
            </View>
            <View style={{ marginTop: 100, alignItems: "center" }}>
              <AppLogo />

              <View style={{ alignItems: "center" }}>
                <Text style={styles.bill}>${totalCost}</Text>
                <Text style={styles.billtext}>This month bills</Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Budget")}
              >
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  See Your Budget
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.box}>
                <Text style={{ color: "#fff" }}>Active Subs</Text>
                <Text style={styles.textInsideBox}>{subscription?.length}</Text>
              </View>
              <View style={styles.box}>
                <Text style={{ color: "#fff" }}>Highest Subs</Text>
                <Text style={styles.textInsideBox}>${totalCost}</Text>
              </View>
              <View style={styles.box}>
                <Text style={{ color: "#fff" }}>Lowest Subs</Text>
                <Text style={styles.textInsideBox}>$5.99</Text>
              </View>
            </View>
            <View
              style={[
                styles.subscriptionBox,
                {
                  flexDirection: "row",
                  marginTop: 28,
                  backgroundColor: "#0E0E12",
                },
              ]}
            >
              <TouchableOpacity
                style={[
                  styles.button2,
                  { backgroundColor: "rgba(78, 78, 97, 0.4)" },
                ]}
              >
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Your Subscripton
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button2}
                onPress={() => navigation.navigate("HomeUpcoming")}
              >
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Upcoming Bills
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={subscription}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Info");
                    }}
                  >
                    <View
                      style={[
                        styles.subscriptionBox,
                        {
                          flexDirection: "row",
                          marginTop: 15,
                          backgroundColor: "#353542",
                        },
                      ]}
                    >
                      <Image source={imageMapping[item.subName]}></Image>
                      <Text style={styles.subscriptionText1}>
                        {item.subName}
                      </Text>
                      <Text style={styles.subscriptionText2}>${item.cost}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#1C1C23",
    marginTop: StatusBar.currentHeight || 0,
  },
  circleBG: {
    position: "absolute",
    top: 0,
    width: 426,
    height: 488,
    borderRadius: 20,
    zIndex: -1,
  },

  lightBG: {
    position: "absolute",
    borderRadius: 20,
    padding: 10,
    borderWidth: 1,
    width: "100%",
    height: "58%",
    zIndex: -1,
  },

  iconContainer: {
    position: "absolute",
    top: 10,
    right: 20,
  },
  icon: {
    width: 32,
    height: 32,
  },
  bill: {
    fontWeight: "bold",
    fontSize: 50,
    color: "white",
    marginTop: 40,
  },
  billtext: {
    fontSize: 15,
    color: "#83839C",
  },

  button: {
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    alignItems: "center",
    width: 180,

    backgroundColor: "#000",
    opacity: 0.8,
    marginTop: 25,
  },
  button2: {
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    width: 180,
    marginLeft: 8,
    marginRight: 8,
  },

  box: {
    borderRadius: 20,
    padding: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 80,
    backgroundColor: "#4E4E61",
    opacity: 0.6,
    marginTop: 20,
    marginLeft: 12,
    marginRight: 10,
  },

  subscriptionBox: {
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    left: 11,
  },

  textInsideBox: {
    fontSize: "20",
    fontWeight: "bold",
    color: "white",
  },

  subscriptionText1: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 15,
    width: "70%",
    textAlign: "left",
  },
  subscriptionText2: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 5,
    textAlign: "right",
  },
});

/* 
<ScrollView horizontal={false}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Info");
                }}
              >
                <View
                  style={[
                    styles.subscriptionBox,
                    {
                      flexDirection: "row",
                      marginTop: 15,
                      backgroundColor: "#353542",
                    },
                  ]}
                >
                  <Image source={require("../assets/SpotifyLogo.png")}></Image>
                  <Text style={styles.subscriptionText1}>Spotify</Text>
                  <Text style={styles.subscriptionText2}>$5.99</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Info");
                }}
              >
                <View
                  style={[
                    styles.subscriptionBox,
                    {
                      flexDirection: "row",
                      marginTop: 10,
                      backgroundColor: "#353542",
                    },
                  ]}
                >
                  <Image
                    source={require("../assets/YTPremiumLogo.png")}
                  ></Image>
                  <Text style={styles.subscriptionText1}>YouTube Premium</Text>
                  <Text style={styles.subscriptionText2}>$18.99</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Info");
                }}
              >
                <View
                  style={[
                    styles.subscriptionBox,
                    {
                      flexDirection: "row",
                      marginTop: 10,
                      backgroundColor: "#353542",
                    },
                  ]}
                >
                  <Image source={require("../assets/OneDriveLogo.png")}></Image>
                  <Text style={styles.subscriptionText1}>
                    Microsoft OneDrive
                  </Text>
                  <Text style={styles.subscriptionText2}>$29.99</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Info");
                }}
              >
                <View
                  style={[
                    styles.subscriptionBox,
                    {
                      flexDirection: "row",
                      marginTop: 10,
                      backgroundColor: "#353542",
                    },
                  ]}
                >
                  <Image source={require("../assets/NetflixLogo.png")}></Image>
                  <Text style={styles.subscriptionText1}>Netflix</Text>
                  <Text style={styles.subscriptionText2}>$37.99</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>




useEffect(() => {
    (async () => {
      try {
        subscription.forEach((subscription) => {
          const foundImage = images.find(
            (image) => image.text === subscription.subName
          );
          console.log(foundImage);
          if (foundImage) {
            updateSubscription.push({ ...subscription, image: foundImage.src });
          }
        });

        console.log("images", updateSubscription);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [subscription, images]); */

/*  {updateSubscription.map((item, i) => ( 
      <TouchableOpacity
            onPress={() => {
              navigation.navigate("Info");
            }}
          >
            <View
              style={[
                styles.subscriptionBox,
                {
                  flexDirection: "row",
                  marginTop: 15,
                  backgroundColor: "#353542",
                },
              ]}
            >
              <Image source={require({item.image}}></Image>
              <Text style={styles.subscriptionText1}>{item.subName}</Text>
              <Text style={styles.subscriptionText2}>${item.cost}</Text>
            </View>
          </TouchableOpacity>
          ))}*/
