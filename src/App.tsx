import React,{useEffect} from 'react';
import {StyleSheet, Platform} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from './screen/Onboarding';
import Map from './screen/Map';
import ChooseLocation from './screen/ChooseLocation';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    if(Platform.OS === 'android')
    SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Choose Location" component={ChooseLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  
});