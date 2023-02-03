import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

import BottomBarNavigator from "./component/BottomBarNavigator";
import WelcomeScreen from "./component/WelcomeScreen";
import SignInScreen from "./component/SignIn";
import RegisterScreen1 from "./component/register1";
import RegisterScreen2 from "./component/register2";

import SettingScreen from "./component/Setting";
import editProfile from "./component/setting/editProfile";
import InfoScreen from "./component/SubInfo";
import CurrencyScreen from "./component/setting/CurrencyScreen";

import { UserProvider } from "./component/UserContext";
const Stack = createStackNavigator();

function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register1"
            component={RegisterScreen1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register2"
            component={RegisterScreen2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Setting"
            component={SettingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditProfile"
            component={editProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Currency"
            component={CurrencyScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="BottomBar"
            component={BottomBarNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen
              name="Info"
              component={InfoScreen}
              options={{ headerShown: false }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;
