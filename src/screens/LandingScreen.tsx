
import React, { useState, useReducer, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions , Image } from 'react-native'

import * as Location from 'expo-location'


import { connect } from 'react-redux'
import { onUpdateLocation, UserState, ApplicationState } from '../redux'


import { useNavigation } from '../utils'


const screenWidth = Dimensions.get('screen').width



interface LandingProps{
    userReducer: UserState,
    onUpdateLocation: Function
}


 const _LandingScreen: React.FC<LandingProps> = (props) => {

    const { userReducer, onUpdateLocation }  = props;

    const { navigate } = useNavigation()

    const [errorMsg, setErrorMsg] = useState("")
    const [address, setAddress] = useState("Email")
    
    const [displayAddress, setDisplayAddress] = useState("")

    useEffect(() => {
        setAddress("danladprivate@gmail.com")
        window.setTimeout(async () => {
            navigate('Login');
          }, 3000);
 

    }, [])

     
    return (
        <View style={styles.container}>
            <View style={styles.navigation} /> 
                
            <View style={styles.body}>
                <Image source={require('../images/logo.png')} style={styles.deliveryIcon} />
                <View style={styles.addressContainer}>
                    <Text style={styles.addressTitle}>Welcome To Crypto Exchange</Text>
                </View>
                <Text style={styles.addressText}> {displayAddress}</Text>
            </View>
            <View style={styles.footer} />
        </View>
    )

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'rgba(242,242,242,1)'
     },
    navigation: {
        flex: 2,
     },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deliveryIcon:{
        width: 120,
        height: 120
    },
    addressContainer: {
        width: screenWidth - 100,
        borderBottomColor: 'red',
        borderBottomWidth: 0.5,
        padding: 5,
        marginBottom: 10,
        alignItems: 'center',
        
    },
    addressTitle:{
        fontSize: 22,
        fontWeight: '700',
        color: '#7D7D7D',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    addressText: {
        fontSize: 20,
        fontWeight: '200',
        color: '#4F4F4F'
    },

    footer: {
        flex: 1,
     }

})


const mapToStateProps = (state: ApplicationState) => ({
    userReducer: state.userReducer
})

const LandingScreen = connect(mapToStateProps, { onUpdateLocation })(_LandingScreen)

export { LandingScreen }