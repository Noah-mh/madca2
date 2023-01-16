import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from '@expo/vector-icons';

import BottomBarNavigator from './component/BottomBarNavigator';
import WelcomeScreen from './component/WelcomeScreen';
import SignInScreen from './component/SignIn';
import RegisterScreen1 from './component/register1';
import RegisterScreen2 from './component/register2';
import AddScreen from './component/AddItem';
import SettingScreen from './component/Setting';

import Budget from './component/Budget'

const Stack = createStackNavigator();

function App() {
  return (
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
          name="AddScreen"
          component={AddScreen}
          options={{ headerShown: false }}
        />
<Stack.Screen
          name="add"
          component={Budget}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="BottomBar"
          component={BottomBarNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
