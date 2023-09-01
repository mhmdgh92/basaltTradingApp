import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNetInfo } from "@react-native-community/netinfo";
import { AppText } from './AppText';
export const AppNetworkChecker = () => {

  const netInfo = useNetInfo();

  return (
    !netInfo.isConnected || !netInfo.isInternetReachable ? <View style={{ height: '8%', width: '100%', backgroundColor: 'brown', position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
      <AppText color={'white'} size={25} text={'No Internet Connection!'} />
    </View> : null
  );
}