import { StyleSheet, Text, View, Image } from 'react-native'

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
import DoctorModal from './DoctorModalNavigation';

const ImagePaths = {
  doctor: require("../../assets/TabSVGs/doctor.png"),
  pin: require("../../assets/TabSVGs/pin.png"),
  plus: require("../../assets/TabSVGs/plus.png"),

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
          opacity:0.9,


          // position: 'absolute',
          // bottom: 15,
          // left: 20,
          // right: 20,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 70,
          ...styles.bottomNavBar
        },



      }}
    >
      <Tab.Screen name="Doctors" component={DoctorModal}
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




