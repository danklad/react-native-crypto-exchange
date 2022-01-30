import React, { useState, useEffect, useRef, useReducer} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput,KeyboardAvoidingView} from 'react-native'
import { TextField } from '../components'
import { connect } from 'react-redux';
import { ApplicationState, OnUserLogin, OnUserSignup, UserState } from '../redux';
import {useNavigation} from '../utils'
import { ToastAndroid } from 'react-native';




const OtpScreen = (props:any) => {
    const {navigate} = useNavigation();
    var textInput = useRef(null)
    const lengthInput = 6;
    const defaultCountDown = 30;
    let clockCall = null;



    // const {getParam, goBack} = props.navigation;
    const {navigation} = props;
    const mail = navigation.state.params.mail;

    console.log(mail);



    const [email, setEmail] = useState(mail);
    const [internalVal,setInternalVal] = useState("")
    const [countdown, setCountdown] = useState(defaultCountDown)
    const [enableResend, setEnableResend] = useState(false)
   
    
    // useEffect(()=>{
    //     clockCall = setInterval(()=>{
    //         decrementClock();
    //     },1000)
    //     return () =>{
    //         clearInterval(clockCall)
    //     }
    // })

    // const decrementClock=()=>{
    //     if(countdown === 0){
    //         setEnableResend(true)
    //         setCountdown(0)
    //         clearInterval(clockCall)

    //     }else{
    //         setCountdown(countdown - 1)
    //     }
    // }

    // const onResendOtp = () =>{
    //     if(enableResend){
    //         set
    //     }
    // }

    const showToast = (msg: any) => {
        ToastAndroid.show(msg, ToastAndroid.SHORT);
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

    const auth = async (val:any) => {
        return fetch('http://backend.bittez.io/otp-login-verify?email='+email+'&otp='+val, {
        method: 'GET'
        })
        .then(response => response.json())
    .then((result) => {
        console.log(result)
        // if(result.status === 'ok'){
            navigate('Home',{msg: email})
        // }
        // else{
            showToast("Incorrect OTP")
        // }
        
    })
    .catch(error => console.log(error));
        
      };

      const onChangeText = (val:any) =>{
            setInternalVal(val)
            if(val.length === lengthInput){
                console.log(val)
                auth(val);
                
            }
      }
      useEffect(()=>{
          textInput.focus();
      },[])
      
      
return (
<View style={styles.container}>
     <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={'padding'}
        style={styles.containerAvoidingView}
      
     >

         <Text style={styles.textTitle}>{"Input your OTP code sent to "+email}</Text>

        <View>
            <TextInput 
                ref={(input)=>textInput = input}
                onChangeText={onChangeText}
                style={{width:0,height:0}}
                value={internalVal}
                maxLength={lengthInput}
                returnKeyType='done'
                keyboardType='numeric'
            />

            <View style={styles.containerInput}>

                {
                    Array(lengthInput).fill().map((data,index)=>(   
                        <TouchableOpacity
                         onPress={()=>textInput.focus()}
                         key={index}
                         style={[styles.cellView,
                                {
                                    borderBottomColor: index === internalVal.length ? '#FB6C6A' : '#234DB7'
                                }
                         
                         ]}>

                            <Text style={styles.cellText}
                                onPress={()=> textInput.focus() }
                                >  
                               
                                {internalVal &&  internalVal.length > 0 ? internalVal[index] : ""}
                                </Text>

                         </TouchableOpacity>
                    ))

                }

            </View>

        </View>

            <View style={styles.bottomView}>
                
            <TouchableOpacity onPress={()=>navigate('Login')}>
                            <View style={styles.btnChangeNumber}>
                            <Text style= {styles.textChange}>Change Email</Text>
                            </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={sendOtp}>
                            <View style={styles.btnResend}>
                            <Text style= {styles.textResend}>Resend Otp</Text>
                            </View>
            </TouchableOpacity>

            </View>


        
     </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems:'center',
    padding:10
  },
  containerAvoidingView:{
    flex: 1,
    backgroundColor: 'white',
    alignItems:'center',
    padding:10
  },
  textTitle:{
      marginBottom:50,
      marginTop:50,
      fontSize:15
  },
  containerInput:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'

  },
  cellView:{
      paddingVertical:11,
      width :50,
      margin: 5,
      justifyContent:'center',
      alignItems: 'center',
      borderBottomWidth: 1.5
  },
  cellText:{
      textAlign:'center',
      fontSize: 16,

  },
  bottomView:{
      flexDirection: 'row',
      flex: 1,
    //   justifyContent: 'flex-end',
    //   alignItems: 'flex-end',  
      position: 'absolute',
      bottom: 5
  },
  btnChangeNumber:{
      width: 150,
      height: 50,
      borderRadius:10,
      alignItems:'flex-start',
      justifyContent: 'center',
  },
  textChange:{
      color: '#234DB7',
      alignItems: 'center'
  },
  btnResend:{
      width:150,
      height:50,
      borderRadius: 10,
      alignItems: 'flex-end',
      justifyContent: 'center'
  },
  textResend:{
      alignItems:'center',

  }
  

})






 export { OtpScreen }