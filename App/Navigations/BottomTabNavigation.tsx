import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Doctors from '../Screen/Doctors/Doctors'
import AddPage from '../Screen/AddPage/AddPage'
import Search from '../Screen/Search'
import Maps from '../Screen/Maps/Maps'
import { colors } from '../styles/styles';


import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import TabIcon from './TabIcon';

const ImagePaths = {
  doctor: require("/Users/p3117877/Desktop/rntype/assets/TabSVGs/doctor.svg"),
  pin: require("/Users/p3117877/Desktop/rntype/assets/TabSVGs/pin.svg"),
  plus: require("/Users/p3117877/Desktop/rntype/assets/TabSVGs/plus.svg"),

}

type Props = {}

const Tab = createBottomTabNavigator();

const TabNavigation = (props: Props) => {
  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarShowLabel: false,
        tabBarStyle: {
          padding: 5,


          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 100,
          ...styles.bottomNavBar
        },



      }}
    >
      <Tab.Screen name="Doctors" component={Doctors}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              tabIconPath={ImagePaths.doctor}
              color={colors.PURPLE}
              tabName='Doctor'
            />

          ),
        }} />
      <Tab.Screen name="Add" component={AddPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              tabIconPath={ImagePaths.plus}
              color={colors.PURPLE}
              tabName='Add'
            />

          ),
        }}
      />
      <Tab.Screen name="Maps" component={Maps}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              tabIconPath={ImagePaths.pin}
              color={colors.PURPLE}
              tabName='Map'
            />

          ),
        }} />

    </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({
  bottomNavBar: {
    shadowColor: "#f8c4ff",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 30.22,
    elevation: 12,
    borderWidth: 0




  }

})




