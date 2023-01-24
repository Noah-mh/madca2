import React, { useState } from "react";
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

import CustomButton from "../CustomButton";

export default EditProfile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Edit Profile</Text>
        </View>
        <TouchableOpacity
          style={styles.cancelContainer}
          onPress={() => navigation.navigate("Setting")}
        >
          <View>
            <Text style={{ color: "#A2A2B5" }}>cancel</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.doneContainer}
          onPress={() => navigation.navigate("Setting")}
        >
          <View>
            <Text style={{ color: "#1778F2" }}>Done</Text>
          </View>
        </TouchableOpacity>

        <View style={{ marginTop: 70, alignItems: "center" }}>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ width: 80, height: 80, borderRadius: 40 }}
              source={require("../../assets/profile.jpg")}
            ></Image>
            <Text style={styles.bill}>Noah</Text>
            <Text style={{ color: "#666680", fontWeight: "600" }}>
              noah.22@gamil.com
            </Text>
            <TouchableOpacity style={styles.monthButton} onPress={() => {}}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  marginRight: 3,
                  width: "80%",
                }}
              >
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
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
    fontSize: 20,
    color: "white",
    marginTop: 10,
    marginBottom: 5,
    textAlign: "center",
  },
});
