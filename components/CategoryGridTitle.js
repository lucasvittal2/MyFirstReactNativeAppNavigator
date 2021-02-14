import React from 'react';
import { TouchableOpacity,View, Text, StyleSheet, Platform} from 'react-native';


const CategoryGritTitle = props =>{
    return(

        <TouchableOpacity 
            onPress = {props.onSelect}
            

            style={styles.gridItem}

            >
                <View style ={{...{backgroundColor: props.color},...styles.container}} >
                        <Text style={styles.title} numberOfLines={2}>
                           {props.title}
                        </Text>
                </View>
            </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin: 15,
        height:150,
        borderRadius:10,
        elevation:5,
        overflow:Platform.OS==="android" && Platform.Version>=21? 'hidden':'visible'
    },
    container:{
        flex: 1,
        borderRadius:10,
        shadowColor: 'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        
        padding:15,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:18,
        textAlign:'right'
        
    }

});



export default CategoryGritTitle;