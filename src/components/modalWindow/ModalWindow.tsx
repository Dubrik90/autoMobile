import React, {useState} from 'react';
import {Button, Modal, StyleSheet, TextInput, View} from "react-native";
import {ApdateScannerDataType} from "../../types/scanerTypes";
import {useAppDispatch} from "../../hooks/hooks";
import {addScanner} from "../../app/slice/scanerSlice";

interface AddScannerModalProps {
    onClose: (isClose: boolean) => void;
    isModalVisible: boolean;
}

export const ModalWindow = (props: AddScannerModalProps) => {
    const {
        onClose,
        isModalVisible,
    } = props

    const dispatch = useAppDispatch()
    const [newScannerData, setNewScannerData] = useState<ApdateScannerDataType>({
        company: '',
        scannerType: '',
        model: '',
        series: '',
        priceTo: 0,
    });

    const addScannerHandler = () => {
        dispatch(addScanner(newScannerData))

        setNewScannerData({
            company: '',
            scannerType: '',
            model: '',
            series: '',
            priceTo: 0,
        });

        onClose(false);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => onClose(false)}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TextInput
                        style={styles.input}
                        placeholder="Компания"
                        value={newScannerData.company}
                        onChangeText={(text) => setNewScannerData({ ...newScannerData, company: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Тип сканера"
                        value={newScannerData.scannerType}
                        onChangeText={(text) => setNewScannerData({ ...newScannerData, scannerType: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Модель"
                        value={newScannerData.model}
                        onChangeText={(text) => setNewScannerData({ ...newScannerData, model: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Серия"
                        value={newScannerData.series}
                        onChangeText={(text) => setNewScannerData({ ...newScannerData, series: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Цена"
                        value={newScannerData.priceTo === 0 ? '' : newScannerData.priceTo.toString()}
                        onChangeText={(text) => setNewScannerData({ ...newScannerData, priceTo: Number(text) })}
                        keyboardType="numeric"
                    />
                    <Button title="Добавить" onPress={addScannerHandler} />
                    <Button title="Отмена" onPress={() => onClose(false)} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    input: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#000",
        padding: 5,
        borderRadius: 10
    },
    modalContent: {
        flexDirection: "column",
        gap: 10,
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%',
    },
});
