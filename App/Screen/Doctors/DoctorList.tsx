import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'
import {colors} from '../../styles/styles';
import { AirbnbRating } from '@rneui/base';



const { width, height } = Dimensions.get('window');


type cardProps = {
  doctorImage :any,
  doctorName:string,
  doctorType:string,
  commune:string,


}



const DoctorList = (props:cardProps) => {
    

  return (
    <View style={styles.root}>
    
        <Image source = {props.doctorImage}
         style = {styles.image} />
      <View style={styles.details}> 
        <Text style = {{ fontWeight: '500', fontSize:20}}>Dr. {props.doctorName}</Text>
        <Text>{props.doctorType}</Text>
        <View style = {{ flexDirection:'row',}}>
          <Text style = {styles.badge}>{props.commune}</Text>
        </View>
        
        <View style = {styles.bottomRow}>
          <View style = {styles.reviews}>
          <AirbnbRating
            size={15}
            defaultRating = {3}
            isDisabled = {true}
            count={5}
            showRating = {false}
            />
            <Text style = {{fontSize:10, color:colors.MUTED}}> 10 Reviews</Text>

          </View>
       
          <View style = { styles.iconsrow}>
          <View style={{flexDirection:'row',marginRight:8,  ...styles.navigateIconView}}>
          <Image source = {require('/Users/p3117877/Desktop/rntype/assets/navigate.png')}
         style = {styles.navigateIcon} />

          <Text style = {{...styles.badge}}>Share</Text>

          </View>
          <View style = {styles.navigateIconView} >
              <Image source = {require('/Users/p3117877/Desktop/rntype/assets/navigate.png')}
              
          style = {styles.navigateIcon} />
           </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default DoctorList

const styles = StyleSheet.create({
  root:{
    flexDirection :'row',
    marginTop:15,
    backgroundColor :'white',
    borderRadius:15,
    padding:7
  },

  image:{
    width:'30%',
    height: undefined,
    aspectRatio: 1,
    borderRadius:60,
  
  },
  details:{
    width:'70%',
    // borderWidth:1,
    paddingLeft:10
  },
  bottomRow :{
    flexDirection :'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',

  },
  badge:{
    backgroundColor:colors.PURPLE_LIGHT,  
    borderRadius:20, 
    paddingLeft:8, 
    paddingRight:8, 
    paddingBottom:2,
    color:colors.PURPLE,
    fontSize:13,
    marginTop:5,
    marginBottom:5
  },
  reviews:{
    // justifyContent: 'center',
    // alignItems: 'center',

  },
  iconsrow:{ 
    flexDirection:'row',
    justifyContent: 'center',
    // backgroundColor:'red',
    // width:200
     // alignItems: 'center',
  },
  navigateIcon:{
    width:25,
    height:25,
  },
  navigateIconView:{
    backgroundColor:colors.PURPLE_LIGHT,
    // padding:3,
    borderRadius:10,
    paddingLeft:5,
    paddingRight:5
  }



})