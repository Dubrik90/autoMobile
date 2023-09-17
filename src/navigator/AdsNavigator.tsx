import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {AdsScreen} from "../screens/AdsScreen";
import {CarCard} from "../components/carCard/CarCard";


const AdsStack = createStackNavigator();

export const AdsNavigator = () => (
    <AdsStack.Navigator>
        <AdsStack.Screen
            name="Ads"
            component={AdsScreen}
            options={{
                headerShown: false,
                title: ''
            }}
        />
        <AdsStack.Screen
            name="Car"
            component={CarCard}
            options={{
                title: '',
            }}
        />
    </AdsStack.Navigator>
);
