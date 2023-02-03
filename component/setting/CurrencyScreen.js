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

export default CurrencyScreen = ({ navigation }) => {
  const [newUsername, setNewUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, data, setUser } = useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
      
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
    fontWeight: "medium",
    fontSize: 18,
    color: "#1778F2",
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
