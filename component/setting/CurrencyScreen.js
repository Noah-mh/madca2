import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";
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
import { Ionicons } from "@expo/vector-icons";

export default CurrencyScreen = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const { user, data, setUser } = useContext(UserContext);
  const handlePress = (index) => {
    setSelectedIndex(index);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Default Currency</Text>
        </View>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("Setting")}
        >
          <Ionicons
            style={styles.icon}
            name="chevron-back-outline"
            size="30"
            color="#A2A2B5"
          />
        </TouchableOpacity>
        <View
          style={{
            padding: 10,
            marginTop: 25,
            marginLeft: 15,
            alignItems: "left",
            justifyContent: "center",
          }}
        >
          <View style={styles.categoryBox}>
            <TouchableOpacity
              style={{
                padding: 20,
                flexDirection: "row",
                borderBottomWidth: 2,
              }}
              onPress={() => handlePress(0)}
            >
              <View
                style={{
                  alignItems: "left",
                  justifyContent: "center",
                  width: "90%",
                }}
              >
                <Text style={styles.categoryText1}>
                  United States dollar ( $USD )
                </Text>
              </View>

              <View
                style={{
                  width: "5%",
                  alignItems: "right",
                  justifyContent: "center",
                }}
              >
                {selectedIndex === 0 ? (
                  <Ionicons name="checkmark" size="20" color="#A2A2B5" />
                ) : null}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 20,
                flexDirection: "row",
                borderBottomWidth: 2,
              }}
              onPress={() => handlePress(1)}
            >
              <View
                style={{
                  alignItems: "left",
                  justifyContent: "center",
                  width: "90%",
                }}
              >
                <Text style={styles.categoryText1}>
                  Singapore dollar ( $SGD )
                </Text>
              </View>

              <View
                style={{
                  width: "5%",
                  alignItems: "right",
                  justifyContent: "center",
                }}
              >
                {selectedIndex === 1 ? (
                  <Ionicons name="checkmark" size="20" color="#A2A2B5" />
                ) : null}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ padding: 20, flexDirection: "row" }}
              onPress={() => handlePress(2)}
            >
              <View
                style={{
                  alignItems: "left",
                  justifyContent: "center",
                  width: "90%",
                }}
              >
                <Text style={styles.categoryText1}>
                  Australian dollar ( $AUD )
                </Text>
              </View>

              <View
                style={{
                  width: "5%",
                  alignItems: "right",
                  justifyContent: "center",
                }}
              >
                {selectedIndex === 2 ? (
                  <Ionicons name="checkmark" size="20" color="#A2A2B5" />
                ) : null}
              </View>
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
    fontSize: 14,
    color: "white",
    marginLeft: 10,
    textAlign: "center",
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
});
