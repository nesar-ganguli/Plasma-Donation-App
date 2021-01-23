import React,{useState} from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet,Text,  Button,View,Dimensions,ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { render } from 'react-dom';


const ReceiverSignupScreen = (props) =>{

  const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');

    const sendCred = async (props) =>{
      fetch("http://192.168.1.6:3001/signup",{
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({
          "username":username,
          "password": password,
          "email":email,
          "address":address
        })
      })
      .then(res=>res.json())
      .then(async (data)=>{
              try{
                await AsyncStorage.setItem('token',data.token)
                props.navigation.replace('HomePage2')
                

              } catch (e) {
               
              }
      })
      
      
    }

    const update = async (props) =>{
      fetch("http://192.168.1.6:3000/updatedonor",{
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({
          "username":username
        })
      })
    
      
      
    }
    
    return(
      
      <View style={{ flex: 1}}>
    <View style={{flex: 1, backgroundColor:'dodgerblue'}} >
      <Text style={{left:115, top:45, fontSize: 30}}>PLASMA DONATION</Text>
    </View>
    <View style={{flex: 5, backgroundColor:'#fff'}} >
    <Text style={{left:180, top:55, fontSize: 30}}>RECEIVER</Text>
      <TextInput
        label="Username"
        mode="outlined"
        value={username}
        style={{height: 40, width:250, left:115, top: 100 }}
        theme={{colors:{primary:"dodgerblue"}}}
        onChangeText={(text=>setUsername(text))}
        />
      <TextInput
        label="Password"
        mode="outlined"
        value={password}
        secureTextEntry={true}
        style={{height: 40, width:250, left:115, top: 140 }}
        theme={{colors:{primary:"dodgerblue"}}}
        onChangeText={(text=>setPassword(text))}
        />
      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        style={{height: 40, width:250, left:115, top: 180 }}
        theme={{colors:{primary:"dodgerblue"}}}
        onChangeText={(text=>setEmail(text))}
        />
      <TextInput
        label="Address"
        mode="outlined"
        value={address}
        style={{height: 40, width:250, left:115, top: 220 }}
        theme={{colors:{primary:"dodgerblue"}}}
        onChangeText={(text=>setAddress(text))}
        />
      
      <View style={{height: 40, width:140, left:165, top:300,}}>
        <Button
          title="Sign Up"
          onPress={() => {sendCred(props), update(props)}}>
          
        </Button>
      </View>
      
      
    </View>
   
  </View>
 
  );
  }



const styles =StyleSheet.create({
ScrollView:{
  flexGrow: 1,
}
})

export default ReceiverSignupScreen;