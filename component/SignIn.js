import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
} from "react-native";

import AppLogo from "./AppLogo";
import CustomButton from "./CustomButton";
import { UserContext } from "./UserContext";
import { firebaseapp, db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(firebaseapp);

export default RegisterScreen2 = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

  const onHandleSignIn = () => {
    if (email != "" && password != "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const userinfo = userCredential.user;
          // ...
          setUser(userinfo);
          navigation.navigate("BottomBar");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppLogo />
      <View style={{ alignItems: "center", marginTop: 40 }}>
        <View style={styles.inputitems}>
          <Text style={styles.subhead}>Email Address</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder={""}
            placeholderTextColor="black"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
        </View>
        <View style={styles.inputitems}>
          <Text style={styles.subhead}>Password</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder={""}
            secureTextEntry={true}
            placeholderTextColor="black"
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", marginRight: 110 }}>
            <View style={styles.line} />
            <Text style={{ color: "#666680" }}>Remember me</Text>
          </View>
          <Text style={{ color: "#6E548C" }}>Forgot Password?</Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <CustomButton
          text="Sign In"
          color="white"
          backgroundColor="#B21818"
          marginBottom={25}
          onPress={onHandleSignIn}
        ></CustomButton>
        <Text style={{ color: "white", marginTop: 30, marginBottom: 40 }}>
          You don't have an account yet?
        </Text>
        <CustomButton
          text="Sign Up"
          color="white"
          backgroundColor="#666680"
          marginBottom={25}
          onPress={() => navigation.navigate("Register1")}
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

  inputitems: {
    marginBottom: 20,
  },
  subhead: {
    color: "#6E548C",
  },

  input: {
    borderRadius: 10,
    borderColor: "#6E548C",
    width: 350,
    height: 45,
    borderWidth: 1,
    color: "white",
    fontSize: 20,
    paddingLeft: 10,
  },
  line: {
    borderRadius: 4,
    borderColor: "#6E548C",
    width: 15,
    height: 15,
    borderWidth: 1,
    marginRight: 5,
  },
});
