import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Slides from "./data";
import SlideItem from "./SlideItem";
import { FlatList } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");
const Pagination = ({ data, scrollX, index }) => {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.2],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[
              styles.dot,
              { width: dotWidth, opacity },
              idx === index && styles.dotActive,
            ]}
          />
        );
      })}
    </View>
  );
};
export default Pagination;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: "#CCC",
  },
  dotActive: {
    backgroundColor: "red",
  },
});
