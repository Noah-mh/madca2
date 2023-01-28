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
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(firebaseapp);

// ico
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "./CustomButton";
import image1 from "../assets/SpotifyBiggerLogo.png";
import image2 from "../assets/HBOGOLogo.png";
import image3 from "../assets/OneDriveBiggerLogo.png";
import image4 from "../assets/NetflixBiggerLogo.jpeg";
import image5 from "../assets/YTPremiumBiggerLogo.jpg";

const { width } = Dimensions.get("window");

const images = [
  {
    src: image1,
    text: "Spotify",
  },
  {
    src: image2,
    text: "HBO Go",
  },
  {
    src: image3,
    text: "Microsoft One Drive",
  },
  {
    src: image4,
    text: "Netflix",
  },
  {
    src: image5,
    text: "YouTube Premium",
  },
];

export default AddItem = ({ navigation }) => {
  const { user } = useContext(UserContext);

  const [subName, setSubName] = useState("");
  const [cost, setCost] = useState(0);
  const [description, setDescripton] = useState("");

  const [scrollOffset, setScrollOffset] = useState(0);

  const handleScroll = (event) => {
    selectedIndex = Math.round(event.nativeEvent.contentOffset.x / 450);
    console.log(selectedIndex);
  };
  let selectedIndex;

  const onHandleAdd = async () => {
    if (selectedIndex >= 0 && selectedIndex < images.length) {
      setSubName(images[selectedIndex].text);
    } else {
      setSubName("");
    }
    try {
      if (subName != "" && cost != 0) {
        const docRef = doc(db, "userData", user.uid);
        await updateDoc(docRef, {
          subscription: {
            cost: arrayUnion(cost.replace("$", "")),
            subName: arrayUnion(subName),
            description: arrayUnion(description), 
          },
        });
        Alert.alert("New Subscription Added");
      }
    } catch (error) {
      alert(error.message);
    }
    navigation.navigate("BottomBar");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lightBG}></View>
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
        <View style={{ marginTop: 50, alignItems: "center" }}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.subHeader}>Add New Subscripton</Text>
          </View>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            snapToAlignment="center"
            onScroll={handleScroll}
          >
            <View style={{ flexDirection: "row" }}>
              {images.map((image, i) => (
                <View
                  selectedIndex={i}
                  key={i}
                  style={{
                    alignItems: "center",
                    width: width,
                    padding: 10,
                  }}
                >
                  <Image
                    source={image.src}
                    style={{
                      width: 150,
                      height: 150,
                      borderRadius: 40,
                    }}
                  />
                  <Text style={styles.bill}>{image.text}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

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

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <TouchableOpacity>
            <View style={styles.box}>
              <Ionicons name="remove-outline" size="40" />
            </View>
          </TouchableOpacity>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
            }}
          >
            <Text style={{ color: "#666680", fontWeight: "bold" }}>
              Monthly Price
            </Text>
            <TextInput
              style={{
                borderRadius: 10,
                fontWeight: "bold",
                fontSize: 20,
                width: "85%",
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
          <TouchableOpacity>
            <View style={styles.box}>
              <Ionicons name="add-outline" size="40" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", marginTop: 90 }}>
          <CustomButton
            text="Add Subscription"
            color="white"
            backgroundColor="red"
            marginBottom={25}
            onPress={onHandleAdd}
          ></CustomButton>
        </View>
      </View>
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
  lightBG: {
    position: "absolute",
    borderRadius: 20,
    padding: 10,
    borderWidth: 1,
    width: "100%",
    height: "55%",
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
    fontSize: 50,
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
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  subhead: {
    color: "#666680",
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
