import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import validatePassword from "../validatePassword";
import {
  updateUserDocument,
  updateUserEmail,
  updateUserPassword,
  signInUser,
} from "../../firebase/firebaseOperation";

export default EditProfile = ({ navigation }) => {
  const [newUsername, setNewUsername] = useState(username);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const { user, data, setUser } = useContext(UserContext);
  const [username, setUsename] = useState(data.username);

  useEffect(() => {
    setUsename(data.username);
  }, [user]);

  // useEffect(() => {
  //   const passwordValidationResult = validatePassword(password);
  //   if (!passwordValidationResult.isValid) {
  //     setPasswordError(passwordValidationResult.error);
  //   } else {
  //     setPasswordError("");
  //   }
  // });

  const onHandleDone = async () => {
    try {
      if (
        newUsername &&
        email &&
        password &&
        password === confirmPassword
      ) {
        await updateUserDocument(user, newUsername);
        await updateUserEmail(email);
        await updateUserPassword(password);

        const userCredential = await signInUser(email, password);
        setUser(userCredential.user);
        alert("Update Okay!");
        navigation.navigate("Setting");
      } else if (password !== confirmPassword) {
        alert("Passwords do not match");
      }
    } catch (error) {
      alert(
        `Error updating document in edit profile: ${error.message}`
      );
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    const passwordValidationResult = validatePassword(text);
    if (!passwordValidationResult.isValid) {
      setPasswordError(passwordValidationResult.error);
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setIsPasswordMatch(password === text);
  };
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
          onPress={onHandleDone}
        >
          <View>
            <Text style={{ color: "#1778F2" }}>Done</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ width: 80, height: 80, borderRadius: 40 }}
              source={require("../../assets/profile.jpg")}
            ></Image>
            <TouchableOpacity>
              <Text style={styles.bill}>Change Profile Picture</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <View style={styles.inputitems}>
            <Text style={styles.subhead}>Name</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder={username}
              placeholderTextColor="white"
              autoCapitalize="none"
              value={newUsername}
              onChangeText={(text) => setNewUsername(text)}
            ></TextInput>
          </View>
          <View style={styles.inputitems}>
            <Text style={styles.subhead}>Email Address</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder={user.email}
              placeholderTextColor="white"
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
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
            />
          </View>

          {passwordError !== "" && (
            <Text style={styles.errorMsg}>{passwordError}</Text>
          )}
          {!isPasswordMatch && (
            <Text style={styles.errorMsg}>
              Passwords do not match
            </Text>
          )}
        </View>
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
