import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UserScreen} from "../screens/UserScreen";

const ProfileStack = createStackNavigator();

export const ProfileNavigator = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen
            name="ProfileNav"
            component={UserScreen}
            options={{
                headerShown: false,
            }}
        />
    </ProfileStack.Navigator>
);


