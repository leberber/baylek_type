

import { View, Text, Image } from 'react-native'
import React from 'react'

type IconProps = {
    focused:boolean,
    tabIconPath:any,
    color:string,
    tabName:string
 
}





const TabIcon = (props: IconProps) => {
  return (
    <View style = {{
        alignItems:'center', 
        justifyContent:'center', 
        width:60,
        height:60,
        borderRadius:80,
        }} > 
 

      <Image source={props.tabIconPath}
    
      resizeMode='contain'
      style={{
        width:30,
        height:30,
        tintColor: props.focused? '#C85082': props.color,
        
      }}
      />
      <Text style={{color : props.focused? '#C85082': props.color, fontSize:12, }}> {props.tabName}</Text>

    </View>
  )
}

export default TabIcon




