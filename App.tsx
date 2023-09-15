import React from 'react';
import {Provider} from "react-redux";
import {store} from "./src/app/store/store";
import {ThemeProvider} from "./src/app/theme/provider/ThemeContext";
import {MainNavigator} from "./src/navigator/MainNavigator";


export default function App() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <MainNavigator/>
            </ThemeProvider>
        </Provider>
    );
}

