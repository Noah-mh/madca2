import React, { useState, useEffect, useContext } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";

import { UserContext } from "./UserContext";
import { firebaseapp, db } from "../firebase";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Loading from "./Loading";
import Slider from "./sliderComponent/Slider";

const auth = getAuth(firebaseapp);

// ico
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "./CustomButton";

export default AddItem = ({ navigation }) => {
  const { user } = useContext(UserContext);

  const [subscription, setSubscription] = useState([]);

  const [loading, setLoading] = useState(true);

  const [subName, setSubName] = useState("");
  const [cost, setCost] = useState(0);
  const [description, setDescripton] = useState("");
  const [category, setCategory] = useState("");

  const [items, setItems] = useState([]);

  const getUserData = async () => {
    try {
      const docRef = doc(db, "userData", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setSubscription(docSnap.data().subscriptions);

        setLoading(false);
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
  const handleViewableItemsChanged = (viewableItems) => {
    setItems(viewableItems);
    // console.log("viewable items in additem.js:", viewableItems);
  };
  useEffect(() => {
    console.log("Viewable items: ", items);
    if (items.length != 0) {
      setSubName(items[0].item.title);
    }
    console.log(subName);
  }, [items]);

  const onHandleAdd = async () => {
    try {
      console.log(subName);
      console.log(cost);
      if (subName != "" && cost != 0) {
        const docRef = doc(db, "userData", user.uid);
        await updateDoc(docRef, {
          subscriptions: arrayUnion(...subscription, {
            cost: cost.replace("$", ""),
            description: description,
            category: category,
            subName: subName,
          }),
        });
        Alert.alert("New Subscription Added");
      }
    } catch (error) {
      Alert.alert(error.message);
    }
    navigation.navigate("BottomBar");
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <View>
          <View style={styles.header}>
            <Text style={styles.headerText}>New</Text>
          </View>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() =>
              navigation.navigate("Home", { screen: "HomeScreenYourSub" })
            }
          >
            <Ionicons
              style={styles.icon}
              name="chevron-back-outline"
              size="30"
              color="#A2A2B5"
            />
          </TouchableOpacity>
          <View style={{ marginTop: 30, alignItems: "center" }}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.subHeader}>Add New Subscripton</Text>
            </View>
          </View>

          <Slider onViewableItemsChanged={handleViewableItemsChanged} />
 
          <View style={styles.inputitems}>
            <Text style={styles.subhead}>Description</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder={""}
              placeholderTextColor="black"
              autoCapitalize="none"
              value={description}
              onChangeText={(text) => setDescripton(text)}
            />
          </View>
          <View style={styles.inputitems}>
            <Text style={styles.subhead}>Category</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder={""}
              placeholderTextColor="black"
              autoCapitalize="none"
              value={category}
              onChangeText={(text) => setCategory(text)}
            />
          </View>

          <View style={styles.inputitems}>
            <Text style={styles.subhead}>Monthly Price</Text>
            <TextInput
              style={{
                borderRadius: 10,
                fontWeight: "bold",
                fontSize: 20,
                width: "50%",
                height: 60,
                borderBottomColor: "#353542",
                borderBottomWidth: 1,
                color: "white",
                textAlign: "center",
              }}
              underlineColorAndroid="transparent"
              placeholder={"$0"}
              textAlign="center"
              placeholderTextColor="white"
              autoCapitalize="none"
              value={cost}
              onChangeText={(text) => setCost(text)}
            />
          </View>

          <View style={{ alignItems: "center", marginTop: 40 }}>
            <CustomButton
              text="Add Subscription"
              color="white"
              backgroundColor="red"
              marginBottom={25}
              onPress={onHandleAdd}
            ></CustomButton>
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

  header: {
    top: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#A2A2B5",
    fontSize: 16,
    fontWeight: "semi-bold",
  },

  iconContainer: {
    position: "absolute",
    top: 10,
    left: 20,
  },
  icon: {
    width: 32,
    height: 32,
  },

  subHeader: {
    fontWeight: "bold",
    fontSize: 43,
    color: "white",
    textAlign: "center",
  },

  bill: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    marginTop: 10,
    textAlign: "center",
  },

  inputitems: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  subhead: {
    color: "#666680",
    fontWeight: "bold",
    fontSize:16
  },

  input: {
    borderRadius: 10,
    borderColor: "#353542",
    width: "85%",
    height: 60,
    borderWidth: 1,
    color: "white",
    fontSize: 20,
    paddingLeft: 10,
    textAlign: "center",
  },
  box: {
    borderRadius: 20,
    padding: 10,
    borderWidth: 1,

    width: 60,
    height: 60,
    backgroundColor: "#4E4E61",
    opacity: 0.6,
  },
});
