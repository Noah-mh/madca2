import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import HomeScreenYourSub from "./home-yoursub";
import HomeScreenUpcomingBill from "./home-upcomingbill";
import BudgetScreen from "./Budget";
import AddScreen from "./AddItem";
import CalendarScreen from "./Calendar";
import CreditCardScreen from "./CreditCard";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeYourSub"
        component={HomeScreenYourSub}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="HomeUpcoming"
        component={HomeScreenUpcomingBill}
        options={{ headerShown: false, animationEnabled: false }}
      />
    </Stack.Navigator>
  );
};

const CustomTabBarIcon = ({ child, onPress }) => {
  <TouchableOpacity
    style={{
      position: "absolute",
      top: -60,
      alignItems: "top",
      justifyContent: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#B21818",
      }}
    >
      {child}
    </View>
  </TouchableOpacity>;
};

const BottomBarNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name == "Add") {
            iconName = focused ? "add-circle" : "add-circle-outline";
            return (
              {
                tabBarButtom: (props) => (
                  <CustomTabBarIcon {...props} />
                ),
              },
              (
                <Text>
                  <Ionicons
                    name={iconName}
                    size={"50"}
                    color={"#B21818"}
                  />
                </Text>
              )
            );
          } else {
            switch (route.name) {
              case "Home":
                iconName = focused ? "ios-home" : "ios-home";
                break;
              case "Budget":
                iconName = focused ? "grid" : "grid-outline";
                break;

              case "Calendar":
                iconName = focused ? "calendar" : "calendar-outline";
                break;
              case "Card":
                iconName = focused ? "card" : "card-outline";
                break;
              default:
                break;
            }
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 12,
                }}
              >
                <Text>
                  <Ionicons
                    name={iconName}
                    size={"32"}
                    color={color}
                  />
                </Text>
              </View>
            );
          }
        },

        tabBarStyle: {
          position: "absolute",
          backgroundColor: "white",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,

          borderRadius: 15,
          ...styles.shadow,
        },

        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "rgba(0,0,0, 0.5)",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: () => null, headerShown: false }}
      />

      <Tab.Screen
        name="Budget"
        component={BudgetScreen}
        options={{ tabBarLabel: () => null, headerShown: false }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{ tabBarLabel: () => null, headerShown: false }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{ tabBarLabel: () => null, headerShown: false }}
      />
      <Tab.Screen
        name="Card"
        component={CreditCardScreen}
        options={{ tabBarLabel: () => null, headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default BottomBarNavigator;
