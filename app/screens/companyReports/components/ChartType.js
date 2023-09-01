import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { chartTypeStyle } from './styles';
import { AppText } from '../../common';
import { ChartTypes } from '../../common/utils/enums';

export const ChartType = ({ onChangeChartType, choosedChartType }) => {

  const {
    container, btnStyle
  } = chartTypeStyle;

  getBackColor = (btnChartTyle) => {
    return choosedChartType == btnChartTyle ? 'antiquewhite' : 'aliceblue';
  }

  return (
    <View style={container} >
      <AppText textStyle={{ fontWeight: 'bold' }} text={'Chart Type:'} size={18} />
      <TouchableOpacity style={[btnStyle, { backgroundColor: getBackColor(ChartTypes.Line) }]} onPress={() => onChangeChartType(ChartTypes.Line)}><AppText text={'Line'} size={15} /></TouchableOpacity>
      <TouchableOpacity style={[btnStyle, { backgroundColor: getBackColor(ChartTypes.Area) }]} onPress={() => onChangeChartType(ChartTypes.Area)}><AppText text={'Area'} size={15} /></TouchableOpacity>
      <TouchableOpacity style={[btnStyle, { backgroundColor: getBackColor(ChartTypes.Bar) }]} onPress={() => onChangeChartType(ChartTypes.Bar)}><AppText text={'Bar'} size={15} /></TouchableOpacity>
    </View >
  );
}

