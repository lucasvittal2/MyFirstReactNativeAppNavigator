import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesScreen from '../screens/CategoriesScreens';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Color from '../constants/Colors';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FavoriteScreen from '../screens/FavoriteScreen';
import {Ionicons} from '@expo/vector-icons'
import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { Platform } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';

import {FiltersScreen} from '../screens/FiltersScreen';

const defaultScreenConfig ={
    
    initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:  Color.primaryColor 
      },
      headerTintColor:'white',
      headerTitle: 'A Screen'
    }
  };



const MealsNavigator =  createStackNavigator({
    Categories:{
        screen: CategoriesScreen,
        navigationOptions:{
            headerTitle:"Meal Category ",
            headerStyle:{
                backgroundColor: Color.primaryColor,
            
            },
            headerTintColor: 'white'
        }
    },
    CategoryMeals:{
        screen: CategoryMealsScreen,
        

    },
    MealDetail: MealDetailScreen

},  
defaultScreenConfig);

const favNavigator = createStackNavigator ({
  Favorites: FavoriteScreen,
  MealDetail:MealDetailScreen

},defaultScreenConfig);

const tabScreenConfig={
  


  Meals: {
      screen:MealsNavigator, 
      navigationOptions:{
      tabBarIcon:(tabInfo)=>{
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
      },
      tabBarColor:Color.primaryColor
    },
   
  },
  Favorites: {
    screen:favNavigator,
    navigationOptions:{
      tabBarLabel:'Favorite!',
      tabBarIcon:(tabInfo)=>{
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
      },
      tabBarColor:Color.accentColor
    },
   
  }

};





const MealsFavTabNavigator = Platform.OS==='android'?   createMaterialBottomTabNavigator(tabScreenConfig,{
  
  activeColor: 'white',
  shifting:true

})
:createBottomTabNavigator({

  
  tabBarOptions:{
    activeTintColor: Color.accentColor
  }
});


const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen

});


const MainNavigator =  createDrawerNavigator({
   MealsFavs: MealsFavTabNavigator,
   Filters: FiltersNavigator
});





export default createAppContainer(MainNavigator);