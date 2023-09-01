import React from 'react';
import { View } from 'react-native';
const { AppText } = require('../../common');
import { itemDataStyle } from './styles';

export const ItemData = ({ title, value }) => {

  const {
    container, titleText
  } = itemDataStyle;

  return (
    <View style={container}>
      <AppText textAlign={'left'} margin={10} text={title} size={20} textStyle={titleText} />
      <AppText textAlign={'left'} margin={10} text={value.substring(0, 10)} size={20} />
    </View>
  );
}