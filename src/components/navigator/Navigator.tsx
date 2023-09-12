import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AdsScreen} from '../../screens/AdsScreen';
import {ScannerScreen} from '../../screens/ScannerScreen';
import {LoginScreen} from '../../screens/LoginScreen';
import {CarCard} from "../carCard/CarCard";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
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
            component={ScannerScreen}
            options={{
                tabBarLabel: 'Сканер',
                tabBarStyle: {height: '5%', paddingBottom: 20},
            }}
        />
    </Tab.Navigator>
);


export const Navigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="MainTabs" component={MainTabNavigator}/>
            <Stack.Screen name="CarCard" component={CarCard} />
        </Stack.Navigator>
    </NavigationContainer>
);
