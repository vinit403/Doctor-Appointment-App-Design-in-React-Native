import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Header = ({title,icon}) => {
  return (
    <View style={style.header}>
        {/* Process of Icon is visible when you are not in home screen and if you are in 
            home screen then back arrow is not visible  */}

        <TouchableOpacity style={style.backButton} underlayColor="#f2f2f2">
            <Image source={icon} style={style.back}></Image>
        </TouchableOpacity>

        <Text style={style.title}>{title}</Text>
    </View>
  )
}

export default Header

const style = StyleSheet.create({
    header:{
        height:60,
        width:'100%',
        flexDirection:'row',
        backgroundColor:'#fff',
        elevation:5,
        alignItems:'center',
        paddingLeft:20
    },
    backButton:{
        width:30,
        height:30,
        borderRadius:15
    },
    back:{
        width:24,
        height:24
    },
    title:{
        marginLeft:20,
        fontSize:18,
        fontWeight:"600"
    }
})