import React, {useEffect, useState} from 'react';
import {Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import {AuthenticateProps} from "../api/api";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {authenticate} from "../app/slice/userSlice";
import {useTheme} from "../app/theme/provider/ThemeContext";
import {darkStyles, height, lightStyles} from "../style/styles";
import {RFValue} from "react-native-responsive-fontsize";

export const LoginScreen = ({navigation}) => {
    // {navigation}: LoginProps
    const dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector(state => state.user.isAuthenticated)
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const {theme} = useTheme();
    const styles = theme === 'light' ? lightStyles : darkStyles;

    const handleLogin = () => {
        const authData: AuthenticateProps = {
            phone: phone,
            password: password,
        };
        dispatch(authenticate(authData));
    };

    const handleEmptyAreaPress = () => {
        Keyboard.dismiss();
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigation.navigate('Scanner');
        }
    }, [isAuthenticated, navigation]);


    return (
        <View style={[styles.container, loginStyle.container]}>
            <TouchableWithoutFeedback onPress={handleEmptyAreaPress}>
                <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Text style={[styles.text, loginStyle.label]}>Номер телефона</Text>
                    <TextInput
                        style={[styles.text, loginStyle.input]}
                        placeholder="Введите номер телефона"
                        placeholderTextColor={styles.text.color}
                        keyboardType="phone-pad"
                        onChangeText={(text) => setPhone(text)}
                        value={phone}
                    />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleEmptyAreaPress}>
                <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                    <Text style={[styles.text, loginStyle.label]}>Пароль</Text>
                    <TextInput
                        style={loginStyle.input}
                        placeholder="Введите пароль"
                        placeholderTextColor={styles.text.color}
                        secureTextEntry
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Button title="Войти" onPress={handleLogin}/>
        </View>
    );
};


export const loginStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: wp('4%'),
        justifyContent: 'center',
    },
    label: {
        textAlign: 'left',
        fontSize: RFValue(16, height),
        marginBottom: hp('1%'),
    },
    input: {
        width: '100%',
        height: hp('5%'),
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: hp('2%'),
        paddingHorizontal: wp('2%'),
    },
});
