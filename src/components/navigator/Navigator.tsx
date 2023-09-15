// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {AdsScreen} from '../../screens/AdsScreen';
// import {ScannerScreen} from '../../screens/ScannerScreen';
// import {LoginScreen} from '../../screens/LoginScreen';
// import {CarCard} from "../carCard/CarCard";
// import {useAppSelector} from "../../hooks/hooks";
// import {UserScreen} from "../../screens/UserScreen";
// import {useTheme} from "../../app/theme/provider/ThemeContext";
// import {darkStyles, lightStyles} from "../../style/styles";
//
// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
//
// const MainTabNavigator = () => {
//     const isAuthenticated = useAppSelector(state => state.user.isAuthenticated)
//     const {theme} = useTheme();
//     const styles = theme === 'light' ? lightStyles : darkStyles;
//
//     return (
//         <Tab.Navigator
//             screenOptions={{
//                 tabBarStyle: {
//                     height: '5%',
//                     paddingBottom: 20,
//                     backgroundColor: styles.container.backgroundColor, ...styles.text
//                 },
//                 tabBarLabelStyle: styles.text,
//                 headerStyle: {backgroundColor: styles.container.backgroundColor},
//                 headerTitleStyle: styles.text,
//             }}
//         >
//             <Tab.Screen
//                 name="Объявления"
//                 component={AdsScreen}
//                 options={{
//                     tabBarLabel: 'Объявления',
//                 }}
//             />
//             <Tab.Screen
//                 name="Scanner"
//                 component={!isAuthenticated ? LoginScreen : ScannerScreen}
//                 options={{
//                     tabBarLabel: 'Сканер',
//                 }}
//             />
//             <Tab.Screen
//                 name="Профиль пользователя"
//                 component={UserScreen}
//                 options={{
//                     tabBarLabel: 'Профиль',
//                 }}
//             />
//         </Tab.Navigator>
//     )
// }
//
//
// export const Navigator = () => (
//     <NavigationContainer>
//         <Stack.Navigator initialRouteName="MainTabs" screenOptions={{headerShown: false}}>
//             <Stack.Screen name="MainTabs" component={MainTabNavigator}/>
//             <Stack.Screen name="CarCard" component={CarCard} options={{
//                 headerShown: true,
//                 title: '',
//             }}/>
//         </Stack.Navigator>
//     </NavigationContainer>
// );
//
//
//

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from "@react-navigation/stack";
import {AdsScreen} from "../../screens/AdsScreen";
import {CarCard} from "../carCard/CarCard";
import {ScannerScreen} from "../../screens/ScannerScreen";
import {UserScreen} from "../../screens/UserScreen";
import {useAppSelector} from "../../hooks/hooks";
import {useTheme} from "../../app/theme/provider/ThemeContext";
import {darkStyles, lightStyles} from "../../style/styles";
import {LoginScreen} from "../../screens/LoginScreen";
import {AdsNavigator} from "../../navigator/AdsNavigator";


// const AdsStack = createStackNavigator();
// const AdsStackScreen = () => (
//     <AdsStack.Navigator>
//         <AdsStack.Screen
//             options={{
//                 headerShown: false,
//                 title: 'Объявления'
//             }}
//             name="Ads"
//             component={AdsScreen}
//         />
//         <AdsStack.Screen
//             options={{title: ''}}
//             name="Car"
//             component={CarCard}
//         />
//     </AdsStack.Navigator>
// );

// const Tab = createBottomTabNavigator();
// export const Navigator = () => {
//     const isAuthenticated = useAppSelector(state => state.user.isAuthenticated)
//     const {theme} = useTheme();
//     const styles = theme === 'light' ? lightStyles : darkStyles;
//
//     return (
//         <NavigationContainer>
//             <Tab.Navigator screenOptions={{
//                 tabBarStyle: {
//                     height: '5%',
//                     paddingBottom: 20,
//                     backgroundColor: styles.container.backgroundColor, ...styles.text
//                 },
//                 tabBarLabelStyle: styles.text,
//                 headerStyle: {backgroundColor: styles.container.backgroundColor},
//                 headerTitleStyle: styles.text,
//             }}>
//                 <Tab.Screen
//                     options={{
//                         title: 'Объявления'
//                     }}
//                     name="AdsMain"
//                     component={AdsNavigator}/>
//                 <Tab.Screen
//                     options={{
//                         title: 'Сканеры'
//                     }}
//                     name="Scanner"
//                     component={isAuthenticated ? ScannerScreen : LoginScreen}
//                 />
//                 <Tab.Screen
//                     options={{
//                         title: 'Профиль'
//                     }}
//                     name="Profile"
//                     component={UserScreen}
//                 />
//             </Tab.Navigator>
//         </NavigationContainer>
//     )
// }


