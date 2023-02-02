import React, { useContext, useState, useEffect } from "react";

import {
  Alert,
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

import CircularProgressBar from "./circularProgressLine";
import ProgressLine from "./progressLine";

import Loading from "./Loading";

export default Budget = ({ navigation }) => {
  const { user, data, subscription, setSubscription } = useContext(UserContext);

  const [totalCost, setTotalCost] = useState(0);
  const [costStrength, setCostStrength] = useState(0);
  const [costForProgressBar, setCostForProgressBar] = useState([]);

  const [loading, setLoading] = useState(true);
  const propertyMapping = {
    Transportation: { icon: "car", lineColor: "#B21818" },
    Security: { icon: "finger-print", lineColor: "#AD7BFF" },
    Entertainment: { icon: "headset", lineColor: "#00FAD9" },
    Education: { icon: "book", lineColor: "#FFA699" },
  };

  useEffect(() => {
    if (!subscription) {
      return;
    }
    const calculateTotal = subscription.reduce((total, subscription) => {
      return total + parseFloat(subscription.cost);
    }, 0);
    setTotalCost(calculateTotal.toFixed(2));
  }, [subscription]);

  useEffect(() => {
    if (!data) {
      return;
    }
    const categories = {};
    subscription.forEach((subscription) => {
      const category = subscription.category.trim();
      if (!categories[category]) {
        categories[category] = parseFloat(subscription.cost);
      } else {
        categories[category] += parseFloat(subscription.cost);
      }
    });
    // console.log(categories);

    const costArray = Object.entries(categories).map(
      ([category, cost], index) => ({
        key: index,
        category,
        cost,
      })
    );
    costArray.sort((a, b) => a.cost - b.cost);

    // console.log(costArray)
    const costStrength = [];
    let totalCost = 0;
    for (let i = costArray.length - 1; i >= 0; i--) {
      totalCost += costArray[i].cost;
      costStrength[costArray.length - 1 - i] = {
        category: costArray[i].category,
        cost: costArray[i].cost,
        costStrength: (totalCost / data.budget).toFixed(2),
        costLineStrength: (costArray[i].cost / data.budget).toFixed(2),
      };
    }
    costStrength.sort((a, b) => a.cost - b.cost);
    // console.log(costStrength);
    setCostForProgressBar(costStrength);
  }, [subscription]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Spending and budget</Text>
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
        <View style={{ position: "absolute", top: 80, left: 87 }}>
          <CircularProgressBar
            size={260}
            value={50}
            degree={"-90deg"}
            color={"#fff"}
            zIndex={-10}
          />
        </View>

        {costForProgressBar.map((item, index) => (
          <View
            key={item.id}
            style={{ position: "absolute", top: 80, left: 87 }}
          >
            <CircularProgressBar
              zIndex={index * 10}
              size={260}
              value={item.costStrength * 50}
              degree={"-90deg"}
              color={propertyMapping[item.category].lineColor}
            />
          </View>
        ))}

        <View style={{ marginTop: 100, alignItems: "center" }}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.bill}>${totalCost}</Text>
            <Text style={styles.billtext}>of ${data.budget} budget</Text>
          </View>

          <View style={styles.info}>
            <Text
              style={{ fontWeight: "bold", color: "white", marginRight: 10 }}
            >
              Your Budgets are on track
            </Text>
            <Ionicons name="thumbs-up" color="#FFDB5E" size="15" />
          </View>
        </View>

        {totalCost == 0 ? null : (
          <View style={{ maxHeight: 500 }}>
            <FlatList
              data={costForProgressBar}
              renderItem={({ item }) => {
                return (
                  <View style={{ alignItems: "center", marginTop: 15 }}>
                    <View style={styles.categoryBox}>
                      <View style={styles.category}>
                        <Ionicons
                          name={propertyMapping[item.category].icon}
                          size="40"
                          color="#A2A2B5"
                        />
                        <View style={styles.categoryTextBox}>
                          <Text style={styles.categoryText1}>
                            {item.category}
                          </Text>
                        </View>
                        <View>
                          <Text style={styles.categoryText2}>${item.cost}</Text>
                        </View>
                      </View>
                      <View style={styles.category}>
                        <ProgressLine
                          progress={item.costLineStrength}
                          lineColor={propertyMapping[item.category].lineColor}
                        />
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        )}
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
    top: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#A2A2B5",
    fontSize: 16,
    fontWeight: "semi-bold",
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
    fontSize: 30,
    color: "white",
    marginTop: 40,
  },
  billtext: {
    fontSize: 15,
    color: "#83839C",
  },

  info: {
    flexDirection: "row",
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    height: 60,
    backgroundColor: "#5A5A8E",
    opacity: 0.8,
    marginTop: 25,
  },

  categoryBox: {
    borderRadius: 20,
    padding: 3,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    backgroundColor: "#353542",
    marginTop: 10,
  },

  category: {
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  categoryTextBox: {
    marginLeft: 15,
    width: "60%",
  },

  categoryText1: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    marginLeft: 30,
    width: "70%",
    textAlign: "left",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText2: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 5,
    textAlign: "right",
    justifyContent: "center",
    alignItems: "center",
  },
});
