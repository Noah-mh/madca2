import { Animated, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import Slides from "./data";
import SlideItem from "./SlideItem";

import Pagination from "./Pagination";

const Slider = (props) => {
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState([]);

  const scrollX = useRef(new Animated.Value(0)).current;
  const handelOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      { useNativeDriver: false }
    )(event);
  };
  const handelOnViewableItemsChanged = useRef(({ viewableItems }) => {
    setItems(viewableItems);
    setIndex(viewableItems[0].index);
    // console.log("viewable items:", items);
    // console.log("viewable index:", index);

    if (props.onViewableItemsChanged) {
      props.onViewableItemsChanged(viewableItems);
    }
  }).current;

  return (
    <View>
      <FlatList
        data={Slides}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handelOnScroll}
        onViewableItemsChanged={handelOnViewableItemsChanged}
      />
      <Pagination data={Slides} scrollX={scrollX} index={index} />
    </View>
  );
};
export default Slider;
