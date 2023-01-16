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

import CustomButton from "./CustomButton";

export default Setting = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Setting</Text>
        </View>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("BottomBar")}
        >
          <Ionicons
            style={styles.icon}
            name="chevron-back-outline"
            size="30"
            color="#A2A2B5"
          />
        </TouchableOpacity>

        <View style={{ marginTop: 70, alignItems: "center" }}>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ width: 80, height: 80, borderRadius: 40 }}
              source={require("../assets/profile.jpg")}
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

        <ScrollView horizontal={false}>
          <View style={{ width: "100%", height: 1500 }}>
            <View
              style={{
                padding: 10,
                marginTop: 25,
                marginLeft: 15,
                alignItems: "left",
                justifyContent: "center",
              }}
            >
              <View style={{ justifyContent: "center" }}>
                <Text
                  style={{ fontWeight: "bold", color: "white", fontSize: 20 }}
                >
                  Privacy & Security
                </Text>
              </View>

              <View style={styles.categoryBox}>
                <TouchableOpacity style={{ padding: 10, flexDirection: "row" }}>
                  <Image
                    style={{ width: "6%", marginLeft: 15 }}
                    source={require("../assets/faceid.png")}
                  />
                  <View
                    style={{
                      alignItems: "left",
                      justifyContent: "center",
                      width: "70%",
                    }}
                  >
                    <Text style={styles.categoryText1}>Security</Text>
                  </View>
                  <View
                    style={{
                      alignItems: "right",
                      justifyContent: "center",
                      width: "18%",
                    }}
                  >
                    <Text style={styles.categoryText2}>Face ID</Text>
                  </View>
                  <Ionicons
                    style={{ width: "5%" }}
                    name="chevron-forward-outline"
                    size="20"
                    color="#A2A2B5"
                  />
                </TouchableOpacity>

                <TouchableOpacity style={{ padding: 10, flexDirection: "row" }}>
                  <Ionicons
                    style={{ width: "6%", marginLeft: 15 }}
                    name="cloudy-outline"
                    size="20"
                    color="#A2A2B5"
                  />
                  <View
                    style={{
                      alignItems: "left",
                      justifyContent: "center",
                      width: "70%",
                    }}
                  >
                    <Text style={styles.categoryText1}>iCloud Sync</Text>
                  </View>
                  <View
                    style={{
                      alignItems: "right",
                      justifyContent: "center",
                      width: "18%",
                    }}
                  >
                    <Text style={styles.categoryText2}>Face ID</Text>
                  </View>
                  <Ionicons
                    style={{ width: "5%" }}
                    name="chevron-forward-outline"
                    size="20"
                    color="#A2A2B5"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                padding: 10,
                marginTop: 5,
                marginLeft: 15,
                alignItems: "left",
                justifyContent: "center",
              }}
            >
              <View style={{ justifyContent: "center" }}>
                <Text
                  style={{ fontWeight: "bold", color: "white", fontSize: 20 }}
                >
                  My Subscriptions
                </Text>
              </View>
              <View style={styles.categoryBox}>
                <TouchableOpacity style={{ padding: 10, flexDirection: "row" }}>
                  <Ionicons
                    style={{ width: "6%", marginLeft: 15 }}
                    name="terminal-outline"
                    size="20"
                    color="#A2A2B5"
                  />
                  <View
                    style={{
                      alignItems: "left",
                      justifyContent: "center",
                      width: "70%",
                    }}
                  >
                    <Text style={styles.categoryText1}>Sorting</Text>
                  </View>
                  <View
                    style={{
                      alignItems: "right",
                      justifyContent: "center",
                      width: "18%",
                    }}
                  >
                    <Text style={styles.categoryText2}>Date</Text>
                  </View>
                  <Ionicons
                    style={{ width: "5%" }}
                    name="chevron-forward-outline"
                    size="20"
                    color="#A2A2B5"
                  />
                </TouchableOpacity>

                <TouchableOpacity style={{ padding: 10, flexDirection: "row" }}>
                  <Ionicons
                    style={{ width: "6%", marginLeft: 15 }}
                    name="pie-chart-outline"
                    size="20"
                    color="#A2A2B5"
                  />
                  <View
                    style={{
                      alignItems: "left",
                      justifyContent: "center",
                      width: "70%",
                    }}
                  >
                    <Text style={styles.categoryText1}>Summary</Text>
                  </View>
                  <View
                    style={{
                      alignItems: "right",
                      justifyContent: "center",
                      width: "18%",
                    }}
                  >
                    <Text style={styles.categoryText2}>Average</Text>
                  </View>
                  <Ionicons
                    style={{ width: "5%" }}
                    name="chevron-forward-outline"
                    size="20"
                    color="#A2A2B5"
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10, flexDirection: "row" }}>
                  <Ionicons
                    style={{ width: "6%", marginLeft: 15 }}
                    name="cash-outline"
                    size="20"
                    color="#A2A2B5"
                  />
                  <View
                    style={{
                      alignItems: "left",
                      justifyContent: "center",
                      width: "70%",
                    }}
                  >
                    <Text style={styles.categoryText1}>Default Currency</Text>
                  </View>
                  <View
                    style={{
                      alignItems: "right",
                      justifyContent: "center",
                      width: "18%",
                    }}
                  >
                    <Text style={styles.categoryText2}>SGD ($)</Text>
                  </View>
                  <Ionicons
                    style={{ width: "5%" }}
                    name="chevron-forward-outline"
                    size="20"
                    color="#A2A2B5"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                padding: 10,
                marginTop: 5,
                marginLeft: 15,
                alignItems: "left",
                justifyContent: "center",
              }}
            >
              <View style={{ justifyContent: "center" }}>
                <Text
                  style={{ fontWeight: "bold", color: "white", fontSize: 20 }}
                >
                  Appearance
                </Text>
              </View>
              <View style={styles.categoryBox}>
                <TouchableOpacity style={{ padding: 10, flexDirection: "row" }}>
                  <Ionicons
                    style={{ width: "6%", marginLeft: 15 }}
                    name="square-outline"
                    size="20"
                    color="#A2A2B5"
                  />
                  <View
                    style={{
                      alignItems: "left",
                      justifyContent: "center",
                      width: "70%",
                    }}
                  >
                    <Text style={styles.categoryText1}>App icon</Text>
                  </View>
                  <View
                    style={{
                      alignItems: "right",
                      justifyContent: "center",
                      width: "18%",
                    }}
                  >
                    <Text style={styles.categoryText2}>Default</Text>
                  </View>
                  <Ionicons
                    style={{ width: "5%" }}
                    name="chevron-forward-outline"
                    size="20"
                    color="#A2A2B5"
                  />
                </TouchableOpacity>

                <TouchableOpacity style={{ padding: 10, flexDirection: "row" }}>
                  <Ionicons
                    style={{ width: "6%", marginLeft: 15 }}
                    name="contrast-outline"
                    size="20"
                    color="#A2A2B5"
                  />
                  <View
                    style={{
                      alignItems: "left",
                      justifyContent: "center",
                      width: "70%",
                    }}
                  >
                    <Text style={styles.categoryText1}>Theme</Text>
                  </View>
                  <View
                    style={{
                      alignItems: "right",
                      justifyContent: "center",
                      width: "18%",
                    }}
                  >
                    <Text style={styles.categoryText2}>Dark</Text>
                  </View>
                  <Ionicons
                    style={{ width: "5%" }}
                    name="chevron-forward-outline"
                    size="20"
                    color="#A2A2B5"
                  />
                </TouchableOpacity>

                <TouchableOpacity style={{ padding: 10, flexDirection: "row" }}>
                  <Ionicons
                    style={{ width: "6%", marginLeft: 15 }}
                    name="language-outline"
                    size="20"
                    color="#A2A2B5"
                  />
                  <View
                    style={{
                      alignItems: "left",
                      justifyContent: "center",
                      width: "70%",
                    }}
                  >
                    <Text style={styles.categoryText1}>Font</Text>
                  </View>
                  <View
                    style={{
                      alignItems: "right",
                      justifyContent: "center",
                      width: "18%",
                    }}
                  >
                    <Text style={styles.categoryText2}>Inter</Text>
                  </View>
                  <Ionicons
                    style={{ width: "5%" }}
                    name="chevron-forward-outline"
                    size="20"
                    color="#A2A2B5"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                padding: 10,
                marginTop: 5,
                marginLeft: 15,
                alignItems: "left",
                justifyContent: "center",
              }}
            >
              <View style={{ justifyContent: "center" }}>
                <Text
                  style={{ fontWeight: "bold", color: "white", fontSize: 20 }}
                >
                  General
                </Text>
              </View>
              <View style={styles.categoryBox}>
                <TouchableOpacity style={{ padding: 10, flexDirection: "row" }}>
                  <Ionicons
                    style={{ width: "6%", marginLeft: 15 }}
                    name="help-circle-outline"
                    size="22"
                    color="#A2A2B5"
                  />
                  <View
                    style={{
                      alignItems: "left",
                      justifyContent: "center",
                      width: "70%",
                    }}
                  >
                    <Text style={styles.categoryText1}>Help</Text>
                  </View>
                  <View
                    style={{
                      alignItems: "right",
                      justifyContent: "center",
                      width: "18%",
                    }}
                  >
                    <Text style={styles.categoryText2}></Text>
                  </View>
                  <Ionicons
                    style={{ width: "5%" }}
                    name="chevron-forward-outline"
                    size="20"
                    color="#A2A2B5"
                  />
                </TouchableOpacity>

                <TouchableOpacity style={{ padding: 10, flexDirection: "row" }}>
                  <Ionicons
                    style={{ width: "6%", marginLeft: 15 }}
                    name="information-circle-outline"
                    size="22"
                    color="#A2A2B5"
                  />
                  <View
                    style={{
                      alignItems: "left",
                      justifyContent: "center",
                      width: "70%",
                    }}
                  >
                    <Text style={styles.categoryText1}>About us</Text>
                  </View>
                  <View
                    style={{
                      alignItems: "right",
                      justifyContent: "center",
                      width: "18%",
                    }}
                  >
                    <Text style={styles.categoryText2}></Text>
                  </View>
                  <Ionicons
                    style={{ width: "5%" }}
                    name="chevron-forward-outline"
                    size="20"
                    color="#A2A2B5"
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10, flexDirection: "row" }}>
                  <Ionicons
                    style={{ width: "6%", marginLeft: 15 }}
                    name="star-half-outline"
                    size="20"
                    color="#A2A2B5"
                  />
                  <View
                    style={{
                      alignItems: "left",
                      justifyContent: "center",
                      width: "70%",
                    }}
                  >
                    <Text style={styles.categoryText1}>Rate this app</Text>
                  </View>
                  <View
                    style={{
                      alignItems: "right",
                      justifyContent: "center",
                      width: "18%",
                    }}
                  >
                    <Text style={styles.categoryText2}></Text>
                  </View>
                  <Ionicons
                    style={{ width: "5%" }}
                    name="chevron-forward-outline"
                    size="20"
                    color="#A2A2B5"
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10, flexDirection: "row" }}>
                  <Ionicons
                    style={{ width: "6%", marginLeft: 15 }}
                    name="document-text-outline"
                    size="20"
                    color="#A2A2B5"
                  />
                  <View
                    style={{
                      alignItems: "left",
                      justifyContent: "center",
                      width: "70%",
                    }}
                  >
                    <Text style={styles.categoryText1}>Privacy Policy</Text>
                  </View>
                  <View
                    style={{
                      alignItems: "right",
                      justifyContent: "center",
                      width: "18%",
                    }}
                  >
                    <Text style={styles.categoryText2}></Text>
                  </View>
                  <Ionicons
                    style={{ width: "5%" }}
                    name="chevron-forward-outline"
                    size="20"
                    color="#A2A2B5"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ padding: 20, alignItems: "center" }}>
              <CustomButton
                text="Sign Out"
                color="white"
                backgroundColor="#B21818"
                marginTop={50}
                onPress={() => navigation.navigate("SignIn")}
              ></CustomButton>
            </View>
          </View>
        </ScrollView>
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

  iconContainer: {
    position: "absolute",
    top: 10,
    left: 20,
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
    marginBottom : 5,
    textAlign: "center",
  },
});
