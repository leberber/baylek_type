import { View, Text } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'

type markerPros ={
  latitude:number,
  longitude:number,

}

const PlaceMarker: React.FC<markerPros> = ({ latitude,  longitude}) => 
 {

  return (
    <Marker 
    title={'item'} 
    coordinate={
        {
            latitude: latitude,
            longitude: longitude
          }
    }
     >
    
        </Marker>
  )
}

export default PlaceMarker;