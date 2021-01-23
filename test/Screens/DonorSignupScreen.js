import React,{useState} from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet,Text,  Button,View,Dimensions,ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { RadioButton } from 'react-native-paper';
import { render } from 'react-dom';



 
const DonorSignupScreen = (props) =>{


  
    const [donorCount, setdonorCount] = useState('');  
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');
    const [reciever,setReciever] = useState('-');
   
    const [checked, setChecked] = React.useState('first');

    const sendCred = async (props) =>{
      fetch("http://192.168.1.6:3000/signup",{
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({
          "username":username,
          "password": password,
          "email":email,
          "address":address,
          "reciever":reciever,
          "donorCount":donorCount,
        })
      })
      .then(res=>res.json())
      .then(async (data)=>{
              try{
                await AsyncStorage.setItem('token',data.token)
                props.navigation.replace('HomePage')
              
              } catch (e) {
               console.log("erRor")
              }
      })
    }
    
    
    
    return(
      
        <View style={{ flex: 1}}>
      <View style={{flex: 1, backgroundColor:'green'}} >
        <Text style={{left:115, top:45, fontSize: 30}}>PLASMA DONATION</Text>
      </View>
      <View style={{flex: 5, backgroundColor:'#fff'}} >
      <Text style={{left:180, top:55, fontSize: 30}}>DONOR</Text>
      <Text style={{left:100, top:56, fontSize: 20}}>Become a Donor by just registering!</Text>
        <TextInput
          label="Username"
          mode="outlined"
          value={username}
          style={{height: 40, width:250, left:115, top: 100 }}
          theme={{colors:{primary:"green"}}}
          onChangeText={(text=>setUsername(text))}
          />
        <TextInput
          label="Password"
          mode="outlined"
          value={password}
          secureTextEntry={true}
          style={{height: 40, width:250, left:115, top: 140 }}
          theme={{colors:{primary:"green"}}}
          onChangeText={(text=>setPassword(text))}
          />
        <TextInput
          label="Email"
          mode="outlined"
          value={email}
          style={{height: 40, width:250, left:115, top: 180 }}
          theme={{colors:{primary:"green"}}}
          onChangeText={(text=>setEmail(text))}
          />
        <TextInput
          label="Address"
          mode="outlined"
          value={address}
          style={{height: 40, width:250, left:115, top: 220 }}
          theme={{colors:{primary:"green"}}}
          onChangeText={(text=>setAddress(text))}
          />
           
        
        <View style={{height: 40, width:140, left:165, top:300,}}>
          <Button
            title="Sign Up"
            onPress={() => sendCred(props)}>
            
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


export default DonorSignupScreen;