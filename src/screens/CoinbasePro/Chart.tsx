import React from "react";
import {View, ScrollView, Dimensions} from 'react-native'
import Svg from "react-native-svg";
import {scaleLinear} from 'd3-scale'
import {Candle as CandleModel} from './Candle'
import {Bars as BarsModel} from './Bars'

import Candle from './Candle'
import Bars from "./Bars";

export const { width: size, height:heightOfView } = Dimensions.get("window");


interface ChartProps {
  candles: CandleModel[];
  bars: BarsModel[];
  domain: [number, number];
  slicer: number;
  setSlicer: (number:any)=>void;
}

export default ({ candles, domain, bars, slicer, setSlicer}: ChartProps) => {
  var width=0;
  var i = 0;
  if(candles.length <=20){
  width = (size / candles.length);
  }
  else if(candles.length>20){
    width = (size / candles.length)
  }
  const scaleY = scaleLinear().domain(domain).range([size, 0]);
  const scaleBody = scaleLinear()
    .domain([0, Math.max(...domain) - Math.min(...domain)])
    .range([0, size]);
  return (
    
    
    <ScrollView onScroll={(e)=>{setSlicer(slicer+2)}} horizontal={true} contentContainerStyle={{flexGrow: 1}} >
      <View>
    <Svg width={size+size} height={size}>
      {candles.map((candle, index) => ( 
        <Candle
          key={candle.date}
          {...{ candle, index, width, scaleY, scaleBody }} />
      ))}
    </Svg>
    
   
    <Svg width={size+size} height={size}>
        
        {bars.map((bar, index) => (
          <Bars
            key={bar.date}
            {...{ bar, index, width, scaleY, scaleBody }} />
        ))}

      </Svg>
     </View>
     </ScrollView>
     
      
  );
};