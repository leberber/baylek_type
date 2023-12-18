import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import DoctorList from '../Doctors/DoctorList'

type Props = {}

const AddPage = (props: Props) => {
  return (
    <ScrollView style = {styles.root}>
      {/* <DoctorList /> */}
    </ScrollView>
  )
}

export default AddPage

const styles = StyleSheet.create({
  root: {
    backgroundColor:'transparent'
  }
})
