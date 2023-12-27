import { StyleSheet, Text, View, FlatList, Dimensions, SafeAreaView, TouchableOpacity, Platform } from 'react-native'
import React, {useContext } from 'react'
import Header from '../../components/Header'
import { colors, screen_style } from '../../styles/styles'
import Categories from '../../components/Categories'
import DoctorList from './DoctorList'
import { SelectedCardContext } from "../../Context/Contexts";

import { getDoctors } from '../../api/api'
import { useNavigation } from '@react-navigation/native'


type Props = {}


const docImages = {
  doc: require('/Users/p3117877/Desktop/rntype/assets/male.png')
}

const { width, height } = Dimensions.get('window');

const Doctors = (props: Props) => {
  const {selectedCard } = useContext(SelectedCardContext);

  const navigator = useNavigation<any>();

  const onDoctorClick = (item:{}) =>{
    navigator.navigate('doctor-modal', item)
  }
 
  return (
    <View style={styles.root}>
      <Header style={{ flexDirection: 'row', marginTop:  (Platform.OS === 'ios') ? 50 : 30, zIndex: 1000, left: 20 }} />
      <Categories  />
      <FlatList
        data={getDoctors(selectedCard)}

        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onDoctorClick(item)}>
        {  <DoctorList 
            doctorName={item.properties.name} 
            doctorType={item.properties.doctor_type} 
            commune={item.properties.commune} 
            doctorImage={item.properties.image_path} 
          />}
          </TouchableOpacity>
        )}
      />



    </View>

  )
}

export default Doctors

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.BG_LIGHT,
    height: height,
    paddingBottom: 55,


  },


})