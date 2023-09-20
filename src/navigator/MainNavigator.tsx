import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScannerNavigator} from './ScannerNavigator';
import {useTheme} from '../app/theme/provider/ThemeContext';
import {darkStyles, lightStyles} from '../style/styles';
import {AdsNavigator} from "./AdsNavigator";
import {ProfileNavigator} from "./ProfileNavigator";

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
    const {theme} = useTheme();
    const styles = theme === 'light' ? lightStyles : darkStyles;

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                      //  height: '5%',
                        paddingBottom: 20,
                        height: 50,
                        backgroundColor: styles.container.backgroundColor,
                        ...styles.text,
                    },
                    headerShown: false,
                    tabBarLabelStyle: styles.text,
                    headerStyle: {backgroundColor: styles.container.backgroundColor},
                    headerTitleStyle: styles.text,
                }}
            >
                <Tab.Screen
                    name="AdsMain"
                    component={AdsNavigator}
                    options={{
                     //   headerShown: false,
                        title: 'Объявления'
                }}
                />
                <Tab.Screen
                    name="Scanner"
                    component={ScannerNavigator}
                    options={{title: 'Сканеры'}}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileNavigator}
                    options={{title: 'Профиль'}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

