import React, {useState} from 'react';
import {Pressable, StyleSheet, Switch, Text, View} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {useTheme} from "../app/theme/provider/ThemeContext";
import {darkStyles, lightStyles} from "../style/styles";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {logoutUser} from "../app/slice/userSlice";

export const UserScreen = ({navigation}) => {
    const {theme, toggleTheme} = useTheme();
    const [themeValue, setThemeValue] = useState(theme === 'dark');
    const user = useAppSelector(state => state.user.user)
    const dispatch = useAppDispatch()
    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        toggleTheme();
        setThemeValue(newTheme === 'dark');
    };

    const styles = theme === 'light' ? lightStyles : darkStyles;
    const themeName = theme === 'light' ? 'темную' : 'светлую';

    const onPressLogoutHandler = () => {
        dispatch(logoutUser());
    }
    const onPressLoginHandler = () => {
        navigation.navigate('Scanner');
    }


    return (
        <View style={styles.container}>
            <View style={userStyles.switch}>
                <Text style={styles.text}>Поменять тему на {themeName}</Text>
                <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={themeValue ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={changeTheme}
                    value={themeValue}
                />
            </View>
            <View>
                <Pressable
                    onPress={user ? onPressLogoutHandler : onPressLoginHandler}
                    style={[styles.button, userStyles.btn]}
                >
                    <Text>{user ? 'Logout' : 'Login'}</Text>
                </Pressable>
            </View>
        </View>
    );
};

const userStyles = StyleSheet.create({
    switch: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: wp('4%'),
    },
    btn: {
        width: wp('30%'),
        alignSelf: "flex-start",
        marginVertical: hp('2%'),
    }
})

