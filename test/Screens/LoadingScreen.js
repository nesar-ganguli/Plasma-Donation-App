import  React,{useEffect} from 'react';
import { TextInput } from 'react-native-paper';
import {ActivityIndicator, StyleSheet,Text,  Button,View, ActivityIndicatorBase,} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

const LoadingScreen = (props) =>{

    const dectectLogin= async ()=>{
        const token = await AsyncStorage.getItem('token')
        if (token){
            props.navigation.replace("HomePage")
        }
        else{
            props.navigation.replace("Home")
        }
    }
 
    useEffect(()=>{
        dectectLogin()
    },[])

    return(
        
        <View style={styles.loading}>
            <ActivityIndicator size="large" color="blue" />
        </View>
    );
};


const styles = StyleSheet.create({
    loading:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }
});

export default LoadingScreen;