import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import CommonBtn from '../components/CommonBtn';

const Home = ({navigation}) => {
  return (
   
    <View style={style.container}>
      <ScrollView style={style.container}>
        <View style={style.container}>

          <Header title={'Doctor App'} icon={require('../images/back.png')} />

          <Image source={require('../images/banner.jpg')} style={style.banner} />

          <Text style={style.heading}>Select Category</Text>

          <View style={{marginTop: 20}}>
            <FlatList
              data={[1, 1, 1, 1, 1]}
              horizontal
              showsHorizontalScrollIndicator
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity>
                    <LinearGradient
                      colors={['#009FF3', '#2A2A72']}
                      style={style.linearGradient}>
                      <Text style={style.catName}>{'Category' + index + 1}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <Text style={style.heading}>Top Rated Doctors</Text>

          <View style={{marginTop: 20, alignItems: 'center'}}>
            <FlatList
              numColumns={2}
              data={[1, 1, 1, 11,1,1]}
              renderItem={({item, index}) => {
                return <View style={style.docItem}>
                    <Image source={require("../images/doctor.png")} style={style.docImg}/>
                    <Text style={style.docName}>Doctor {index+1}</Text>
                    <Text style={style.docSpl}>Skin Specialist</Text>

                    {/* check condition if doctor is available or not */}
                    <Text style={[style.status ,{color:index/2==0?'green':'red', opacity:index/2==0?1:0.5}] }>{index/2==0?'Available':"Busy"}</Text>  

                    {/* if available then show book button otherwise not display the book button */}
                    <CommonBtn w={150} h={40} status={index/2==0?true:false} txt={"Book Appointment"} onClick={()=>{
                        if(index/2==0){
                            navigation.navigate("BookApointment")
                        }
                    }}/>
                    
                </View>;
              }}
            />
          </View>
        </View>
      </ScrollView>

      
      <View style={style.bottomView}>

          <TouchableOpacity onPress={()=>{navigation.navigate('Completed')}}>
            <Image source={require('../images/completed.png')} style={style.bottomIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{navigation.navigate('Pending')}}>
            <Image source={require('../images/pending.png')} style={style.bottomIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{navigation.navigate('CallAmb')}}>
            <Image source={require('../images/ambulance.png')} style={style.bottomIcon} />
          </TouchableOpacity>

      </View>

    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 15,
    marginLeft: 15,
  },
  linearGradient: {
    width: 120,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  docItem: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.2,
    alignSelf: 'center',
    margin: 10,
  },
  docImg:{
      width:60,
      height:60,
      borderRadius:40,
      alignSelf:'center',
      marginTop:20
  },
  docName:{
      fontSize:18,
      fontWeight:'700',
      alignSelf:'center',
      marginTop:10
  },
  docSpl:{
      fontSize:14,
      fontWeight:"600",
      alignSelf:'center',
      color:"green",
      marginTop:5,
      backgroundColor:"#f2f2f2",
      padding:5,
      borderRadius:10
  },
  status:{
    fontSize:14,
    fontWeight:"600",
    alignSelf:'center',
    marginTop:5,
  },
  bottomView:{
    width:'90%',
    height:60,
    borderRadius:10,
    elevation:5,
    position:'absolute',
    bottom:20,
    backgroundColor:'#fff',
    alignSelf:'center',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  bottomIcon:{
    width:30,
    height:30,
  }
});
