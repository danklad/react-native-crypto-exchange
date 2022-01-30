import React, {useState, useEffect} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    SafeAreaView
} from 'react-native'

import {
    Avatar,
    Title,
    Caption,
    TouchableRipple,
  } from 'react-native-paper'

import Constants from "expo-constants";


import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// import files from '../assets/filesBase64';


export const AccountScreen = () => {    

    

    return (
        <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image
            source={{
              uri: 'https://cdn-icons.flaticon.com/png/512/4140/premium/4140048.png?token=exp=1643458561~hmac=51ebb792ea3143ceeb1cec9064eda5e7',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>John Doe</Title>
            <Caption style={styles.caption}>@j_doe</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#FFFFF7" size={20}/>
          <Text style={{color:"#FFFFF7", marginLeft: 20}}>Bangalore, India</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#F7F7FF" size={20}/>
          <Text style={{color:"#F7F7FF", marginLeft: 20}}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#F7F7FF" size={20}/>
          <Text style={{color:"#F7F7FF", marginLeft: 20}}>surya@cognnox.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title style={styles.title}>₹140.50</Title>
            <Caption style={{color : '#FFF9F9'}}>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title style={styles.title}>12</Title>
            <Caption style={{color : '#FFF9F9'}}>Orders</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#F7F7FF" size={25}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card-outline" color="#F7F7FF" size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>{}}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#F7F7FF" size={25}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#F7F7FF" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="settings-outline" color="#F7F7FF" size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: Constants.statusBarHeight,
        
    },
    title:{
        color: '#FFF9F9',
    },
    navigation: {
        flex: 1,
        marginTop: 43
    },
    body: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: 'cyan'
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
      },    
      caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
        color: 'white'
      },
      row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
      },
      infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',   
      },
      menuWrapper: {
        marginTop: 10,
      },
      menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
      },
      menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },
})
