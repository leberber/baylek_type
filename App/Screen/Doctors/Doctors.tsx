import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { colors, screen_style } from '../../styles/styles'

type Props = {}

const Doctors = (props: Props) => {
  return (
    <ScrollView style={screen_style}>
      <Header />
      {/* <Text style = {{fontSize:25}}>Whereas disregard and contempt for human rights have resulted</Text> */}
    </ScrollView>
  )
}

export default Doctors

const styles = StyleSheet.create({

})