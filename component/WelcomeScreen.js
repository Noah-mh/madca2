import React from 'react';
import { SafeAreaView, View, Image, StyleSheet, StatusBar } from 'react-native';

import AppLogo from './AppLogo';
import CustomButton from './CustomButton';

const WelcomeImage = () => {
  return (
    <View style={{ position: 'absolute', marginTop: 100 }}>
      <Image
        style={[styles.logo, styles.logo1]}
        source={require('../assets/netflix.png')}></Image>
      <Image
        style={[styles.logo, styles.logo2]}
        source={require('../assets/youtube.png')}></Image>
      <Image
        style={[styles.logo, styles.logo3]}
        source={require('../assets/oneDrive.png')}></Image>
      <Image
        style={[styles.logo, styles.logo4]}
        source={require('../assets/spotify.png')}></Image>
    </View>
  );
};

export default WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppLogo />
      <WelcomeImage />
      <View style={{ alignItems: 'center' }}>
        <CustomButton
          text="Get Started"
          color='white'
          backgroundColor='red'
          marginBottom={30}
          onPress={() => navigation.navigate('Register1')}></CustomButton>
        <CustomButton
          text="I have an account"
          color="white"
          backgroundColor="#666680"
          marginBottom={60}
            onPress={() => navigation.navigate('SignIn')}></CustomButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#1C1C23',
    marginTop: StatusBar.currentHeight || 0,
  },

  logo: {
    position: 'absolute',
  },

  logo1: {
    width: 150,
    height: 150,
    marginLeft: 150,
  },
  logo2: {
    width: 220,
    height: 220,

    marginLeft: 180,
    marginTop: 80,
  },
  logo3: {
    width: 170,
    height: 170,
    marginLeft: 50,
    marginTop: 130,
  },
  logo4: {
    width: 250,
    height: 250,
    marginLeft: 100,
    marginTop: 220,
  },
});
