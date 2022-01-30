import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from "../../utils";
import styles from './styles'
import formatMoney from "../../utils/formatMoney";
import CoinbasePro from '../../screens/CoinbasePro';

export interface PortfolioCoinProps {
  portfolioCoin: {
   
      id: string,
      image: string,
      name: string,
      symbol: string,
      amount: Number,
      currentPrice: Number,
    
  }
}

const PortfolioCoin = (props: PortfolioCoinProps) => {
  const {
    portfolioCoin: {

      // amount,
      // coin: {
        id,
        image,
        name,
        symbol,
        amount,
        currentPrice,
      // }
    },
  } = props;

  const { navigate }= useNavigation();

  return (
    // video paused at 1:20:57
    <TouchableOpacity style={styles.root} onPress={() => navigate('Trade')}>  
      <View style={styles.left}>
        <Image style={styles.image} source={{ uri: image}} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        {/* <Text style={styles.value}>${formatMoney(amount * currentPrice)}</Text>
        <Text style={styles.symbol}>{symbol} {formatMoney(amount)}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default PortfolioCoin;
