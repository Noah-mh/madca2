import React, { useContext, useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";

// ico
import { Ionicons } from "@expo/vector-icons";
import { UserContext } from "./UserContext";
import AppLogo from "./AppLogo";
import CircularProgressBar from "./circularProgressLine";

import Loading from "./Loading";

export default HomeUpcomingBill = ({ navigation }) => {
  const { user, data, subscription } = useContext(UserContext);

  const [totalCost, setTotalCost] = useState(0);
  const [highest, setHighest] = useState(0);
  const [lowest, setLowest] = useState(0);
  const [costStrength, setCostStrength] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!subscription) {
      return;
    }
    const calculateTotal = subscription.reduce(
      (total, subscription) => {
        return total + parseFloat(subscription.cost);
      },
      0
    );
    setTotalCost(calculateTotal.toFixed(2));

    const costs = subscription.map((item) => parseFloat(item.cost));
    const maxCost = Math.max(...costs);
    setHighest(maxCost);
    const minCost = Math.min(...costs);
    setLowest(minCost);
  }, [subscription]);

  useEffect(() => {
    if (!data) {
      return;
    }
    const calculateCostStrength = (
      (totalCost / parseFloat(data.budget)) *
      75
    ).toFixed(2);

    setCostStrength(calculateCostStrength);
  }, [totalCost]);
  const today = new Date();
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1);
  const month = nextMonth.toLocaleString('default', { month: 'short' });
  return (
    <SafeAreaView style={styles.container}>
      {/* {loading ? (
        <Loading />
      ) : (
        <View> */}
      <View>
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
        <View style={{ position: "absolute", top: 40, left: 65 }}>
          <CircularProgressBar
            size={300}
            value={75}
            degree={"-135deg"}
            color={"#fff"}
            zIndex={-1}
          />
          <CircularProgressBar
            size={300}
            value={totalCost == 0 ? 0 : costStrength}
            degree={"-135deg"}
            color={"#B21818"}
            zIndex={1}
          />
        </View>
        <View style={{ marginTop: 100, alignItems: "center" }}>
          <AppLogo />
          <View style={{ alignItems: "center" }}>
            <Text style={styles.bill}>${totalCost}</Text>
            <Text style={styles.billtext}>This month bills</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Budget")}
          >
            <Text style={{ fontWeight: "bold", color: "white" }}>
              See Your Budget
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.box}>
            <Text style={{ color: "#fff" }}>Active Subs</Text>
            <Text style={styles.textInsideBox}>
              {totalCost == 0 ? 0 : subscription.length}
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={{ color: "#fff" }}>Highest Subs</Text>
            <Text style={styles.textInsideBox}>
              ${totalCost == 0 ? 0 : highest}
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={{ color: "#fff" }}>Lowest Subs</Text>
            <Text style={styles.textInsideBox}>
              ${totalCost == 0 ? 0 : lowest}
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.subscriptionBox,
            {
              flexDirection: "row",
              marginTop: 28,
              backgroundColor: "#0E0E12",
            },
          ]}
        >
          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate("HomeYourSub")}
          >
            <Text style={{ fontWeight: "bold", color: "white" }}>
              Your Subscripton
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button2,
              { backgroundColor: "rgba(78, 78, 97, 0.4)" },
            ]}
          >
            <Text style={{ fontWeight: "bold", color: "white" }}>
              Upcoming Bills
            </Text>
          </TouchableOpacity>
        </View>
        {totalCost == 0 ? null : (
          <View style={{ maxHeight: 250 }}>
            <FlatList
              data={subscription}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Info", { item: item });
                    }}
                  >
                    <View
                      style={[
                        styles.subscriptionBox,
                        {
                          flexDirection: "row",
                          marginTop: 15,
                          backgroundColor: "#353542",
                        },
                      ]}
                    >
                      <View style={styles.subscriptionDate}>
                        <Text style={{ color: "#fff" }}>
                          {month}
                        </Text>
                        <Text style={styles.textInsideBox}>
                          {String(
                            item.timestamp.toDate().getDate()
                          ).padStart(2, "0")}
                        </Text>
                      </View>
                      <Text style={styles.subscriptionText1}>
                        {item.subName}
                      </Text>
                      <Text style={styles.subscriptionText2}>
                        ${item.cost}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        )}
      </View>
      {/*  </View>
      )} */}
    </SafeAreaView>
  );
};

/* <View style={styles.subscriptionDate}>
                  <Text style={{ color: "#fff" }}>Jun</Text>
                  <Text style={styles.textInsideBox}>25</Text>
                </View> */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#1C1C23",
    marginTop: StatusBar.currentHeight || 0,
  },
  circleBG: {
    position: "absolute",
    width: 426,
    height: 488,
    borderRadius: 20,
    zIndex: -1,
  },

  lightBG: {
    position: "absolute",
    borderRadius: 20,
    padding: 10,
    borderWidth: 1,
    width: "100%",
    height: "58%",
    zIndex: -1,
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
    marginTop: 40,
  },
  billtext: {
    fontSize: 15,
    color: "#83839C",
  },

  button: {
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    alignItems: "center",
    width: 180,

    backgroundColor: "#000",
    opacity: 0.8,
    marginTop: 25,
  },
  button2: {
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    width: 180,
    marginLeft: 8,
    marginRight: 8,
  },

  box: {
    borderRadius: 20,
    padding: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 80,
    backgroundColor: "#4E4E61",
    opacity: 0.6,
    marginTop: 20,
    marginLeft: 12,
    marginRight: 10,
  },

  subscriptionBox: {
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    left: 11,
  },

  textInsideBox: {
    fontSize: "20",
    fontWeight: "bold",
    color: "white",
  },

  subscriptionDate: {
    borderRadius: 15,
    padding: 10,

    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#4E4E61",
    opacity: 0.6,
  },

  subscriptionText1: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
    width: "70%",
    textAlign: "left",
  },
  subscriptionText2: {
    fontWeight: "bold",
    color: "white",

    marginRight: 5,
    textAlign: "right",
    alignItems: "right",
    justifyContent: "center",
    width: "16%",
  },
});
