import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import {getScanners} from "../app/slice/scanerSlice";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";

import {ModalWindow} from "../components/modalWindow/ModalWindow";
import {ResponseScannerDataType} from "../types/scanerTypes";
import {useNavigation} from "@react-navigation/native";
import {useTheme} from "../app/theme/provider/ThemeContext";
import {darkStyles, lightStyles} from "../style/styles";

export const ScannerScreen = ({navigation}: any) => {
    const dispatch = useAppDispatch()
    const scanners = useAppSelector(state => state.scanner.scanners)
    const loading = useAppSelector((state) => state.scanner.loading);
    const [isModalVisible, setModalVisible] = useState(false);
    const isAuthenticated = useAppSelector(state => state.user.isAuthenticated)
    const { theme } = useTheme();
    const styles = theme === 'light' ? lightStyles : darkStyles;

    useEffect(() => {
        if (!isAuthenticated) {
            return navigation.navigate("Login")
        }

    }, [isAuthenticated, navigation]);

    useEffect(() => {
        dispatch(getScanners())
    }, [])

    const onPressFunction = () => {
        setModalVisible(true)
    }
    const onCloseModal = () => {
        setModalVisible(false)
    }

    if (loading) {
        return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large"/>
        </View>
    }

    const renderItem = ({item}: { item: ResponseScannerDataType }) => (
        <View style={scannerStyles.itemContainer}>
            <Text style={scannerStyles.title}>{item.company}</Text>
            <Text>{`Модель: ${item.model}`}</Text>
            <Text>{`Год выпуска: ${item.yearFrom}-${item.yearTo}`}</Text>
        </View>
    );

    return (
        <View style={scannerStyles.container}>
            <FlatList
                data={scanners}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                style={scannerStyles.container}
            />
            <Pressable
                style={styles.button}
                onPress={onPressFunction}>
                <Text>Добавить сканер</Text>
            </Pressable>
            <ModalWindow
                isModalVisible={isModalVisible}
                onClose={onCloseModal}
            />
        </View>
    );
};


const scannerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
