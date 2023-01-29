import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import {
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
// ico
import { Ionicons } from "@expo/vector-icons";
import { firebaseapp, db } from "../firebase";
import { collection, doc, updateDoc, getDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import Setting from "./Setting";

const auth = getAuth(firebaseapp);

export default SubInfo = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Subscription Info</Text>
        </View>
        <TouchableOpacity
          style={styles.cancelContainer}
          onPress={() => navigation.navigate("Setting")}
        >
          <Ionicons
            style={styles.icon}
            name="chevron-down-outline"
            size="30"
            color="#A2A2B5"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.doneContainer} onPress={() => {}}>
          <Ionicons
            style={styles.icon}
            name="trash-outline"
            size="30"
            color="#A2A2B5"
          />
        </TouchableOpacity>
       
        <View style={{ marginTop: 80, alignItems: "center" }}>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ width: 120, height: 120, borderRadius: 10 }}
              source={require("../assets/NetflixBiggerLogo.jpeg")}
            ></Image>
            
              <Text style={styles.bill}>Netflix</Text>
              <Text style={styles.bill}>$37.99</Text>
         
          </View>
        </View>
        <View style={styles.line}></View>

        <View style={styles.line}></View>
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
  container2: {
    padding: 10,
    backgroundColor: "#353542",
    borderRadius: 20,
    marginLeft: 15,
    marginRight: 15,
  },

  categoryBox: {
    borderRadius: 20,
    padding: 6,
    margin: 2,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    backgroundColor: "#353542",
    marginTop: 10,
  },

  categoryText1: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 15,
    textAlign: "left",
  },
  categoryText2: {
    color: "#A2A2B5",
    marginLeft: 5,
    marginRight: 0,
    textAlign: "right",
    alignItems: "right",
    right: 0,
  },
  inputitems: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  subhead: {
    color: "white",
    fontSize: 16,
    width: "40%",
  },
  errorMsg: {
    paddingLeft: 20,
    paddingRight: 20,
    color: "red",
    margin: 10,
    textAlign: "left",
    width: "100%",
  },
  input: {
    borderRadius: 10,
    borderColor: "white",
    width: "60%",
    height: 45,
    borderBottomWidth: 1,
    color: "white",
    fontSize: 18,
    paddingLeft: 10,
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

  cancelContainer: {
    position: "absolute",
    top: 15,
    left: 20,
  },
  doneContainer: {
    position: "absolute",
    top: 15,
    right: 20,
  },
  icon: {
    width: 32,
    height: 32,
  },
  monthButton: {
    marginTop: 10,
    borderRadius: 15,
    padding: 10,
    width: 120,
    borderWidth: 2,
    alignItems: "center",
    backgroundColor: "black",
  },

  bill: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    marginTop: 30,
    textAlign: "center",
  },
  line: {
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
