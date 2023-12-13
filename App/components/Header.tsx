import { Image, StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
import React from 'react'

import {border_style} from '../styles/styles'




type Props = {}

const Header = (props: Props) => {
  return (
    <View style = {styles.header}>
      <Image source={require('../../assets/favicon.png')} style = {styles.logo}/>
      <View style = {styles.searchBar}>
        <TextInput placeholder='Find A Doctor' style = {styles.searchInput}/>
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
    width:30,
    height:30,
    marginLeft:-55
  },
  searchInput:{
    backgroundColor:'#fff',
    padding:25,
    borderRadius:35,
    width:width * 0.72,
    color:'#adadad',
    fontSize:25
    
   

  },
  searchBar:{
    flexDirection: 'row',
    
    alignItems: 'center',
    
    // backgroundColor: '#fff',
    // borderWidth: 0.5,
    // borderColor: '#000',
    // height: 40,
    // borderRadius: 5,
    // margin: 10,

  },
  header:{
    flexDirection: 'row',
    marginTop:30,
    marginLeft:20, 
  
    
    // backgroundColor:'gray',
    // justifyContent: 'center',


  }

})