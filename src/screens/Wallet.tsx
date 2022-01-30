import React, {Suspense} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import { useNavigation } from '../utils'
import { AntDesign } from "@expo/vector-icons";
import Constants from "expo-constants";
import { BoughtCoinListItem } from './components/BoughtCoinListItem';
import { ScrollView } from 'react-native-gesture-handler';






export const WalletScreen = () => {     //{navigation}: any and onPress{()=>navigation.navigate(Home)}

  const { navigate } = useNavigation();
  
  const isChangePositive = () =>{
    return true;
  }



  return (
    <View style={styles.container}>
      <>
          <View style={styles.balanceContainer}>
            <View>
              <Text style={styles.currentBalance}>Current Balance</Text>
              <Text style={styles.currentBalanceValue}>
              ₹{'42069'}
              </Text>
              <Text
                style={{
                  ...styles.valueChange,
                  color: isChangePositive() ? "green" : "red",
                }}
              >
                ₹{"1200"} (All Time)
              </Text>
            </View>
            <View
              style={{
                ...styles.priceChangePercentageContainer,
                backgroundColor: isChangePositive() ? "green" : "red",
              }}
            >
              <AntDesign
                name={isChangePositive() ? "caretup" : "caretdown"}
                size={12}
                color={"white"}
                style={{ alignSelf: "center", marginRight: 5 }}
              />
              <Text style={styles.percentageChange}>
                {25}%
              </Text>
            </View>
          </View>
          <Text style={styles.assetsLabel}>Your Assets</Text>
          <View>
            <ScrollView>
          
{
      Array(12).fill().map((data,index)=>(
        <View style={{borderBottomWidth: StyleSheet.hairlineWidth,marginTop:10}}>
        <BoughtCoinListItem key={index}/>
        </View>

      ))
}
</ScrollView>

          
          
                     
                
          </View>
        </>
    </View>
  );
};





const styles = StyleSheet.create({

  container:
   { 
     backgroundColor: '#000000',
     flex:1,
     paddingTop: Constants.statusBarHeight,
    },
navigation: { flex: 1,  marginTop: 43, },
body: { flex: 10, justifyContent: 'center', alignItems: 'center' },
footer: { flex: 1, backgroundColor: 'cyan' },
  root: {
    padding: 20,
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: '40%',
    aspectRatio: 1,
    alignItems: 'center',
  },
  header1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: -100,
    marginBottom: 15,
    alignItems:'center',
    justifyContent:'center',
    textAlign: 'center',
    color:'white'
  },
  header2: {
    fontSize: 20,
    textAlign: 'center',
    color: '#707070',
  },
  root2: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: '50%',
  },
  // balanceContainer: {
  //   marginVertical: 20,
  //   width: '50%',
  //   alignItems: 'center'
    
  // },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#777777'
  },
  balance: {
    fontSize: 36,
    fontWeight: 'bold',
    color:'white'
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  },
  ticker: {
    color: 'grey',
    fontWeight: '700' 
  },
  coinContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: "#121212"
  },
  quantityContainer: {
    marginLeft: 'auto',
    alignItems: 'flex-end'
  },
  currentBalance: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15
  },
  currentBalanceValue: {
    color: 'white',
    fontSize: 40,
    fontWeight: '700',
    letterSpacing: 1
  },
  valueChange: {
    fontWeight: '700',
    fontSize: 16,
  },
  percentageChange: {
    color: 'white',
    fontWeight: '600',
    fontSize: 17,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 10,
  },
  priceChangePercentageContainer: {
    flexDirection: 'row',
    paddingHorizontal: 3,
    paddingVertical: 8,
    borderRadius: 5,
  },
  assetsLabel: {
    color: 'white',
    fontSize: 23,
    fontWeight: '700',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#4169E1',
    padding: 10,
    alignItems: 'center',
    marginVertical: 25,
    marginHorizontal: 10,
    borderRadius: 5 
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600'
  }
});

