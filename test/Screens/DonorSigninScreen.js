import  React,{useState} from 'react';
import { TextInput, Button } from 'react-native-paper';
import { StyleSheet,Text, View,} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

const DonorSigninScreen = (props) =>{

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('')

  const sendCred = async (props) =>{
    fetch("http://192.168.1.6:3000/signin",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
        
      },
      body:JSON.stringify({
        "username":username,
        "password": password
        
      })
    })
    .then(res=>res.json())
    .then(async (data)=>{
            try{
              await AsyncStorage.setItem('token',data.token)
              props.navigation.replace('HomePageClone')
            } catch (e) {
              console.log("error found",e)
              
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
        <View style={{height: 40, width:140, left:165, top:200,}}>
        <Button 
        mode="contained"
       onPress={() => sendCred(props)}>
        Signin
      </Button>
      </View>
        <Text style={{left:190, top:200, fontSize:18, color:'green', fontStyle:'italic'}} onPress={() => props.navigation.navigate('DonorSignup')} >
          Register Now!
          
        </Text>
      </View>
     
    </View>
    );
};



export default DonorSigninScreen;
