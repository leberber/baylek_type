import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState , useContext} from 'react'
import { colors } from '../styles/styles'

import { SelectedCardContext } from '../Context/Contexts'


// type CategoryProps = {
//   setSelectedCard: any
// }

const Categories = () => {
  // const [clickedCard, setClickedCard] = useState('Consultation')
  const {selectedCard, setSelectedCard} = useContext(SelectedCardContext);
  const doctors = [
    { type: 'Consultation', image: require("/Users/p3117877/Desktop/rntype/assets/categories/Consultation.png") },
    { type: 'Cardiologist', image: require("/Users/p3117877/Desktop/rntype/assets/categories/Cardiologist.png") },
    { type: 'Dentist', image: require("/Users/p3117877/Desktop/rntype/assets/categories/Dentist.png") },
    { type: 'Ophthalmologist', image: require("/Users/p3117877/Desktop/rntype/assets/categories/Ophthalmologist.png") },
  ]
  return (
    <View style={styles.mainView}>
      <FlatList
        data={doctors}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={{
            
            backgroundColor: item.type === selectedCard ? colors.PURPLE_LIGHT : 'white',
            margin: 5,
            borderRadius: 15
          }} onPress={() => {
            console.log(item, '-----')
            setSelectedCard(item.type)
      
      

          }}>
            <View style={{
              // backgroundColor:'red'
            }}>
              <View style={{
                margin: 5,
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Image style={styles.image} source={item.image} />
                <Text>{item.type} </Text>

              </View>

            </View>
          </TouchableOpacity>
        )
        }
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',

  },
  cardView: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    //  tintColor: props.focused? '#C85082': props.color,
    margin: 5,
    borderRadius: 15

  },

  image: {
    width: 70,
    height: 70,
  },


})