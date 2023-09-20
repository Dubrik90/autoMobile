import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AdsScreen} from "../screens/AdsScreen";
import {CarCard} from "../components/CarCard";
import {useAppSelector} from "../hooks/hooks";

const AdsStack = createStackNavigator();

export const AdsNavigator = () => {
    const activeCar = useAppSelector(state => state.car.activeCar)
    const activeId = activeCar ? activeCar.id : '';

    return (

        <AdsStack.Navigator>
            <AdsStack.Screen
                name="Ads"
                component={AdsScreen}
                options={{
                    headerShown: false,
                    // title: ''
                }}
            />
            <AdsStack.Screen
                name="Car"
                component={CarCard}
                options={{
                    title: `объявление ${activeId}`,
                }}
            />
        </AdsStack.Navigator>
    )
};
