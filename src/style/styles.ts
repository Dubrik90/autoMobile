import {Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const {height} = Dimensions.get('screen');

export const lightStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        color: '#000',
    },
    image: {
        maxWidth: wp('100%'),
        height: hp('30%'),
        objectFit: "cover",
    },
    infoContainer: {
        flex: 1,
    },
    title: {
        color: 'black',
        fontSize: RFValue(18, height),
        fontWeight: 'bold',
        marginBottom: hp('0.5%'),
        textAlign: "center",
    },
    titleMain: {
        color: 'black',
        fontSize: RFValue(24, height),
        fontWeight: 'bold',
        marginBottom: hp('0.5%'),
        textAlign: "center",
    },
    button: {
        padding: wp('1%'),
        alignSelf: "flex-end",
        backgroundColor: '#e51111',
        margin: wp('1%'),
        borderRadius: wp('1%'),
        justifyContent: "center",
        alignItems: "center"
    }
});

export const darkStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6b2e2e',
    },
    text: {
        color: '#fff',
    },
    image: {
        maxWidth: wp('100%'),
        height: hp('30%'),
        objectFit: "cover",
    },
    infoContainer: {
        flex: 1,
    },
    title: {
        color: 'white',
        fontSize: RFValue(18, height),
        fontWeight: 'bold',
        marginBottom: hp('0.5%'),
    },
    titleMain: {
        color: '#fff',
        fontSize: RFValue(24, height),
        fontWeight: 'bold',
        marginBottom: hp('0.5%'),
        textAlign: "center",
    },
    button: {
        padding: wp('1%'),
        alignSelf: "flex-end",
        backgroundColor: '#70e80c',
        margin: wp('1%'),
        borderRadius: wp('1%'),
        justifyContent: "center",
        alignItems: "center"
    }
});
