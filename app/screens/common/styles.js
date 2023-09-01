import { StyleSheet } from 'react-native';
import { fontPixel, heightPixel, widthPixel, normalize } from './utils/PixelNormalization';
const GLOBAL = require('./Globals');

export const appImageStyle = (props) => StyleSheet.create({
    container: [{
        alignSelf: 'center',
        marginTop: heightPixel(props.marginTop ? props.marginTop : 0),
        width: widthPixel(props.width ? props.width : 320),
        height: heightPixel(props.height ? props.height : 75)
    }, { ...props.style }]
});


export const appBTNStyle = (props) => StyleSheet.create({
    container:
        [{
            marginTop: heightPixel(props.marginTop ? props.marginTop : 0), height: props.height ? props.height : heightPixel(52)
            , width: props.width ? props.width : widthPixel(300),
            borderColor: props.borderColor ? props.borderColor : 'transparent'
            , borderWidth: normalize(props.borderWidth ? props.borderWidth : 0)
            , borderRadius: normalize(props.borderRadius ? props.borderRadius : 50),
            alignSelf: 'center', justifyContent: 'center',
            alignItems: 'center', backgroundColor: props.color ? props.color : GLOBAL.Color.c1
        }, [{ ...props.style }]],
    textStyle: {
        textAlign: 'center', color: props.textColor ? props.textColor : GLOBAL.Color.white,
        fontFamily: props.fontFamily ? props.fontFamily : "Montserrat-Bold",
        fontSize: normalize(props.textSize ? props.textSize : 16)
    }
});

// Flat List
export const appListStyle = (props) => StyleSheet.create({
    oneColContainer: [{ height: heightPixel(700), width: '100%' }, { ...props.style }],
    twoColContainer: [{ height: heightPixel(700), width: widthPixel(320) }, { ...props.style }]
});


export const appIconStyle = (props) => StyleSheet.create({
    container: [{ alignItems: 'center', justifyContent: 'center' }],
    innerIcon: {}
});

export const appLoaderStyle = StyleSheet.create({
    container: { flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }
});

export const appTextStyle = (props) => StyleSheet.create({
    container: [{ justifyContent: 'center', backgroundColor: props.backgroundColor ? props.backgroundColor : 'transparent' }, { ...props.style }],
    textStyle: [{
        textAlignVertical: 'center', borderColor: props.borderColor ? props.borderColor : 'white',
        borderWidth: props.borderWidth ? props.borderWidth : 0,
        borderRadius: normalize(props.borderRadius ? props.borderRadius : 0),
        textDecorationLine: props.crossed ? 'line-through' : 'none',
        textDecorationStyle: props.textDecorationStyle ? props.textDecorationStyle : 'solid',
        width: props.width ? widthPixel(props.width) : 'auto', margin: normalize(props.margin ? props.margin : 0),
        marginRight: heightPixel(props.marginRight ? props.marginRight : 0),
        marginTop: heightPixel(props.marginTop ? props.marginTop : 0), marginBottom: heightPixel(props.marginBottom ? props.marginBottom : 0), textAlign: props.textAlign ? props.textAlign : 'center',
        height: props.height ? heightPixel(props.height) : 'auto',
        color: props.color ? props.color : GLOBAL.Color.c3,
        fontFamily: props.fontFamily ? props.fontFamily : "Montserrat-Bold",
        fontSize: fontPixel(props.size ? props.size : 14)
    }, { ...props.textStyle }]
});


export const appTopBarStyle = StyleSheet.create({
    container: {
        width: '100%', height: heightPixel(66),
        flexDirection: 'row', backgroundColor: GLOBAL.Color.c1
    },
    leftView: { justifyContent: 'center', alignItems: 'center', flex: 1 },
    textStyle: { justifyContent: 'center', alignItems: 'center', flex: 5 },
    rightView: { justifyContent: 'center', alignItems: 'center', flex: 1 },
});