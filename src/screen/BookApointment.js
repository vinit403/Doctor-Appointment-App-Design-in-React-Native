import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState , useEffect } from 'react'
import Header from '../components/Header'
import CommonBtn from '../components/CommonBtn';

let Dayslist = [];

const BookApointment = () => {

    const  [selectedSlot , setSelectedSlot] = useState(0);
    const  [selectedGender , setSelectedGender] = useState(0);
    const  [slots , setSolts] = useState([
        {sloT: "10:00-12:00PM" , selected:false},
        {sloT: "12:00-02:00PM" , selected:false},
        {sloT: "02:00-04:00PM" , selected:false},
        {sloT: "04:00-06:00PM" , selected:false},
        {sloT: "06:00-08:00PM" , selected:false},
        {sloT: "08:00-11:00PM" , selected:false},
    ]);

    useEffect(() => {
        for (let i=1; i<=getDays(new Date().getMonth()+1); i++){
            Dayslist.push({day : i, selected: false});
        }
    }, [])

    const getDays = (month)=>{
        let days = 0;

       

        if (month == 1) {
          days = 31;
        } else if (month == 2) {
          days = 28;
        } else if (month == 3) {
          days = 31;
        } else if (month == 4) {
          days = 30;
        } else if (month == 5) {
          days = 31;
        } else if (month == 6) {
          days = 30;
        } else if (month == 7) {
          days = 31;
        } else if (month == 8) {
          days = 31;
        } else if (month == 9) {
          days = 30;
        } else if (month == 10) {
          days = 31;
        } else if (month == 11) {
          days = 30;
        } else if (month == 12) {
          days = 31;
        }
      return days;
    }
  return (
    <ScrollView style={style.container}>
        <View style={style.container}>
            <Header title={'Book Appointment'} icon={require('../images/back.png')} />

            <Image source={require("../images/doctor.png")} style={style.docImg}/>
            <Text style={style.name}>Doctor Jack</Text>
            <Text style={style.spl}>Skin Specialist</Text>

            <Text style={style.heading}>Select Date</Text>

            <View style={{marginTop:20}}>
                <FlatList 
                    horizontal
                    data={Dayslist}
                    renderItem={({item,index}) =>{
                        return(
                            <TouchableOpacity style={{width:60,height:70,borderRadius:20,justifyContent: 'center',alignItems:'center',backgroundColor:"blue",marginLeft:10,}}>
                                <Text style={{color:"#fff"}}>{item}</Text>
                            </TouchableOpacity>
                        )
                    }}

                />
            </View>

            <Text style={style.heading}>Available Slots</Text>

            <View>
            <FlatList
            numColumns={2}
            data={slots}
            keyExtractor={({item, index}) => index}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={[
                    style.timeSlots,
                    {borderColor: index == selectedSlot ? 'blue' : 'black'},
                  ]}
                  onPress={() => {
                    setSelectedSlot(index);
                  }}>
                  <Text
                    style={{color: index == selectedSlot ? 'blue' : 'black'}}>
                    {item.sloT}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
            </View>

            <Text style={style.heading}>Patient Name</Text>
            <TextInput style={style.nameInput} placeholder="Enter Patient name"></TextInput>

            <Text style={style.heading}>Select Gender</Text>
            <View style={style.genderView}>
                <TouchableOpacity style={[style.gender, {borderWidth:selectedGender==0?1.5:0.5 , borderColor:selectedGender==0?'blue':'black'}]} onPress={()=>{setSelectedGender(0)}}> 
                    <Image source={require("../images/male.png")} style={{width:24,height:24}} />
                </TouchableOpacity>
                
                <TouchableOpacity style={[style.gender, {borderWidth:selectedGender==1?1.5:0.5 , borderColor:selectedGender==1?'blue':'black'}]} onPress={()=>{setSelectedGender(1)}}> 
                    <Image source={require("../images/female.png")} style={{width:24,height:24}} />
                </TouchableOpacity>
            </View>

            <View style={style.btnView}>
                <CommonBtn w={300} h={45} txt={"Book Now"} status={true} />
            </View>
        </View>

    </ScrollView>
  )
}

export default BookApointment

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    docImg:{
        width:100,
        height:100,
        marginTop:50,
        alignSelf:"center"
    },
    name:{
        fontSize:20,
        fontWeight:'700',
        alignSelf:"center",
        marginTop:10
    },
    spl:{
        fontSize:16,
        fontWeight:"700",
        alignSelf:"center",
        marginTop:10,
        backgroundColor:"#f2f2f2",
        color:'green',
        padding:5,
        borderRadius:10
    },
    heading: {
        color: '#000',
        fontSize: 18,
        fontWeight: '800',
        marginTop: 15,
        marginLeft: 15,
    },
    timeSlots:{
        width:"45%",
        height:40,
        borderRadius:10,
        borderWidth:0.5,
        margin:10,
        justifyContent:'center',
        alignItems:'center'
    },
    nameInput:{
        borderRadius:10,
        marginTop:10,
        width:'94%',
        height:45,
        borderWidth:0.5,
        alignSelf:'center',
        paddingLeft:20
    },
    genderView:{
        marginTop:20,
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:"row"
    },
    gender:{
        borderRadius:10,
        width:60,
        height:60,
        justifyContent:'center',
        alignItems:'center'
    },
    btnView:{
        marginTop:20,
        marginBottom:20
    },
})