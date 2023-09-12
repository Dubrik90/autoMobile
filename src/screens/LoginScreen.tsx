import React, {useEffect, useState} from 'react';
import {Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import {AuthenticateProps} from "../api/api";
import {useNavigation} from "@react-navigation/native";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {authenticate} from "../app/slice/userSlice";

export const LoginScreen = () => {
    // {navigation}: LoginProps
    const dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector(state => state.user.isAuthenticated)
    const navigation = useNavigation();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

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
            // @ts-ignore
            navigation.navigate('MainTabs');
        }
    }, [isAuthenticated, navigation]);


    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={handleEmptyAreaPress}>
                <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Text style={styles.label}>Номер телефона</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Введите номер телефона"
                        keyboardType="phone-pad"
                        onChangeText={(text) => setPhone(text)}
                        value={phone}
                    />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleEmptyAreaPress}>
                <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                    <Text style={styles.label}>Пароль</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Введите пароль"
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    label: {
        textAlign: 'left',
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
});
