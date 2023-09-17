import React from 'react';
import {Provider} from "react-redux";
import {store} from "./src/app/store/store";
import {ThemeProvider} from "./src/app/theme/provider/ThemeContext";
import {MainNavigator} from "./src/navigator/MainNavigator";
import {Platform, StatusBar, StyleSheet} from "react-native";


export default function App() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <MainNavigator/>
                <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}/>
            </ThemeProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
