import React from 'react';
import { View, TouchableOpacity } from 'react-native';
const { AppImage, AppText, AppIcon } = require('../../common');
import { companyItemStyle } from './styles';
import { useNavigation } from '@react-navigation/native';


export const CompanyItem = (props) => {

  const navigation = useNavigation();

  const {
    container,
    imgAndTitleRow,
    titleText
  } = companyItemStyle;

  const {
    data
  } = props;

  const onClick = () => {
    navigation.navigate('CompanyReports', {
      symbol: data.name,
      symbolImg: data.image
    });
  }

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onClick} style={container}>
      <View style={imgAndTitleRow}>
        <AppImage source={{ uri: data.image }} width={90} height={96} />
        <AppText margin={10} text={data.name} size={25} textStyle={titleText} />
      </View>
      <AppIcon name={'chevron-right'} color={'black'} size={50} />
    </TouchableOpacity>
  );
}