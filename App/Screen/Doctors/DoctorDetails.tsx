import { StyleSheet, Text, View, Platform, Image, Linking, Dimensions, ScrollView, TouchableOpacity, Share} from 'react-native'
import React from 'react'
import {colors} from '../../styles/styles';


import { Octicons, Feather, MaterialIcons, Ionicons } from '@expo/vector-icons'; 

import {LinearGradient} from 'expo-linear-gradient';
type Props = {
    doctorDetails:any
}



const { width, height } = Dimensions.get('window');
const docImages = {
  doc: require('/Users/p3117877/Desktop/rntype/assets/male.png')
}



const DoctorDetails = (props: Props) => {
  const doctorDetails = props.doctorDetails.properties
  console.log(props)

  const SharePlace=()=>{
    const latitude = doctorDetails.lat;
    const longitude = doctorDetails.lng;
    Share.share({
        message:`Doctor: ${doctorDetails.name}
        \nApple Maps: http://maps.apple.com/?daddr=${latitude},${longitude}
        \n\nGoogle Maps: https://www.google.com/maps/?daddr=${latitude},${longitude}`
    })
}

  const onDirectionClick=()=>{
    const latitude = doctorDetails.lat;
    const longitude = doctorDetails.lng;
    
    if (Platform.OS === 'ios') {
      Linking.openURL(`http://maps.apple.com/?daddr=${latitude},${longitude}`);
      
    } else{
      Linking.openURL(`google.navigation:q=${latitude},${longitude}`)
  
}
  }

  if (!doctorDetails){
    return <View></View>
  }
  return (
  
   <ScrollView style = {{ position:'absolute', width:'100%', backgroundColor:colors.PURPLE_LIGHT, height:height-60, paddingBottom:100,
    // top: (Platform.OS === 'ios') ? 35 : 20
   }}>
      <LinearGradient colors={['#d972ed', '#f2bfaa', '#dca1e6']} style={styles.linearGradient}>
        <Image style = {{
          height:height *.33,     alignSelf: 'center', 
          width:'100%'}} resizeMode={'cover'} source = {require('/Users/p3117877/Desktop/rntype/assets/female.png')} />
      </LinearGradient>

      <Text style = {{ color:'white', position:'absolute', top:height*.3, left:10, padding:10,
       fontSize:18, fontWeight:'800', borderRadius:10
      }}>{doctorDetails.commune}</Text>

   



      <View style ={{ borderRadius: 10, backgroundColor:colors.BG_LIGHT, marginTop :-10, padding: 10}}>  
      <Text style = {{ fontWeight: '700', fontSize:22}}>Dr. {doctorDetails.name}</Text>
      <View style={{flexDirection:'row', marginBottom:5}}>
        <View style = {{ backgroundColor:colors.PURPLE_LIGHT, borderRadius:10, padding:5, paddingHorizontal:10}}>
        <Text style = {{fontSize:16, fontWeight:'500', color:colors.PURPLE}}>{doctorDetails.doctor_type}</Text>
        </View>
      </View>
      {/* <View style = {{flexDirection:'row', justifyContent: 'space-between'}}>

      

      <View  style = {{flexDirection:'row',  
      padding:7,  paddingLeft:15, paddingRight:15,
      gap:7, marginTop:-20,
      backgroundColor:colors.PURPLE_LIGHT, borderRadius:10}} >
        <Image source = {require('/Users/p3117877/Desktop/rntype/assets/share.png')} style = {styles.navigateIcon} />
        <Image source = {require('/Users/p3117877/Desktop/rntype/assets/direction.png')} style = {styles.navigateIcon} />

      </View>


      </View> */}

<View style={{marginTop:10,flexDirection:'row', 
    display:'flex', gap:10}}>
        <TouchableOpacity onPress={()=>onDirectionClick()}
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor:'#ebebeb',
            width:110,
            padding:3,
            borderRadius:40,
            justifyContent:'center'
          }}
        >
          <Ionicons name="navigate-circle-outline" size={24} color="black" />
          <Text style={{ fontSize: 16 }}>Direction</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>SharePlace()}
          style={{
       
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor:'#ebebeb',
            width:90,
            padding:3,
            borderRadius:40,
            justifyContent:'center'
          }}
        >
         <Ionicons name="md-share-outline" size={24} color="black" />
          <Text style={{  fontSize: 16 }}>Share</Text>
        </TouchableOpacity>
        </View>
      

   
 
      <Text style = {{fontSize:24, fontWeight:'700', margin:7 }}> Contact </Text>


        <View style = {{ flexDirection:'row'}}>
         
          
        </View>

          <View style = {{backgroundColor:'white', padding:10, borderRadius:10, ...styles.contactCard}}>
            <View style ={styles.contactListView}>
              <Feather name="phone-forwarded" size={24} color="#A16CE6" style = {styles.contactIcons}/>
              <Text> {doctorDetails.formatted_phone_number}</Text>
            </View>

            <View style ={styles.contactListView}>
              <MaterialIcons name="alternate-email" size={24} color="#A16CE6" style = {styles.contactIcons}/>
              <Text> example.email@emaildomain.com</Text>
            </View>

            <View style ={styles.contactListView}>
              <Octicons name="location" size={24} color="#A16CE6" style = {styles.contactIcons} />
              <Text> {doctorDetails.address}</Text>
          </View>
        </View>
        <Text style = {{fontSize:24, fontWeight:'700', margin:7 }}> Services </Text>
        <View style = {{...styles.contactCard, backgroundColor :'white',padding:15, borderRadius:10}}>
        <Text style = {{color:'gray', paddingBottom:3}}>     Bienvenue dans notre cabinet dentaire, où le Dr Smith dirige une équipe dédiée à votre santé bucco-dentaire et à votre bien-être. Le Dr Smith, un dentiste chevronné, allie expertise et approche compatissante pour garantir que chaque patient reçoive les soins de la plus haute qualité.</Text>
        <Text style = {{color:'gray'}}>     En mettant l'accent sur la dentisterie préventive, le Dr Smith croit qu'il est important de donner aux patients les connaissances nécessaires pour maintenir une santé bucco-dentaire optimale. Des nettoyages de routine aux procédures avancées de restauration et cosmétiques, nos services complets répondent à divers besoins dentaires.</Text>
       </View>

       
      </View>
      
    
  </ScrollView>

  )
}

export default DoctorDetails

const styles = StyleSheet.create({
  linearGradient: {
    paddingTop: (Platform.OS === 'ios') ? 33 : 30,
   
  },
  contactCard:{
    shadowColor: "#f8c4ff",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 30.22,
    elevation: 12,
    borderWidth: 0
  },
  contactListView:{
    flexDirection:'row', alignItems:'center'
  },
  contactIcons:{
    padding:3
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
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
  navigateIcon:{
    width:30,
    height:30,
  },
  navigateIconView:{
    backgroundColor:colors.PURPLE_LIGHT,
    // padding:3,
    borderRadius:10,
    paddingLeft:5,
    paddingRight:5
  },
  iconsrow:{ 
    flexDirection:'row',
    justifyContent: 'center',
    // backgroundColor:'red',
    // width:200
     // alignItems: 'center',
  },
});