import React,{useEffect,useState} from 'react';
import { StyleSheet,Text, View,Alert} from 'react-native';
import {Button} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';


const HomePageClone = (props,{navigation}) =>{
   const [username,setusername] = useState("loading")
   const Boiler = async () =>{

        const token = await AsyncStorage.getItem('token')
        
        fetch("http://192.168.1.6:3000/",{
            headers: new Headers({
                Authorization:"Bearer "+token
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            setusername(data.username)
        }
    )
   }
    useEffect(()=>{
        Boiler()

    },[])

    const logout =  (props) =>{
         AsyncStorage.removeItem('token').then(()=>{
             props.navigation.replace('Home')
         })
    }
    return(
        <View style={{ flex: 1}}>
            <View style={{flex: 1, backgroundColor:'green'}} >
      
            <Text style={{left:115, top:45, fontSize: 30}}>PLASMA DONATION</Text>
      </View>
      <View style={{flex: 5, backgroundColor:'#fff'}} >
      <Text style={{left:140, top:55, fontSize: 30}}>DONOR DETAILS</Text>
      <Text style={{height: 40, width:250, left:60, top: 100 ,fontSize: 30}}>Username: {username}</Text>
      <Text style={{height: 50, width:300, left:60, top: 110 ,fontSize: 20}}>Please wait for a phone call.If already received ignore this message.</Text>
      
      
      <Button
            mode="contained"
            style={{height: 40, width:150, left:150, top: 180 ,}}
            color="red"
            onPress={() => logout(props)}>
            logout
          </Button>
          
      </View>
     
    </View>
    );
};

export default HomePageClone;
