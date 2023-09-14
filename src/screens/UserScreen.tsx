import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from "react-native";
import {useTheme} from "../app/theme/provider/ThemeContext";
import {darkStyles, lightStyles} from "../style/styles";

export const UserScreen = () => {
    const { theme, toggleTheme } = useTheme();
    const [themeValue, setThemeValue] = useState(theme === 'dark');

    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        toggleTheme();
        setThemeValue(newTheme === 'dark');
    };

    const styles = theme === 'light' ? lightStyles : darkStyles;

    const themeName = theme === 'light' ? 'темную' : 'светлую';

    return (
        <View style={styles.container}>
            <View style={userStyles.switch}>
                <Text style={styles.text}>Поменять тему на {themeName}</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={themeValue ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={changeTheme}
                    value={themeValue}
                />
            </View>
            <View>
                <Text>Вы </Text>
            </View>
        </View>
    );
};

const userStyles = StyleSheet.create({
    switch: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    }
})

