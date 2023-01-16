import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from 'react-native';
// ico
import { Ionicons } from '@expo/vector-icons';

import AppLogo from './AppLogo';
import CustomButton from './CustomButton';
import SecondCustomButton from './secondCustomButton'

export default RegisterScreen1 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppLogo />
      <View style={{ alignItems: 'center' }}>
        <SecondCustomButton
          icon='logo-apple'
          iconColor='white'
          text='Sign Up with Apple'
          color='white'
          backgroundColor='black'
          marginBottom={25}
          onPress={() => navigation.navigate('BottomBar')}></SecondCustomButton>
        <SecondCustomButton
        icon='logo-google'
          iconColor='black'
          text='Sign Up with Google'
          color='black'
          backgroundColor='white'
          marginBottom={25}
          onPress={() => navigation.navigate('BottomBar')}></SecondCustomButton>
        <SecondCustomButton
        icon='logo-facebook'
          iconColor='white'
          text='Sign Up with Facebook'
          color='white'
          backgroundColor='#1771E6'
          marginBottom={25}
          onPress={() => navigation.navigate('BottomBar')}></SecondCustomButton>
        <Text style={{ color: 'white', marginTop: 30, marginBottom: 40 }}>
          or
        </Text>
        <SecondCustomButton
        icon='mail-outline'
          iconColor='white'
          text='Sign Up with E-mail'
          color='white'
          backgroundColor='#666680'
          marginBottom={25}
          onPress={() => navigation.navigate('Register2')}></SecondCustomButton>

        <Text style={styles.termAndCondition}>
          By registering, you agree to our Terms of Use. Learn how we collect,
          use and share your data.
        </Text>
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
  termAndCondition: {
    color: '#666680',
    margin: 25,
    textAlign: 'center',
  },
});

