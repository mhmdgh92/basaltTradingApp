import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { chartPricesTypeStyle } from './styles';
import { AppText } from '../../common';
import { ChartPricesTypes } from '../../common/utils/enums';

export const ChartPricesType = ({ onChangeChartPricesType, choosedChartPricesType }) => {

  const {
    container, btnStyle
  } = chartPricesTypeStyle;

  getBackColor = (btnChartPricesTypes) => {
    return choosedChartPricesType == btnChartPricesTypes ? 'antiquewhite' : 'aliceblue';
  }

  return (
    <View style={container} >
      <AppText textStyle={{ fontWeight: 'bold' }} text={'Chart Prices Type:'} size={18} />
      <TouchableOpacity style={[btnStyle, { backgroundColor: getBackColor(ChartPricesTypes.Open) }]} onPress={() => onChangeChartPricesType(ChartPricesTypes.Open)}><AppText text={'Open'} size={15} /></TouchableOpacity>
      <TouchableOpacity style={[btnStyle, { backgroundColor: getBackColor(ChartPricesTypes.High) }]} onPress={() => onChangeChartPricesType(ChartPricesTypes.High)}><AppText text={'High'} size={15} /></TouchableOpacity>
      <TouchableOpacity style={[btnStyle, { backgroundColor: getBackColor(ChartPricesTypes.Low) }]} onPress={() => onChangeChartPricesType(ChartPricesTypes.Low)}><AppText text={'Low'} size={15} /></TouchableOpacity>
      <TouchableOpacity style={[btnStyle, { backgroundColor: getBackColor(ChartPricesTypes.Close) }]} onPress={() => onChangeChartPricesType(ChartPricesTypes.Close)}><AppText text={'Close'} size={15} /></TouchableOpacity>
    </View>
  );
}

