import React,{useState} from 'react';
import { Text, View } from 'react-native';
import *as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator';
import {enableScreens} from 'react-native-screens';

enableScreens();

const fetchFonts=()=>{
  Font.loadAsync({
    'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  const [fontLoaded,setFontLoaded] = useState(false);



  if(!fontLoaded){
    return<AppLoading startAsync={fetchFonts} onFinish={()=>setFontLoaded(true)} onError={console.warn}/>
  }
  return (
    <MealsNavigator/>
  );
}
