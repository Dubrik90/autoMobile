import React, {useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AdsScreen} from '../../screens/AdsScreen';
import {ScannerScreen} from '../../screens/ScannerScreen';
import {LoginScreen} from '../../screens/LoginScreen';
import {CarCard} from "../carCard/CarCard";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {Button, View, Text, Image} from "react-native";
import {UserScreen} from "../../screens/UserScreen";
import {useTheme} from "../../app/theme/provider/ThemeContext";
import {darkStyles, lightStyles} from "../../style/styles";
import {loadUserFromStorage} from "../../app/slice/userSlice";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    const isAuthenticated = useAppSelector(state => state.user.isAuthenticated)
    const { theme } = useTheme();
    const styles = theme === 'light' ? lightStyles : darkStyles;

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {height: '5%', paddingBottom: 20, backgroundColor: styles.container.backgroundColor, ...styles.text },
                tabBarLabelStyle: styles.text,
                headerStyle: {backgroundColor: styles.container.backgroundColor},
                headerTitleStyle: styles.text,
            }}
        >
            <Tab.Screen
                name="Объявления"
                component={AdsScreen}
                options={{
                    tabBarLabel: 'Объявления',
                }}
            />
            <Tab.Screen
                name="Scanner"
                component={!isAuthenticated ? LoginScreen: ScannerScreen}
                options={{
                    tabBarLabel: 'Сканер',
                }}
            />
            <Tab.Screen
                name="Профиль пользователя"
                component={UserScreen}
                options={{
                    tabBarLabel: 'Профиль',
                }}
            />
        </Tab.Navigator>
    )
}


export const Navigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="MainTabs" screenOptions={{headerShown: false}} >
            <Stack.Screen name="MainTabs" component={MainTabNavigator}/>
            <Stack.Screen name="CarCard" component={CarCard} options={{
                headerShown: true,
                title: '',
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export const Info = ({route}) => {
    const { name } = route.params;

    return (
            <View >
                <Text >{name}</Text>

            </View>
    );
};



