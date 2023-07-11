import React, { useState, useContext } from "react";
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
import { firebaseapp } from "../firebase";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const onHandleSignIn = () => {
    if (email === "" || password === "") {
      alert("Email or password cannot be empty.");
      return;
    }

    const auth = getAuth(firebaseapp);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigation.navigate("BottomBar");
      })
      .catch((error) => {
        alert(error.message);
      });
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
            placeholderTextColor="black"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputitems}>
          <Text style={styles.subhead}>Password</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            placeholderTextColor="black"
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
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
        />
        <Text
          style={{ color: "white", marginTop: 30, marginBottom: 40 }}
        >
          You don't have an account yet?
        </Text>
        <CustomButton
          text="Sign Up"
          color="white"
          backgroundColor="#666680"
          marginBottom={25}
          onPress={() => navigation.navigate("Register1")}
        />
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
