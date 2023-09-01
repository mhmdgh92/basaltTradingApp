import { StyleSheet } from 'react-native';
import { heightPixel, widthPixel } from '../common/utils/PixelNormalization';

export const styles = StyleSheet.create({
    container: { alignItems: 'center', height: '100%', width: '100%' },
    row1View: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: heightPixel(60), width: '100%' }
});