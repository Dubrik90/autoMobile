import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import {getScanners} from "../app/slice/scanerSlice";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";

import {ModalWindow} from "../components/modalWindow/ModalWindow";
import {ResponseScannerDataType} from "../types/scanerTypes";

export const ScannerScreen = () => {
    // {navigation}: ScannerProps
    const dispatch = useAppDispatch()
    const scanners = useAppSelector(state => state.scanner.scanners)
    const loading = useAppSelector((state) => state.scanner.loading);
    const [isModalVisible, setModalVisible] = useState(false);

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
        <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.company}</Text>
            <Text>{`Модель: ${item.model}`}</Text>
            <Text>{`Год выпуска: ${item.yearFrom}-${item.yearTo}`}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={scanners}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                style={styles.container}
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


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        padding: 10,
        alignSelf: "flex-end",
        backgroundColor: '#b93b3b',
        margin: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
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
