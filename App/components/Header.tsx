import { Image, StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
import React from 'react'

import {border_style, colors} from '../styles/styles'




type HeaderProps = {
  style:{}
}

const Header = (props: HeaderProps) => {
  return (
    <View style = {props.style}>
      <Image source={require('../../assets/favicon.png')} style = {styles.logo}/>
      <View style = {styles.searchBar}>
        <TextInput placeholder='Find A Doctor' placeholderTextColor={colors.MUTED}  style = {styles.searchInput}/>
        <Image source={require('../../assets/searchIcon.png')} style={styles.searchIcon}
    />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  logo:{
    width:60,
    height:60,
    marginRight:20,
    marginTop:8
  },
  searchIcon:{
    width:20,
    height:20,
    marginLeft:-55,

  },
  searchInput:{
    backgroundColor:'#fff',
    padding:12,
    paddingLeft:25,
    borderRadius:35,
    width:width * 0.70,
    color: 'red',
    fontSize:18,
      shadowColor: "#f8c4ff",
      shadowOffset: {
        width: 0,
        height: -5,
    },
      shadowOpacity: 0.2,
      shadowRadius: 30.22,
      elevation: 12,
      borderWidth: 0
  
  
  },
  searchBar:{
    flexDirection: 'row',
    alignItems: 'center',
  
  },
  
 

})