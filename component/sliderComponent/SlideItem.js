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
import Slides from "./data";
import { FlatList } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");

const SlideItem = ({ item }) => {
  const translateYImage = new Animated.Value(40);
  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={styles.container}>
      <Animated.Image
        source={item.img}
        resizeMode="contain"
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
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
    marginTop: 20,
    marginBottom: 20,
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
