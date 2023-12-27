import { StyleSheet, Text, View, Platform } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import React, { useState, useEffect, useContext } from 'react'
import Header from '../../components/Header'
import { getDoctors } from '../../api/api'
import Categories from '../../components/Categories'
import { SelectedCardContext, UserLocationContext } from "../../Context/Contexts";
import PlaceMarker from './PlaceMarker';


const Maps = () => {
  // const [selectedCard, setSelectedCard] = useState('Consultation')
  const {location, setLocation } = useContext(UserLocationContext);
  const {selectedCard } = useContext(SelectedCardContext);
  const [mapRegion, setmapRegion] = useState<any>({});

 
  useEffect(() => {
    if (location) {
      setmapRegion({
        latitude: 36.7323887, //location.coords.latitude,
        longitude: 3.9579499,//location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.091,
      })
    }
  }, [location])

  return (
    <View style={styles.root}>
      <View style = {{ position: 'absolute', zIndex: 1000,top:  (Platform.OS === 'ios') ? 50 : 30, }}>

      <Header style={{ flexDirection: 'row' }} />
      <View style={{  }}>
        <Categories  />
      </View>

      </View>
  

      {location ?
        <MapView

          region={mapRegion}
          showsUserLocation={true}
          style={{ width: '100%', height: '100%' }}>
          {getDoctors(selectedCard).map((item, index) => (
            <PlaceMarker
              latitude={item.geometry.coordinates[1]}
              longitude={item.geometry.coordinates[0]}
              key={index}
            />
          ))}
        </MapView> : null}
    </View>
  )
}

export default Maps

const styles = StyleSheet.create({
  root: {

  }
})
