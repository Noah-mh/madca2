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
  FlatList,
} from "react-native";
// ico
import { Ionicons } from "@expo/vector-icons";
import { UserContext } from "./UserContext";

import Loading from "./Loading";
import getYearlyCalendar, { getMonthlyCalendar } from "./YearlyCalendar";
const { width } = Dimensions.get("screen");

const DropDown = ({ setMonth, months }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [month, setSelectedMonth] = useState(
    new Date().toLocaleString("default", { month: "long" })
  );

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
export default Calendar = ({ navigation }) => {
  const { user, subscription, setSubscription } = useContext(UserContext);
  const today = new Date();
  const [month, setMonth] = useState(
    today.toLocaleString("default", { month: "long" })
  );
  const [dateList, setDateList] = useState([]);
  const [activeDate, setActiveDate] = useState(today);

  const yearlycalendar = getYearlyCalendar(today.getFullYear());

  const months = yearlycalendar.map((arr) => arr[0].month);

  const day = String(
    activeDate.date ? activeDate.date : today.getDate()
  ).padStart(2, "0");
  const monthss = String(
    activeDate.month
      ? months.indexOf(activeDate.month) + 1
      : today.getMonth() + 1
  ).padStart(2, "0");
  const year = activeDate.year ? activeDate.year : today.getFullYear();

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

  const imageMapping = {
    Spotify: require("../assets/SpotifyLogo.png"),
    "YouTube Premium": require("../assets/YTPremiumLogo.png"),
    "Microsoft One Drive": require("../assets/OneDriveLogo.png"),
    Netflix: require("../assets/NetflixLogo.png"),
    "HBO Go": require("../assets/HBOGOsmallLogo.png"),
  };

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

          <ScrollView
            style={{ marginLeft: 25, marginTop: 30 }}
            horizontal={true}
          >
            {dateList.map((date, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.box,
                  date.date === activeDate.date ? styles.activeDateBox : null,
                ]}
                onPress={() => {
                  setActiveDate(date);
                }}
              >
                <Text style={styles.date}>{date.date}</Text>
                <Text
                  style={[
                    styles.day,
                    date.date === activeDate.date ? styles.activeDay : null,
                  ]}
                >
                  {date.dayOfWeek}
                </Text>

                {date.date === activeDate.date ? (
                  <View style={styles.active}></View>
                ) : null}
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={[styles.organiseBox, { marginTop: 40 }]}>
            <View style={{ justifyContent: "left", width: "65%" }}>
              <Text style={styles.textInsideBox}>{month}</Text>
              <Text style={{ fontSize: 13, color: "#83839C", marginTop: 5 }}>
                {formattedDate}
              </Text>
            </View>
            <View
              style={{
                justifyContent: "right",
                alignSelf: "right",
                width: "25%",
              }}
            >
              <Text style={[styles.textInsideBox, { textAlign: "right" }]}>
                $24.99
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: "#83839C",
                  textAlign: "right",
                  alignSelf: "right",
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
              alignItems: "center",
              justifyContent: "center",
              zIndex: -1,
              width: width,
            }}
          >
            <View style={{ maxHeight: 280 }}>
              <FlatList
                numColumns={2}
                data={subscription}
                renderItem={({ item, index }) => {
                  return (
                    <View
                      style={[
                        styles.organiseBox,
                        {
                          marginTop: 5,
                          marginLeft: index % 2 === 0 ? 7 : 10,
                          width: "47%",
                          height: 200,
                        },
                      ]}
                    >
                      <TouchableOpacity
                        style={styles.subBox}
                        onPress={() => {
                          navigation.navigate("Info", { item: item });
                        }}
                      >
                        <Image source={imageMapping[item.subName]}></Image>
                        <Text style={styles.subscriptionText1}>
                          {item.subName}
                        </Text>
                        <Text style={styles.subscriptionText2}>
                          ${item.cost}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </View>
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
    justifyContent: "center",
    width: width,
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
    width: "100%",
    height: 200,
    backgroundColor: "#4E4E61",
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
