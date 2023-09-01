import { StyleSheet } from 'react-native';
import { heightPixel, widthPixel } from '../../common/utils/PixelNormalization';

export const companyItemStyle = StyleSheet.create({
  container: {
    elevation: 5, backgroundColor: 'aliceblue', margin: widthPixel(8),
    height: heightPixel(120), justifyContent: 'space-between', flexDirection: 'row'
  },
  imgAndTitleRow: { flexDirection: 'row' },
  titleText: { fontWeight: 'bold' }
});