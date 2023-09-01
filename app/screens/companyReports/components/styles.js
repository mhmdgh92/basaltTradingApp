import { StyleSheet } from 'react-native';
import { heightPixel, widthPixel } from '../../common/utils/PixelNormalization';

export const itemDataStyle = StyleSheet.create({
  container: { margin: widthPixel(3) },
  titleText: { fontWeight: 'bold' },
});

export const chartViewStyle = StyleSheet.create({
  container: { marginTop: '3%', marginLeft: widthPixel(15), height: heightPixel(300), alignItems: 'center', width: '90%', elevation: 1, flexDirection: 'row' },
  contentInset: { top: 20, bottom: 20 },
});

export const symbolStatisticsStyle = StyleSheet.create({
  container: { marginTop: '3%', height: heightPixel(200), width: '100%', elevation: 1, flexDirection: 'row' },
  detailsCol: { alignContent: 'flex-start', height: '100%', width: '40%' },
});

export const chartTypeStyle = StyleSheet.create({
  container: { marginTop: '2%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: heightPixel(60), width: '100%' },
  btnStyle: { borderWidth: 1, padding: '2.5%', borderColor: 'grey', borderRadius: 17 }
});

export const chartPricesTypeStyle = StyleSheet.create({
  container: { marginTop: '3%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: heightPixel(60), width: '100%' },
  btnStyle: { borderWidth: 1, padding: '2.5%', borderColor: 'grey', borderRadius: 17 }
});