import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

const Success = ({navigation}) => {
  return (
    <View style={style.container}>
      <Image source={require('../images/checked.png')} style={style.success} />
      <Text style={style.msg}>{'Your Appointment successfully booked'}</Text>
      <TouchableOpacity style={style.gotohome} onPress={()=>{navigation.navigate('Home')}}>
          <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Success

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    success:{
        width:100,
        height:100,
    },
    msg:{
        fontSize:16,
        fontWeight:'700',
        marginTop:20  
    },
    gotohome:{
        width:150,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderWidth:0.5,
        marginTop:30
    }
})