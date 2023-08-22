import React ,{useEffect} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(()=>{
            navigation.navigate('Home')
        },3000)
    }, [])
    return (
        <View style={style.container}>
            <Image source={require("../images/logo.png")} style={style.logo}></Image>
            <Text style={style.title}>DoctorAPP</Text>

        </View>
    )
}

export default Splash

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue'
    },
    logo:{
        width:100,
        height:100,
        tintColor:"#fff"
    },
    title:{
        color:"#fff",
        fontSize:20,
        fontWeight:"800",
        marginTop:20
    }
})
