import React from 'react';
import { View } from 'react-native';
const { AppImage } = require('../../common');
import { symbolStatisticsStyle } from './styles';
import { ItemData } from './ItemData';

export const SymbolStatistics = ({ data, symbolImg }) => {

  const {
    container, detailsCol
  } = symbolStatisticsStyle;

  const { symbol, exchange, date, dividend, split_factor, adj_volume } = data;

  return (
    <View style={container} >
      <AppImage source={{ uri: symbolImg }} width={90} height={96} />
      <View style={detailsCol}>
        <ItemData title={'Symbol'} value={symbol + ""} />
        <ItemData title={'Volume'} value={adj_volume + ""} />
        <ItemData title={'Dividend'} value={dividend + ""} />
      </View>
      <View style={detailsCol}>
        <ItemData title={'Exchange'} value={exchange + ""} />
        <ItemData title={'Split Factor'} value={split_factor + ""} />
        <ItemData title={'Date'} value={date + ""} />
      </View>
    </View>
  );
}

