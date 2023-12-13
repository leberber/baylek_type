

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
        alignItems:'center', 'justifyContent':'center', 
        width:80,
        height:80,
        borderRadius:50,
        backgroundColor:props.focused ? props.color : 'none'
        }} > 
 

      <Image source={props.tabIconPath}
    
      resizeMode='contain'
      style={{
        width:30,
        height:30,
        tintColor: props.focused? 'white': props.color,
        
      }}
      />
      <Text style={{color : props.focused? 'white': props.color, fontSize:16, padding:6 }}> {props.tabName}</Text>

    </View>
  )
}

export default TabIcon




