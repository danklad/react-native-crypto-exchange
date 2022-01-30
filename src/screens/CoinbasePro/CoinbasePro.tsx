import React,{useEffect, useState} from "react";
import { Dimensions, StyleSheet, View, ScrollView } from "react-native";

import swag from "./data.json";
import Values from "./Values";
import Line from "./Line";
import Content from "./Content";
import Header from "./Header";
import { Candle } from "./Candle";
import Chart from "./Chart";
import Constants from "expo-constants";
import axios, {AxiosResponse} from "axios"





const { width: size } = Dimensions.get("window");
const apiUrl = 'https://d532-103-211-40-8.ngrok.io//api/candlestick/symbole/YFIUSDT/interval/1m';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,
  }
});

export default () => {



  const [data, setData] = useState([])
 

  const getdata = async ()=>{
     await axios
        .get(apiUrl)
        .then((response:AxiosResponse)=>{
          setData(response.data);
        })
  }

  useEffect(()=>{
      getdata();
      
      
  },[])

  const [slicer,setSlicer] = useState(20);

  
  const candles = data.slice(0, slicer);
  const bars = data.slice(0, slicer);
  if(data.length>0){
  const values = candles.map(candle=> [candle.low,candle.high]).flat();
  }
  const getDomain = (rows: Candle[]): [number, number] => {
    const values = rows.map(({ high, low }) => [high, low]).flat();
    return [Math.min(...values), Math.max(...values)];
  };
  const domain = getDomain(candles);
  const caliber = size / candles.length;




  return (
    <View style={styles.container}>
      <ScrollView>
      <View>
        <Header />
        {/* <Values {...{ caliber, candles }} /> */}
      </View>
      <View  style={{paddingTop: size/3}} />
      <Chart  slicer={slicer} {...{ candles, domain, bars, setSlicer}} />
      <Content />
      </ScrollView>
    </View>
  );
};
