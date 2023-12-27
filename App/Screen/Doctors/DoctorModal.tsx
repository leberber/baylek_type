import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import DoctorDetails from './DoctorDetails'

type Props = {
    
}

const DoctorModal = (props: Props) => {
    const[doctorDetails, setDoctorDetail] = useState({})
    const params = useRoute().params;
   

useEffect(() => {
    if (params){
        setDoctorDetail(params)
    }
}, [])
  return (
    <View >
    <DoctorDetails doctorDetails = {doctorDetails} />
    </View>
  )
}

export default DoctorModal

const styles = StyleSheet.create({})