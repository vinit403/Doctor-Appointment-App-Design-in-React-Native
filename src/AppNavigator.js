import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screen/Splash';


const Stack = createNativeStackNavigator();


const AppNavigator = () => {
  return (
    <View>
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen component={Splash} name='SSplash' />

          </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default AppNavigator