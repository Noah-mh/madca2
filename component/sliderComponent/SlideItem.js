import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  Easing,
} from "react-native";
import React from "react";

const { width } = Dimensions.get("screen");

const SlideItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Animated.Image
        source={item.img}
        resizeMode="contain"
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: "center",
  },

  image: {
    width: 180,
    height: 180,
    borderRadius: 40,
    marginTop: 10,
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",

    marginTop: 10,
    textAlign: "center",
  },
});
