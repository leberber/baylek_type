import { StyleSheet, Text, View, FlatList, Dimensions, SafeAreaView } from 'react-native'
import React, {useContext } from 'react'
import Header from '../../components/Header'
import { colors, screen_style } from '../../styles/styles'
import Categories from '../../components/Categories'
import DoctorList from './DoctorList'
import { SelectedCardContext } from "../../Context/Contexts";

import { getDoctors } from '../../api/api'

type Props = {}


const docImages = {
  doc: require('/Users/p3117877/Desktop/rntype/assets/doc.png')
}

const { width, height } = Dimensions.get('window');

const Doctors = (props: Props) => {
  const {selectedCard } = useContext(SelectedCardContext);
 
  return (
    <View style={styles.root}>
      <Header style={{ flexDirection: 'row', marginTop: 30, zIndex: 1000, left: 20 }} />
      <Categories  />
      <FlatList
        data={getDoctors(selectedCard)}

        renderItem={({ item }) => (
          <DoctorList 
            doctorName={item.properties.name} 
            doctorType={item.properties.doctor_type} 
            commune={item.properties.commune} 
            doctorImage={docImages.doc} 
          />
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