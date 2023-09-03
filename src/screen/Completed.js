import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const Completed = () => {
  return (
    <View style={style.container}>
      <Header icon={require('../images/back.png')} title={'Completed Appointments'}/>

      <View>
          <FlatList 
          data={[1,1,1,1,1]} 
          renderItem={({item,index})=>{
              return(
                  <View style={style.itemView}>
                    <Image source={require('../images/doctor.png')} style={style.docImage}/>
                    <View>
                        <Text style={style.name}>{"Doctor XYZ "}</Text>
                        <Text style={style.timing}>{"10:10PM"}</Text>
                    </View>
                    <Text style={style.status}>{'Completed'}</Text>
                  </View>
              )
          }}/>
      </View>  

    </View>
  )
}

export default Completed

const style = StyleSheet.create({
    container:{
        flex:1,
    },
    itemView:{
        width:'94%',
        height:100,
        borderRadius:10,
        borderWidth:0.5,
        alignSelf:'center',
        marginTop:10,
        flexDirection:'row',
        alignItems:'center'
    },
    docImage:{
        width:60,
        height:60,
        borderRadius:30,
        marginLeft: 10
    },
    name:{
        fontSize:18,
        fontWeight:'600',
        marginLeft:20
    },
    timing:{
        fontSize:16,
        marginLeft:20,
        marginTop:5
    },
    status:{
        marginLeft:60,
        borderRadius:10,
        backgroundColor:'#f2f2f2',
        padding:5,
        color:'green'   
    }
})