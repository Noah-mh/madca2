import React, { useContext, useState, useEffect } from "react";

import {
  Alert,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// ico
import { Ionicons } from "@expo/vector-icons";
import { UserContext } from "./UserContext";

import CircularProgressBar from "./circularProgressLine";
import ProgressLine from "./progressLine";

import Loading from "./Loading";

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

export default Budget = ({ navigation }) => {
  const { user, subscription, setSubscription } = useContext(UserContext);

  const [totalCost, setTotalCost] = useState(0);

  const [loading, setLoading] = useState(true);

  /*  const getUserData = async () => {
    try {
      if (subscription != null) {
        // console.log("Subscription", subscription);
        setLoading(false);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, [user, subscription]); */
  useEffect(() => {
    if (!subscription) {
      return;
    }
    const calculateTotal = subscription.reduce((total, subscription) => {
      return total + parseFloat(subscription.cost);
    }, 0);
    setTotalCost(calculateTotal.toFixed(2));
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
            zIndex={-1}
          />
          <CircularProgressBar
            size={260}
            value={40}
            degree={"-90deg"}
            color={"#B21818"}
            zIndex={10}
          />
          <CircularProgressBar
            size={260}
            value={20}
            degree={"-90deg"}
            color={"#AD7BFF"}
            zIndex={20}
          />
          <CircularProgressBar
            size={260}
            value={8}
            degree={"-90deg"}
            color={"#00FAD9"}
            zIndex={30}
          />
        </View>
        <View style={{ marginTop: 100, alignItems: "center" }}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.bill}>${totalCost}</Text>
            <Text style={styles.billtext}>of $1500 budget</Text>
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
        <ScrollView>
          <View style={{ alignItems: "center", marginTop: 15 }}>
            <View style={styles.categoryBox}>
              <View style={styles.category}>
                <Ionicons name="car" size="40" color="#A2A2B5" />
                <View style={styles.categoryTextBox}>
                  <Text style={styles.categoryText1}>Transportation</Text>
                  <Text style={styles.billtext}>$280 left to spend</Text>
                </View>
                <View>
                  <Text style={styles.categoryText2}>$119.99</Text>
                  <Text style={styles.billtext}>of $400</Text>
                </View>
              </View>
              <View style={styles.category}>
                <ProgressLine progress={0.3} lineColor="#AD7BFF" />
              </View>
            </View>
            <View style={styles.categoryBox}>
              <View style={styles.category}>
                <Ionicons name="headset" size="40" color="#A2A2B5" />
                <View style={styles.categoryTextBox}>
                  <Text style={styles.categoryText1}>Entertainment</Text>
                  <Text style={styles.billtext}>$360 left to spend</Text>
                </View>
                <View>
                  <Text style={styles.categoryText2}>$239.99</Text>
                  <Text style={styles.billtext}>of $600</Text>
                </View>
              </View>
              <View style={styles.category}>
                <ProgressLine progress={0.4} lineColor="#FFA699" />
              </View>
            </View>
            <View style={styles.categoryBox}>
              <View style={styles.category}>
                <Ionicons name="finger-print" size="40" color="#A2A2B5" />
                <View style={styles.categoryTextBox}>
                  <Text style={styles.categoryText1}>Security</Text>
                  <Text style={styles.billtext}>$395 left to spend</Text>
                </View>
                <View>
                  <Text style={styles.categoryText2}>$49.99</Text>
                  <Text style={styles.billtext}>of $500</Text>
                </View>
              </View>
              <View style={styles.category}>
                <ProgressLine progress={0.1} lineColor="#00FAD9" />
              </View>
            </View>
            <TouchableOpacity
              style={[
                styles.categoryBox,
                { height: 88, borderWidth: 1, borderStyle: "dashed" },
              ]}
              onPress={() => {
                Alert.alert("This function is not finished");
              }}
            >
              <View style={styles.category}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#A2A2B5",
                    marginRight: 10,
                  }}
                >
                  {" "}
                  Add new category
                </Text>
                <Ionicons name="add-circle-outline" size={30} color="#A2A2B5" />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    width: "70%",
  },

  categoryText1: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 15,
    width: "70%",
    textAlign: "left",
  },
  categoryText2: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 5,
    textAlign: "right",
  },
});
