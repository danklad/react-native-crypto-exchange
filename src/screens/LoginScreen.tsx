import React, { useState, useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, Button, ToastAndroid } from 'react-native'
import { TextField } from '../components'
import { connect } from 'react-redux';
import { ApplicationState, OnUserLogin, OnUserSignup, UserState } from '../redux';
import {useNavigation} from '../utils'




const LoginScreen = () => {
 
    const {navigate} = useNavigation();



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [title, setTitle] = useState('Login')
    
    const showToast = (msg: any) => {
        ToastAndroid.show(msg, ToastAndroid.LONG);
      };



    const auth = async () => {
        return fetch('http://backend.bittez.io/login?email='+email+'&password='+password, {
        method: 'POST'
        })
        .then(response => response.json())
    .then((result) => {
        console.log(result)
        if(result.status === 'ok'){
            
            sendOtp()
            navigate('Otp', {mail: email})
        }
        else{
            showToast(result.message)
        }
    })
    .catch(error => console.log(error));
        
      };


    const sendOtp = async () =>{
        return fetch('http://backend.bittez.io/send-login-otp?email='+email, {
            method: 'GET'
            })
            .then(response => response.json())
        .then((result) => {
            console.log("otp "+result.status)
            if(result.status === 'ok'){
                
                // navigate('Otp', {mail: email})
                showToast("Otp Sent Successfully")
            }
            else{
                showToast("Otp Not Sent")
            }
        })
        .catch(error => console.log(error));
    }


return (<View style={styles.container}>
    <View style={styles.navigation}><Text style={{ fontSize: 30, fontWeight: '400'}}>{title}</Text></View>
    <View style={styles.body}>
            
            <TextField placeholder="Email ID" onTextChange={setEmail} isSecure={false} />

            
            <TextField placeholder="Password" onTextChange={setPassword} isSecure={true} />

            
            <TouchableOpacity onPress={auth} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>{title}</Text>
            </TouchableOpacity>

                


            <TouchableOpacity onPress={()=>navigate('SignUp')} style={styles.appButtonContainer2}>
                <Text style={styles.appButtonText2}>New to Crypto? <Text style={{textDecorationLine: 'underline'}}>Sign Up Here</Text></Text>
            </TouchableOpacity>
               
            
           

    </View>
    <View style={styles.footer}></View>
</View>)}

const styles = StyleSheet.create({
container: { flex: 1,},
navigation: { flex: 3, justifyContent: 'center', paddingLeft: 30},
body: { flex: 6, justifyContent: 'center', alignItems: 'center'},
footer: { flex: 3,  },

appButtonContainer: {
    elevation: 8,
    marginTop: 20,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
        },

appButtonContainer2: {
    marginTop: 15,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
},
    appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  appButtonText2: {
    fontSize: 18,
    color: "black",
    alignSelf: "center",
    textTransform: "uppercase"
  }


})





 export { LoginScreen }