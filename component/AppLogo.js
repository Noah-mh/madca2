import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function AppLogo() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <Image
        style={styles.appLogo}
        source={require('../assets/appLogo.jpeg')}></Image>
      <Text style={styles.appName}>SUBSTRACK</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appName: {
    fontWeight: 'bold',
    fontSize: 23,
    color: 'white',
    marginLeft: 10,
  },
  appLogo: {
    width: 23,
    height: 30,
    marginTop: 3,
  },
});
