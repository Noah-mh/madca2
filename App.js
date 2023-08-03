import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import BottomBarNavigator from "./component/BottomBarNavigator";
import WelcomeScreen from "./component/WelcomeScreen";
import SignInScreen from "./component/SignIn";
import RegisterScreen1 from "./component/register1";
import RegisterScreen2 from "./component/register2";
import SignInWithProviderScreen from "./component/SignInWithProvider";
import SettingScreen from "./component/Setting";
import EditProfile from "./component/setting/EditProfile";
import InfoScreen from "./component/SubInfo";
import CurrencyScreen from "./component/setting/CurrencyScreen";

import { UserProvider } from "./component/UserContext";
const Stack = createStackNavigator();

function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen
            name="Register1"
            component={RegisterScreen1}
          />
          <Stack.Screen
            name="Register2"
            component={RegisterScreen2}
          />
          <Stack.Screen
            name="SignInWithProvider"
            component={SignInWithProviderScreen}
          />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Setting" component={SettingScreen} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="Currency" component={CurrencyScreen} />
          <Stack.Screen
            name="BottomBar"
            component={BottomBarNavigator}
          />
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="Info" component={InfoScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;
