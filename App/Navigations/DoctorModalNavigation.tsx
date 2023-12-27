import { StyleSheet, Text, View , Button, Platform} from 'react-native'
import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import Doctors from '../Screen/Doctors/Doctors'
import DoctorModal from '../Screen/Doctors/DoctorModal'
import { useNavigation } from '@react-navigation/native'
import { IconButton} from 'react-native-paper';
import { colors } from '../styles/styles'


type Props = {}

const DoctorModalNavigation = (props: Props) => {
    const Stack = createStackNavigator()
    const navigator = useNavigation<any>();
    
  

  return (
   <Stack.Navigator
   
      // screenOptions={{

      // }}
   >
    <Stack.Screen  options={{headerShown:false}} name = 'doctorList' component ={Doctors}  />
    <Stack.Screen  name = 'doctor-modal' component={DoctorModal} 
        options={{
        
          title: '',
          header: () => (
            <View style={{position: 'absolute', zIndex: 1000,top:  (Platform.OS === 'ios') ? 50 : 30}}>
            
                  <IconButton
            icon="arrow-left"
            style = {{backgroundColor:colors.PURPLE_LIGHT, marginLeft:20}}
            size={30}
            onPress={() => navigator.navigate('doctorList')}
          />

            </View>
        

          ),
          
          // headerStyle: {
          //   marginBottom:50,
          //   // backgroundColor: '#f4511e',
          // },
          // headerTintColor: 'black',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
        }}
   
     />
   </Stack.Navigator>
  )
}

export default DoctorModalNavigation

const styles = StyleSheet.create({})