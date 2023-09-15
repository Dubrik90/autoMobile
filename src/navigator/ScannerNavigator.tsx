import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScannerScreen} from "../screens/ScannerScreen";
import {LoginScreen} from "../screens/LoginScreen";
import {useAppSelector} from "../hooks/hooks";


const ScannerStack = createStackNavigator();

export const ScannerNavigator = () => {
    const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

    return (
        <ScannerStack.Navigator>
            <ScannerStack.Screen
                name="ScannerNav"
                component={isAuthenticated ? ScannerScreen : LoginScreen}
                options={{
                    headerShown: false
                }}
            />
        </ScannerStack.Navigator>
    )
};

