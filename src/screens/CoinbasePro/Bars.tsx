import React from "react";
import { View } from "react-native";
// import { Candle } from "./Model"
import {ScaleLinear} from 'd3-scale'
import { Line,Rect } from 'react-native-svg'


const MARGIN = 2;

export interface Bars {
  date: string;
  day: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume:number;
}

interface BarsProps {
  bar: Bars;        //singular bar
  index: number;
  width: number;
  scaleY: ScaleLinear<number, number>;
  scaleBody: ScaleLinear<number, number>;
}

export default ({ bar, index, width, scaleY, scaleBody }: BarsProps) => {
  const { close, open, high, low, volume } = bar;
  const fill = close > open ? "#4AFA9A" : "#E33F64";
  const x = index * width;
  const max = Math.max(open, close);
  const min = Math.min(open, close);
  return (
    <>
      <View style={{}}> 
      <Rect
        x={x + MARGIN}  
        y={scaleY(min)}
        width={width - MARGIN * 2}
        height={scaleBody(volume*min)}
        {...{ fill }}
      />
      </View>
    </>
  );
};
