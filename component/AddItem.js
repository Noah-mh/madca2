import React, { useState, useEffect, useContext } from "react";
import {
  Alert,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";

import { UserContext } from "./UserContext";
import { db } from "../firebase";
import {
  doc,
  updateDoc,
  arrayUnion,
  serverTimestamp,
} from "firebase/firestore";

import Loading from "./Loading";
import Slider from "./sliderComponent/Slider";

// ico
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "./CustomButton";

const DropDown = ({ setCategory, categorys }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [category, setSelectedCategory] = useState("Select Category");

  return (
    <View>
      <TouchableOpacity
        style={styles.categoryButton1}
        onPress={() => setShowDropDown(!showDropDown)}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            marginRight: 3,
            width: "80%",
          }}
        >
          {category}
        </Text>
        <Ionicons name="chevron-down" color="white" size="20" />
      </TouchableOpacity>
      {showDropDown && (
        <View>
          {categorys.map((category, index) => (
            <TouchableOpacity
              style={styles.categoryButton2}
              key={index}
              onPress={() => {
                setSelectedCategory(category);
                setCategory(category);
                setShowDropDown(false);
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  marginRight: 3,
                }}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default AddItem = ({ navigation }) => {
  const { user, data, subscription, setSubscription } =
    useContext(UserContext);

  const [loading, setLoading] = useState(true);

  const [subName, setSubName] = useState("");
  const [cost, setCost] = useState(0);
  const [description, setDescripton] = useState("");
  const [category, setCategory] = useState("Select Category");

  const [items, setItems] = useState([]);

  const categoryData = [
    "Transportation",
    "Entertainment",
    "Security",
    "Education",
    "Communication",
  ];

  const handleViewableItemsChanged = (viewableItems) => {
    setItems(viewableItems);
    // console.log("viewable items in additem.js:", viewableItems);
  };
  useEffect(() => {
    if (items.length != 0) {
      setSubName(items[0].item.title);
    }
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
            timestamp: new Date(),
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
      <View style={{ marginTop: 10, alignItems: "center" }}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.subHeader}>Add New Subscripton</Text>
        </View>
      </View>

      <Slider onViewableItemsChanged={handleViewableItemsChanged} />
      <View style={styles.inputitems}>
        <Text style={styles.subhead}>Category</Text>
        <DropDown
          setCategory={setCategory}
          categorys={categoryData}
        />
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

      <View style={styles.inputitems}>
        <Text style={styles.subhead}>Monthly Price</Text>
        <TextInput
          style={{
            fontWeight: "bold",
            fontSize: 20,
            width: "50%",
            height: 60,
            borderBottomColor: "#353542",
            borderBottomWidth: 3,
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

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <CustomButton
          text="Add Subscription"
          color="white"
          backgroundColor="red"
          marginBottom={85}
          onPress={onHandleAdd}
        ></CustomButton>
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
    top: 55,
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
    // marginTop: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  subhead: {
    color: "#9999AD",
    fontWeight: "bold",
    fontSize: 16,
  },

  input: {
    borderRadius: 10,
    borderColor: "#353542",
    width: "85%",
    height: 60,
    borderWidth: 2,
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
  categoryButton1: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 10,
    width: "75%",
    height: 60,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3F3F48",
  },

  categoryButton2: {
    borderRadius: 10,
    padding: 10,
    width: "100%",
    height: 60,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3F3F48",
  },
});
