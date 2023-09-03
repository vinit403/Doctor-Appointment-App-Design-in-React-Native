import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screen/Splash';
import Home from './src/screen/Home';
import BookApointment from './src/screen/BookApointment';
import Success from './src/screen/Success';
import Completed from './src/screen/Completed';
import Pending from './src/screen/Pending';
import CallAmb from './src/screen/CallAmb';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CallAmb">
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="BookApointment" component={BookApointment} options={{headerShown:false}} />
        <Stack.Screen name="Success" component={Success} options={{headerShown:false}} />
        <Stack.Screen name="Completed" component={Completed} options={{headerShown:false}} />
        <Stack.Screen name="Pending" component={Pending} options={{headerShown:false}} />
        <Stack.Screen name="CallAmb" component={CallAmb} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})