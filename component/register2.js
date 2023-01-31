import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  AsyncStorage,
} from "react-native";

import AppLogo from "./AppLogo";
import CustomButton from "./CustomButton";
import ProgressLine from "./progressLine";
import validatePassword from "./validatePassword";
import { UserContext } from "./UserContext";
import { firebaseapp, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth(firebaseapp);

export default RegisterScreen2 = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const passwordValidationResult = validatePassword(password);
    if (!passwordValidationResult.isValid) {
      setPasswordError(passwordValidationResult.error);
    } else {
      setPasswordError("");
    }
  });

  const onHandleSignUp = () => {
    if (email != "" && password != "") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const userinfo = userCredential.user;
          // ...
          setUser(userinfo);
          setDoc(doc(db, "userData", userinfo.uid), {
            username: username,
            subscriptions: [],
          });
          navigation.navigate("BottomBar");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
  };
  const calculatePasswordStrength = (password) => {
    // Minimum password length
    const MIN_LENGTH = 8;

    // Check if password length is less than 8
    if (password.length < MIN_LENGTH) {
      return 0.1;
    }

    // Check for mix of letters, numbers, and symbols
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!hasLetters || !hasSymbols) {
      return 0.3;
    }

    if (!hasLetters || !hasNumbers || !hasSymbols) {
      return 0.7;
    }

    return 1;
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordStrength(calculatePasswordStrength(text));
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setIsPasswordMatch(password === text);
  };

  let passwordStrengthColor = "red";
  if (passwordStrength >= 0.5) {
    passwordStrengthColor = "#00FAD9";
  }
  if (passwordStrength >= 0.8) {
    passwordStrengthColor = "green";
  }

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
            placeholderTextColor="white"
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
            onChangeText={handlePasswordChange}
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
            value={confirmpassword}
            onChangeText={handleConfirmPasswordChange}
          />
        </View>
        <View style={styles.line}>
          <ProgressLine
            progress={passwordStrength}
            lineColor={passwordStrengthColor}
          />
        </View>
        {passwordError !== "" && (
          <Text style={styles.errorMsg}>{passwordError}</Text>
        )}
        {!isPasswordMatch && (
          <Text style={styles.errorMsg}>Passwords do not match</Text>
        )}
      </View>
      <View style={{ alignItems: "center" }}>
        <CustomButton
          text="Register"
          color="white"
          backgroundColor="#B21818"
          marginBottom={25}
          onPress={onHandleSignUp}
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
    color: "white",
    fontSize: 20,
    paddingLeft: 10,
  },
  line: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: 330,
    marginTop: 10,
    marginBottom: 10,
  },

  termAndCondition: {
    color: "#6E548C",
    margin: 25,
    textAlign: "left",
    width: 330,
  },
  errorMsg: {
    color: "red",
    margin: 10,
    textAlign: "left",
    width: 330,
  },
});
