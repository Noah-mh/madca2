import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// ico
import { Ionicons } from '@expo/vector-icons';
import CircularProgressBar from './circularProgressLine';
import AppLogo from './AppLogo';

export default HomeUpcomingBill = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lightBG}>
        <Image
          style={styles.circleBG}
          source={require('../assets/CriclesBG.png')}></Image>
      </View>
      <View>
        <TouchableOpacity style={styles.iconContainer}
         onPress={() => navigation.navigate('Setting')}>
          <Ionicons style={styles.icon} name="settings-outline" size="30" color='#A2A2B5' />
        </TouchableOpacity>
        <View style={{ position: 'absolute', top: 40, left: 65 }}>
         <CircularProgressBar
            size={300}
            value={65}
            degree={'-98deg'}
            color={'#fff'}
            zIndex={-1}
          />
           <CircularProgressBar
            size={300}
            value={60}
            degree={'-135deg'}
            color={'#B21818'}
            
            zIndex={1}
          />
          
        </View>
        <View style={{ marginTop: 100, alignItems: 'center' }}>
          <AppLogo />
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.bill}>$1,235</Text>
            <Text style={styles.billtext}>This month bills</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Budget')}>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>
              See Your Budget
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={styles.box}>
            <Text style={{ color: '#fff' }}>Active Subs</Text>
            <Text style={styles.textInsideBox}>12</Text>
          </View>
          <View style={styles.box}>
            <Text style={{ color: '#fff' }}>Highest Subs</Text>
            <Text style={styles.textInsideBox}>$37.99</Text>
          </View>
          <View style={styles.box}>
            <Text style={{ color: '#fff' }}>Lowest Subs</Text>
            <Text style={styles.textInsideBox}>$5.99</Text>
          </View>
        </View>
        <View
          style={[
            styles.subscriptionBox,
            { flexDirection: 'row', marginTop: 28, backgroundColor: '#0E0E12' },
          ]}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate('HomeYourSub')}>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>
              Your Subscripton
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button2,
              { backgroundColor: 'rgba(78, 78, 97, 0.4)' },
            ]}>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>
              Upcoming Bills
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={false}>
          <View
            style={[
              styles.subscriptionBox,
              {
                flexDirection: 'row',
                marginTop: 15,
                backgroundColor: '#353542',
              },
            ]}>
            <View style={styles.subscriptionDate}>
              <Text style={{ color: '#fff' }}>Jun</Text>
              <Text style={styles.textInsideBox}>25</Text>
            </View>
            <Text style={styles.subscriptionText1}>Spotify</Text>
            <Text style={styles.subscriptionText2}>$5.99</Text>
          </View>
          <View
            style={[
              styles.subscriptionBox,
              {
                flexDirection: 'row',
                marginTop: 10,
                backgroundColor: '#353542',
              },
            ]}>
            <View style={styles.subscriptionDate}>
              <Text style={{ color: '#fff' }}>Jun</Text>
              <Text style={styles.textInsideBox}>25</Text>
            </View>
            <Text style={styles.subscriptionText1}>YouTube Premium</Text>
            <Text style={styles.subscriptionText2}>$18.99</Text>
          </View>
          <View
            style={[
              styles.subscriptionBox,
              {
                flexDirection: 'row',
                marginTop: 10,
                backgroundColor: '#353542',
              },
            ]}>
            <View style={styles.subscriptionDate}>
              <Text style={{ color: '#fff' }}>Jun</Text>
              <Text style={styles.textInsideBox}>25</Text>
            </View>
            <Text style={styles.subscriptionText1}>Microsoft OneDrive</Text>
            <Text style={styles.subscriptionText2}>$29.99</Text>
          </View>
          <View
            style={[
              styles.subscriptionBox,
              {
                flexDirection: 'row',
                marginTop: 10,
                backgroundColor: '#353542',
              },
            ]}>
            <View style={styles.subscriptionDate}>
              <Text style={{ color: '#fff' }}>Jun</Text>
              <Text style={styles.textInsideBox}>25</Text>
            </View>
            <Text style={styles.subscriptionText1}>Netflix</Text>
            <Text style={styles.subscriptionText2}>$37.99</Text>
          </View>
        </ScrollView>
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
  circleBG: {
    position: 'absolute',
    width: 426,
    height: 488,
    borderRadius: 20,
    zIndex: -1,
  },

  lightBG: {
    position: 'absolute',
    borderRadius: 20,
    padding: 10,
    borderWidth: 1,
    width: '100%',
    height: '58%',
    zIndex: -1,
  },

  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
  icon: {
    width: 32,
    height: 32,
  },
  bill: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'white',
    marginTop: 40,
  },
  billtext: {
    fontSize: 15,
    color: '#83839C',
  },

  button: {
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    alignItems: 'center',
    width: 180,

    backgroundColor: '#000',
    opacity: 0.8,
    marginTop: 25,
  },
  button2: {
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: 180,
    marginLeft: 8,
    marginRight: 8,
  },

  box: {
    borderRadius: 20,
    padding: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 80,
    backgroundColor: '#4E4E61',
    opacity: 0.6,
    marginTop: 20,
    marginLeft: 12,
    marginRight: 10,
  },

  subscriptionBox: {
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    left: 11,
  },

  textInsideBox: {
    fontSize: '20',
    fontWeight: 'bold',
    color: 'white',
  },

  subscriptionDate: {
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#4E4E61',
    opacity: 0.6,
  },

  subscriptionText1: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
    width: '70%',
    textAlign: 'left',
  },
  subscriptionText2: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 5,
    textAlign: 'right',
  },
});
