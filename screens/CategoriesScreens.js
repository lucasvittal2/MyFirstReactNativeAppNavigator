import React from "react";
import {View,Text,Button,StyleSheet, FlatList, TouchableOpacity,Platform} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle' ;
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import {HeaderButton} from '../components/HeaderButton';


const CategoriesScreen = props=>{
  
    const renderGridItem= (itemData)=>{
        return (
            
            <CategoryGridTitle title = {itemData.item.title}  onSelect={()=>{
                props.navigation.navigate({
                    routeName:"CategoryMeals",
                    params:{
                        categoryId: itemData.item.id
                    }
                })
            }}
            
            color = {itemData.item.color}
            />

            )
    };

    return(
        <FlatList 
        numColumns={2}
        data={CATEGORIES}
        renderItem={renderGridItem}
        keyExtractor={(item,index)=> item.id}

        />

        

        
    );

}
CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerLeft: (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title="Menu" iconName='ios-menu'  onPress={()=>{}}/>   
                    </HeaderButtons>
                )
    
};



const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    }
   

})

export default CategoriesScreen;