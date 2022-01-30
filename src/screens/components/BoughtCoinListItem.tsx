import React, {Suspense} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import { AntDesign } from "@expo/vector-icons";






export const BoughtCoinListItem = () => {     //{navigation}: any and onPress{()=>navigation.navigate(Home)}


  const image = 'https://cdn-icons.flaticon.com/png/512/2140/premium/2140534.png?token=exp=1643447230~hmac=c9ca0923f9683a9f8c0f4f9650235465';
  var priceChangePercentage = 20;
  var currentPrice = 100;
  var quantityBought = 3;
  const isChangePositive = () => priceChangePercentage >= 0;

  const renderHoldings = () => (quantityBought * currentPrice).toFixed(2)


  return (
    <View style={{ flex: 1 }}>
      <Suspense
        fallback={<Text style={{ color: "white" }}>Loading Please Wait!</Text>}
      >
        <View style={styles.coinContainer}>
      <Image
        source={{ uri: image }}
        style={{ height: 30, width: 30, marginRight: 10, alignSelf: "center" }}
      />
      <View>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.ticker}>tiker</Text>
      </View>
      <View style={{ marginLeft: "auto", alignItems: 'flex-end' }}>
        <Text style={styles.title}>{currentPrice}</Text>
        <View style={{ flexDirection: "row" }}>
          <AntDesign
            name={isChangePositive() ? "caretup" : "caretdown"}
            size={12}
            color={isChangePositive() ? "#16c784" : "#ea3943"}
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text
            style={{
              color: isChangePositive() ? "#16c784" : "#ea3943",
              fontWeight: "600",
            }}
          >
            {priceChangePercentage?.toFixed(2)}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.title}>₹{renderHoldings()}</Text>
        <Text style={styles.ticker}>
          {quantityBought} {"ticker"}
        </Text>
      </View>
    </View>
      </Suspense>
    </View>
  );
};





const styles = StyleSheet.create({

  container:
   { 
     backgroundColor: '#000000'
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
  }
});

