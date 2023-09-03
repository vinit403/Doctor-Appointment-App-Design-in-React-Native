import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import CommonBtn from '../components/CommonBtn'
import Header from '../components/Header'

const CallAmb = () => {
    return (
        <View style={style.container}>
            <Header icon={require('../images/back.png')} title={'Call Ambulance'}/>
            <TextInput placeholder='Address' style={style.address} />
            <CommonBtn w={200} h={50} txt={"Call Now"} status={true}/>
        </View>
    )
}

export default CallAmb

const style = StyleSheet.create({
    container:{
        flex:1
    },
    address:{
        height:50,
        width:'90%',
        borderWidth:0.5,
        borderRadius:10,
        marginTop:50,
        alignSelf:'center',
        paddingLeft:20
    }
})
