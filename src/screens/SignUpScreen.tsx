import React, { useState, useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, Button, ToastAndroid } from 'react-native'
import { TextField } from '../components'
import { connect } from 'react-redux';
import { ApplicationState, OnUserLogin, OnUserSignup, UserState } from '../redux';
import {useNavigation} from '../utils'




const SignUpScreen = () => {
 
    const {navigate} = useNavigation();
//  const [address, setAddress] = useState("Email")
//     useEffect(() => {
//         setAddress("danladprivate@gmail.com")
//         window.setTimeout(async () => {
//             navigate('Login');
//           }, 3000);
 
//     }, [])



    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [referral, setReferral] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword,setCpassword] = useState('');
    const [shouldShow, setShouldShow] = useState(false);
    const [unames, setUnames] = useState([])

    
 const showToast = (msg: any) => {
        ToastAndroid.show(msg, ToastAndroid.LONG);
      };

 const suggestUserName = async(text:any)=>{
        console.log(text)
        setShouldShow(false)
            return fetch('http://backend.bittez.io/user-name?uname='+text, {
            method: 'POST'
            })
            .then(response => response.json())
        .then((result) => {
            console.log(result)
            if(result.status==='notOk'){
                setUnames(result.message);
                console.log(unames.length);
                if( result.message !='length is less than 4'){
                    setShouldShow(true)
                }
            
            }
            
        })
        .catch(error => console.log(error));
    }

    

    const auth = async() =>{

            if(password === cpassword){
       
            return fetch('http://backend.bittez.io/sign-up?uname='+username+'&password='+password+'&cpassword='+cpassword+'&referral='+referral+'&email='+email , {
            method: 'POST'
            })
            .then(response => response.json())
        .then((result) => {
            if(result.status === 'ok'){
                showToast("Link has been sent to your email. Verify your email to continue")
                navigate('Login')
            }

        })
        .catch(error => console.log(error));
    }
    else{

    }
}
    
   

        




return (<View style={styles.container}>
    <View style={styles.navigation}><Text style={{ fontSize: 30, fontWeight: '400'}}>{'Sign Up'}</Text></View>
    <View style={styles.body}>
            
            <TextField placeholder="Enter New Username" onTextChange={suggestUserName} isSecure={false} />
            {
                shouldShow ? (

            <Text style={styles.unameText}>{"This username is taken. Try "+unames[0]+" "+unames[1]}</Text>
                ) : null
            }   
            <TextField placeholder="Email ID" onTextChange={setEmail} isSecure={false} />

            <TextField placeholder="Password" onTextChange={setPassword} isSecure={true} />

            <TextField placeholder="Re-Enter Password" onTextChange={setCpassword} isSecure={true} />

            <TextField placeholder="Referral Code(Optional)" onTextChange={setReferral} isSecure={false} />
            
            <TouchableOpacity onPress={auth} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Submit</Text>
            </TouchableOpacity>



            <TouchableOpacity onPress={()=>navigate('Login')} style={styles.appButtonContainer2}>
                <Text style={styles.appButtonText2}>Already a user? <Text style={{textDecorationLine: 'underline'}}>Log In Here</Text></Text>
            </TouchableOpacity>

                


        
               
            
           

    </View>
    <View style={styles.footer}></View>
</View>)
}

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
  },
  unameText: {
      color: 'crimson',
      paddingBottom: 10
  }


})

 





 export { SignUpScreen }