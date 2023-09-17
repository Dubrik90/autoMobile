import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const globalStyles = StyleSheet.create({
    button: {
        padding: wp('2%'),
        alignSelf: "flex-end",
        backgroundColor: '#b93b3b',
        margin: wp('2%'),
        borderRadius: wp('2%'),
        justifyContent: "center",
        alignItems: "center"
    }
});
