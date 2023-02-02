import React, { useState, useEffect, useContext } from "react";
import {
  Alert,
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
// ico
import { Ionicons } from "@expo/vector-icons";
import { UserContext } from "./UserContext";

import Loading from "./Loading";
import getYearlyCalendar, { getMonthlyCalendar } from "./YearlyCalendar";
const { width } = Dimensions.get("screen");

const DropDown = ({ setMonth, months }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [month, setSelectedMonth] = useState(months[0]);

  return (
    <View style={{ position: "absolute" }}>
      <TouchableOpacity
        style={styles.monthButton}
        onPress={() => setShowDropDown(!showDropDown)}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            marginRight: 3,
            width: "80%",
          }}
        >
          {month}
        </Text>
        <Ionicons name="chevron-down" color="white" size="20" />
      </TouchableOpacity>
      {showDropDown && (
        <View>
          {months.map((month, index) => (
            <TouchableOpacity
              style={styles.monthButton}
              key={index}
              onPress={() => {
                setSelectedMonth(month);
                setMonth(month);
                setShowDropDown(false);
              }}
            >
              <Text
                style={{ fontWeight: "bold", color: "white", marginRight: 3 }}
              >
                {month}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
const CalendarApp = () => {
  const { user, subscription, setSubscription } = useContext(UserContext);

  const [month, setMonth] = useState("January");
  const [dateList, setDateList] = useState([]);
  const [activeDate, setActiveDate] = useState(null);
  const today = new Date();
  const yearlycalendar = getYearlyCalendar(today.getFullYear());

  const months = yearlycalendar.map((arr) => arr[0].month);

  const day = String(today.getDate()).padStart(2, "0");
  const monthss = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  const formattedDate = `${day}.${monthss}.${year}`;

  const getDates = () => {
    const dates = getMonthlyCalendar(
      today.getFullYear(),
      months.indexOf(month)
    );
    setDateList(dates);
  };

  useEffect(() => {
    getDates();
  }, [month]);

  return (
    <View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "left",
          width: "100%",
          flexDirection: "row",
          marginLeft: 25,
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 15, color: "#83839C", width: "70%" }}>
          3 subscriptions for today
        </Text>
      </View>
      <View
        style={{ position: "absolute", right: 125, top: 10, zIndex: 10000 }}
      >
        <DropDown
          style={styles.monthButton}
          setMonth={setMonth}
          months={months}
        />
      </View>

      <ScrollView style={{ marginLeft: 25, marginTop: 30 }} horizontal={true}>
        {dateList.map((date, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.box,
              date.date === activeDate ? styles.activeDateBox : null,
            ]}
            onPress={() => {
              setActiveDate(date.date);
            }}
          >
            <Text style={styles.date}>{date.date}</Text>
            <Text
              style={[
                styles.day,
                date.date === activeDate ? styles.activeDay : null,
              ]}
            >
              {date.dayOfWeek}
            </Text>

            {date.date === activeDate ? (
              <View style={styles.active}></View>
            ) : null}
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={[styles.organiseBox, { marginLeft: 25, marginTop: 40 }]}>
        <View style={{ justifyContent: "left", width: "70%" }}>
          <Text style={styles.textInsideBox}>{month}</Text>
          <Text style={{ fontSize: 13, color: "#83839C", marginTop: 5 }}>
            {formattedDate}
          </Text>
        </View>
        <View style={{ justifyContent: "right" }}>
          <Text
            style={[
              styles.textInsideBox,
              { textAlign: "right", marginRight: 35 },
            ]}
          >
            $24.99
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "#83839C",
              textAlign: "right",
              marginRight: 20,
              marginTop: 5,
            }}
          >
            in upcoming bills
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          marginLeft: 25,
          alignItems: "left",
          zIndex: -1,
        }}
      >
        <ScrollView>
          <View
            style={[styles.organiseBox, { marginTop: 5, flexDirection: "row" }]}
          >
            <TouchableOpacity
              style={styles.subBox}
              onPress={() => {
                Alert.alert("This function is not finished");
              }}
            >
              <Image source={require("../assets/SpotifyLogo.png")}></Image>
              <Text style={styles.subscriptionText1}>Spotify</Text>
              <Text style={styles.subscriptionText2}>$5.99</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subBox}
              onPress={() => {
                Alert.alert("This function is not finished");
              }}
            >
              <Image source={require("../assets/YTPremiumLogo.png")}></Image>
              <Text style={styles.subscriptionText1}>YouTube Premium</Text>
              <Text style={styles.subscriptionText2}>$18.99</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[styles.organiseBox, { marginTop: 5, flexDirection: "row" }]}
          >
            <TouchableOpacity
              style={styles.subBox}
              onPress={() => {
                Alert.alert("This function is not finished");
              }}
            >
              <Image source={require("../assets/OneDriveLogo.png")}></Image>
              <Text style={styles.subscriptionText1}>Microsoft OneDrive</Text>
              <Text style={styles.subscriptionText2}>$5.99</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subBox}
              onPress={() => {
                Alert.alert("This function is not finished");
              }}
            >
              <Image source={require("../assets/NetflixLogo.png")}></Image>
              <Text style={styles.subscriptionText1}>Netflix</Text>
              <Text style={styles.subscriptionText2}>$39.99</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Calendar = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lightBG}></View>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Calendar</Text>
        </View>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("Setting")}
        >
          <Ionicons
            style={styles.icon}
            name="settings-outline"
            size="30"
            color="#A2A2B5"
          />
        </TouchableOpacity>
        <View style={{ marginTop: 50, marginLeft: 25, alignItems: "left" }}>
          <View style={{ alignItems: "left" }}>
            <Text style={styles.bill}>Subs</Text>
            <Text style={styles.bill}>Schedule</Text>
          </View>
        </View>

        <CalendarApp />
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

  header: {
    top: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#A2A2B5",
    fontSize: 16,
    fontWeight: "semi-bold",
  },

  lightBG: {
    position: "absolute",
    borderRadius: 20,
    padding: 10,
    borderWidth: 1,
    width: "100%",
    height: "52%",
    color: "#353542",

    /* backgroundColor: 'rgb(131,131,131,0.5)',
    opacity: 0.9,
    zIndex: -1,
    pointerEvents: 'none', */
  },

  iconContainer: {
    position: "absolute",
    top: 10,
    right: 20,
  },
  icon: {
    width: 32,
    height: 32,
  },
  bill: {
    fontWeight: "bold",
    fontSize: 50,
    color: "white",
  },

  date: {
    fontSize: "22",
    fontWeight: "bold",
    color: "white",
  },
  day: {
    fontSize: 15,
    color: "#83839C",
    marginBottom: 30,
  },
  activeDay: {
    fontWeight: "bold",
    color: "white",
  },
  monthButton: {
    flexDirection: "row",
    borderRadius: 15,
    padding: 10,
    width: 120,
    borderWidth: 2,
    alignItems: "center",
    backgroundColor: "#000",
  },

  box: {
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "top",
    width: 50,
    height: 110,
    backgroundColor: "#4E4E61",
    marginRight: 12,
  },
  activeDateBox: {
    borderWidth: 3,
    width: 60,
    height: 120,
    backgroundColor: "#4E4E61",
  },
  active: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "orange",
  },

  organiseBox: {
    alignItems: "center",
    justifyContent: "left",
    marginLeft: 3,
    width: "100%",
    flexDirection: "row",
  },

  textInsideBox: {
    fontSize: "20",
    fontWeight: "bold",
    color: "white",
  },

  subBox: {
    borderRadius: 20,
    padding: 10,
    borderWidth: 1,
    alignItems: "left",
    width: "46%",
    height: 200,
    backgroundColor: "#4E4E61",

    marginTop: 5,

    marginRight: 10,
  },

  subscriptionText1: {
    marginTop: 95,
    fontWeight: "bold",
    fontSize: 16,
  },

  subscriptionText2: {
    fontWeight: "bold",
    fontSize: 22,
  },
});
