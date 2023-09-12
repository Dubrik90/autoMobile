import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AdsScreen} from '../../screens/AdsScreen';
import {ScannerScreen} from '../../screens/ScannerScreen';
import {LoginScreen} from '../../screens/LoginScreen';
import {CarCard} from "../carCard/CarCard";
import {useAppSelector} from "../../hooks/hooks";
import {Button, View, Text} from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    const isAuthenticated = useAppSelector(state => state.user.isAuthenticated)

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Объявления"
                component={AdsScreen}
                options={{
                    tabBarLabel: 'Объявления',
                    tabBarStyle: {height: '5%', paddingBottom: 20},
                }}
            />
            <Tab.Screen
                name="Scanner"
                component={!isAuthenticated ? LoginScreen: ScannerScreen}
                options={{
                    tabBarLabel: 'Сканер',
                    tabBarStyle: {height: '5%', paddingBottom: 20},
                }}
            />
        </Tab.Navigator>
    )
}

export const Navigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="MainTabs" screenOptions={{headerShown: false}} >
            <Stack.Screen name="MainTabs" component={MainTabNavigator}/>
            <Stack.Screen name="CarCard" component={CarCard}/>
        </Stack.Navigator>
    </NavigationContainer>
);




