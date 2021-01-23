import React,{useEffect,useState} from 'react';
import { StyleSheet,Text, TouchableOpacity,View,} from 'react-native';
import {Button} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage'


const HomePage2 = (props) =>{
   const [username,setusername] = useState("loading")
   const Boiler = async () =>{

        const token = await AsyncStorage.getItem('token')
        
        fetch("http://192.168.1.6:3001/",{
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
    return( <View style={{ flex: 1}}>
    <View style={{flex: 1, backgroundColor:'dodgerblue'}} >

    <Text style={{left:115, top:45, fontSize: 30}}>PLASMA DONATION</Text>
</View>
<View style={{flex: 5, backgroundColor:'#fff'}} >
<Text style={{left:120, top:55, fontSize: 30}}>RECEIVER DETAILS</Text>
<Text style={{height: 40, width:250, left:60, top: 100 ,fontSize: 30}}>Username: {username}</Text>
<Button
            mode="contained"
            style={{height: 40, width:150, left:150, top: 120 ,fontSize: 25,backgroundcolor:"blue"}}
            color="blue"
            onPress={() => props.navigation.navigate("Donation")}>
            UPDATES
</Button>
<Button
    mode="contained"
    color="red"
    style={{height: 40, width:150, left:150, top: 130 ,}}
    onPress={() => logout(props)}>
    logout
</Button>
  
</View>

</View>
);
};

export default HomePage2;
