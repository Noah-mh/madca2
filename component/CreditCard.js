import React from 'react';
import {
  SafeAreaView,
  Alert,
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Animated,
} from 'react-native';
// ico
import { Ionicons } from '@expo/vector-icons';

export default CreditCard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Credit Cards</Text>
        </View>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate('Setting')}>
          <Ionicons
            style={styles.icon}
            name="settings-outline"
            size="30"
            color="#A2A2B5"
          />
        </TouchableOpacity>
        <View style={{ marginTop: 50, alignItems: 'center' }}>
          <View style={{ alignItems: 'center' }}>
            <Image source={require('../assets/CreditCards.png')}></Image>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.bill}>Subscriptons</Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 15,
              marginBottom: 20,
            }}>
            <Image
              style={{ margin: 5 }}
              source={require('../assets/SpotifyLogo.png')}></Image>
            <Image
              style={{ margin: 5 }}
              source={require('../assets/YTPremiumLogo.png')}></Image>
            <Image
              style={{ margin: 5 }}
              source={require('../assets/OneDriveLogo.png')}></Image>
            <Image
              style={{ margin: 5 }}
              source={require('../assets/NetflixLogo.png')}></Image>
          </View>
        </View>

        <View style={{ alignItems: 'center', marginTop: 15 }}>
          <TouchableOpacity
            style={[
              styles.categoryBox,
              { height: 88, borderWidth: 1, borderStyle: 'dashed', zIndex: 2 },
            ]}
            onPress={() => {
              Alert.alert('This function is not finished');
            }}>
            <View style={styles.category}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#A2A2B5',
                  marginRight: 10,
                }}>
                {' '}
                Add new card
              </Text>
              <Ionicons name="add-circle-outline" size={30} color="#A2A2B5" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomBackground} />
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
  header: {
    top: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#A2A2B5',
    fontSize: 16,
    fontWeight: 'semi-bold',
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
    fontSize: 30,
    color: 'white',
    marginTop: 40,
  },

  categoryBox: {
    borderRadius: 20,
    padding: 3,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    backgroundColor: '#353542',
    marginTop: 10,
    height: 88,
    borderStyle: 'dashed',
  },

  category: {
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  bottomBackground: {
    position: 'absolute',
    width: '100%',
    height: 270,
    bottom: 0,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: 'rbga(0,0,0,0.5)',
    zIndex: -1,
  },
});
