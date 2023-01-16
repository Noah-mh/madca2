import React, { useState } from 'react';
import { View, Text, Path, StyleSheet } from 'react-native';
import { Svg } from 'react-native-svg';

const SemiCircularProgressBar = (props) => {
  const { value } = props;
  const [path, setPath] = useState('');
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progressValue = (value / 100) * circumference;
  const pathValue = `M ${radius},${radius} m 0,-${radius} a ${radius},${radius} 0 1 1 0,${
    2 * radius
  } a ${radius},${radius} 0 1 1 0,-${2 * radius}`;
  const offset = circumference - progressValue;
  const circleValue = `${pathValue} ${
    progressValue === 0
      ? ''
      : `M ${radius},${radius} m ${offset},0 a ${radius},${radius} 0 1 0 ${
          progressValue > circumference / 2 ? -1 : 1
        } ${Math.abs(progressValue)} a ${radius},${radius} 0 1 0 ${
          progressValue > circumference / 2 ? -1 : 1
        } ${-Math.abs(progressValue)}`
  }`;
  setPath(circleValue);

  return (
    <View style={styles.container}>
      <Svg width={100} height={100}>
        <Text x={50} y={50} textAnchor="middle" fontSize={20} fill="white">
          {' '}
          {`${value}%`}
        </Text>
        <Path
          d={circleValue}
          stroke="#f88"
          strokeWidth={10}
          fill="none"
          rotate={-126}
          transformOrigin="center center"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SemiCircularProgressBar;
