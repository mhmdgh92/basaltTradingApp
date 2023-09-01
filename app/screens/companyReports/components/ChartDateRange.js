import React, { useState } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { chartPricesTypeStyle } from './styles';
import { AppText, AppIcon, AppBTN } from '../../common';
import DatePicker from 'react-native-date-picker';
import { getDateFormated, getPriorDate } from '../../common/utils/date';

export const ChartDateRange = ({ onChangeDate }) => {

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startOrEndDateMode, setStartOrEndDateMode] = useState(true);
  const [startDate, setStartDate] = useState(getPriorDate(10));
  const [endDate, setEndDate] = useState(getDateFormated());

  const {
    container, btnStyle
  } = chartPricesTypeStyle;

  return (
    <View style={container} >
      <TouchableOpacity style={btnStyle} onPress={() => { setStartOrEndDateMode(true); setShowDatePicker(true); }}><AppText text={getDateFormated(startDate)} size={15} /></TouchableOpacity>
      <AppIcon size={24} color={'black'} />
      <TouchableOpacity style={btnStyle} onPress={() => { setStartOrEndDateMode(false); setShowDatePicker(true); }}><AppText text={getDateFormated(endDate)} size={15} /></TouchableOpacity>
      <AppBTN text={'Apply'} width={100} height={30} onPress={() => onChangeDate(getDateFormated(startDate), getDateFormated(endDate))} />
      <DatePicker
        minimumDate={getPriorDate(100)}
        maximumDate={new Date()}
        mode="date"
        modal
        open={showDatePicker}
        date={new Date()}
        onConfirm={(date) => {
          if (startOrEndDateMode)
            setStartDate(date);
          else {
            if (date < startDate)
              Alert.alert('Picked date should be after start date');
            else
              setEndDate(date);
          }
          setShowDatePicker(false);
        }}
        onCancel={() => {
          setShowDatePicker(false);
        }}
      />
    </View>
  );
}

