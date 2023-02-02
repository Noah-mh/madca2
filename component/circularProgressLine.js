import { View, StyleSheet } from "react-native";

import ProgressCircle from "react-native-progress/Circle";

const CircularProgressBar = (props) => {
  return (
    <View
      style={[
        styles.progressContainer,
        { zIndex: props.zIndex },
        { transform: [{ rotate: props.degree }] },
      ]}
    >
      <ProgressCircle
        progress={props.value / 100}
        size={props.size}
        thickness={10}
        showsText={false}
        borderWidth={0}
        direction="clockwise"
        color={props.color}
        textStyle={styles.progressText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },

  progressText: {
    fontSize: 16,
  },
});

export default CircularProgressBar;
