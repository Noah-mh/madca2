import React, { useState } from "react";
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
import ProgressLine from "./progressLine";
/* import FirebaseApp from "../firebase";

const auth = FirebaseApp.auth(); */

export default RegisterScreen2 = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
/* 
  const onHandleSignUp = async () => {
    try {
      if (email != "" && password != "") {
        await auth.createUserWithEmailAndPassword(email, password);
        setSignupStatus("created user ok");
      }
    } catch (error) {
      alert(error.message);
    }
  }; */

  return (
    <SafeAreaView style={styles.container}>
      <AppLogo />
      <View style={{ alignItems: "center", marginTop: 80 }}>
        <View style={styles.inputitems}>
          <Text style={styles.subhead}>Username</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder={""}
            placeholderTextColor="black"
            autoCapitalize="none"
            value={username}
            onChangeText={(text) => setUsername(text)}
          ></TextInput>
        </View>
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
        <View style={styles.inputitems}>
          <Text style={styles.subhead}>Confirm Password</Text>
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
        <View style={styles.line}>
          <ProgressLine progress={1} lineColor="#00FAD9" />
          <ProgressLine progress={1} lineColor="#00FAD9" />
          <ProgressLine progress={1} lineColor="#00FAD9" />
          <ProgressLine progress={0.3} lineColor="#00FAD9" />
        </View>
        <Text style={styles.termAndCondition}>
          Use 8 or more characters with a mix of letters, numbers & symbols.
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <CustomButton
          text="Register"
          color="white"
          backgroundColor="#B21818"
          marginBottom={25}
          onPress={ () => navigation.navigate("BottomBar")}
        ></CustomButton>
        <Text style={{ color: "white", marginTop: 30, marginBottom: 40 }}>
          Do you have already an account?
        </Text>
        <CustomButton
          text="Sign in"
          color="white"
          backgroundColor="#666680"
          marginBottom={25}
          onPress={() => navigation.navigate("SignIn")}
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
    fontSize: 16,
  },

  input: {
    borderRadius: 10,
    borderColor: "#6E548C",
    width: 350,
    height: 45,
    borderWidth: 1,
  },
  line: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: 85,
    marginTop: 10,
    marginBottom: 10,
  },

  termAndCondition: {
    color: "#6E548C",
    margin: 25,
    textAlign: "left",
    width: 330,
  },
});
