import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TabNavigation from './App/Navigations/BottomTabNavigation';
import { useEffect, useState } from 'react'
import {colors} from '/Users/p3117877/Desktop/rntype/App/styles/styles';

import * as Location from 'expo-location';
import { 
  UserLocationContext, SelectedCardContext } from './App/Context/Contexts';


export default function App() {

  const [location, setLocation] = useState< {} | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const [selectedCard, setSelectedCard] = useState<any>('Consultation')

  // console.log('-----------',location)
  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  return (
    // <SafeAreaView style = {{flex:1}}>
    <View style={styles.container}>

      <SelectedCardContext.Provider value={{ selectedCard, setSelectedCard }}>
      <UserLocationContext.Provider value={{ location, setLocation }}>
        <NavigationContainer  >
          <TabNavigation />
        </NavigationContainer>
      </UserLocationContext.Provider>
      </SelectedCardContext.Provider>

    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.BG_LIGHT
    


  },
});
