import React, { useEffect, useState } from 'react';
import {View, Text, Image, StyleSheet, FlatList, RefreshControl} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContext } from 'react-navigation';
import image from '../../assets/Saly-1.png'
import { useNavigation } from '../utils'
import AppContext from "../utils/AppContext";
import formatMoney from "../utils/formatMoney";
import PortfolioCoin from '../components/PortfolioCoin';
import Constants from "expo-constants";
import CoinItem from './components/CoinItem';
import axios from 'axios';


const image1 = 'https://cdn-icons-png.flaticon.com/512/4843/4843036.png';






export const MarketScreen = () => {     //{navigation}: any and onPress{()=>navigation.navigate(Home)}
  const { navigate } = useNavigation();


  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

 

  const fetchCoins = async (pageNumber:any) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData(pageNumber);
    setCoins((existingCoins) => [...existingCoins, ...coinsData]);
    setLoading(false);
  };
  

  const refetchCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData();
    setCoins(coinsData);
    setLoading(false);
  };


  useEffect(() => {
    fetchCoins(1);
  }, []);


  const  getMarketData = async (pageNumber = 1) => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`)
      return response.data;
    } catch (e) {
      console.log(e)
    }
  }

  
  return (
    <View style={styles.container}>
      <Text style={{  color: "white", fontSize: 25, letterSpacing: 1, paddingHorizontal: 20, paddingBottom: 5 }}>Cryptoassets</Text>
      <FlatList
        data={coins}
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
        onEndReached={() => fetchCoins(coins.length / 50 + 1)}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            tintColor="white"
            onRefresh={refetchCoins}
          />
        }
      />
    </View>
  )
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
    textAlign: 'center'
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
  balanceContainer: {
    marginVertical: 20,
    width: '50%',
    alignItems: 'center'
    
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#777777'
  },
  balance: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

