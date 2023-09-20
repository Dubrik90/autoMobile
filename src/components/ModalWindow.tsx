import React, { useState } from 'react';
import {
    Button,
    Modal,
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
} from 'react-native';
import { ApdateScannerDataType } from '../types/scanerTypes';
import { useAppDispatch } from '../hooks/hooks';
import { addScanner } from '../app/slice/scanerSlice';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface AddScannerModalProps {
    onClose: (isClose: boolean) => void;
    isModalVisible: boolean;
}

export const ModalWindow = (props: AddScannerModalProps) => {
    const { onClose, isModalVisible } = props;

    const dispatch = useAppDispatch();
    const [newScannerData, setNewScannerData] = useState<ApdateScannerDataType>({
        company: '',
        scannerType: '',
        model: '',
        series: '',
        priceTo: 0,
    });

    const addScannerHandler = () => {
        dispatch(addScanner(newScannerData));

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
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => onClose(false)}>
                <KeyboardAvoidingView
                    style={styles.modalContainer}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <TextInput
                                style={styles.input}
                                placeholder="Компания"
                                value={newScannerData.company}
                                onChangeText={(text) =>
                                    setNewScannerData({ ...newScannerData, company: text })
                                }
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Тип сканера"
                                value={newScannerData.scannerType}
                                onChangeText={(text) =>
                                    setNewScannerData({ ...newScannerData, scannerType: text })
                                }
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Модель"
                                value={newScannerData.model}
                                onChangeText={(text) =>
                                    setNewScannerData({ ...newScannerData, model: text })
                                }
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Серия"
                                value={newScannerData.series}
                                onChangeText={(text) =>
                                    setNewScannerData({ ...newScannerData, series: text })
                                }
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Цена"
                                value={newScannerData.priceTo === 0 ? '' : newScannerData.priceTo.toString()}
                                onChangeText={(text) =>
                                    setNewScannerData({ ...newScannerData, priceTo: Number(text) })
                                }
                                keyboardType="numeric"
                            />
                            <Button title="Добавить" onPress={addScannerHandler} />
                            <Button title="Отмена" onPress={() => onClose(false)} />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'flex-end',
    },
    input: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        padding: wp('1%'),
        height: hp('4%'),
        borderRadius: wp('2%'),
    },
    modalContent: {
        flexDirection: 'column',
        gap: hp('1%'),
        backgroundColor: 'white',
        paddingBottom: hp('3%'),
        paddingLeft: wp('4%'),
        paddingRight: wp('4%'),
        paddingTop: hp('4%'),
        borderTopLeftRadius: wp('5%'),
        borderTopRightRadius: wp('5%'),
        width: '100%',
    },
});
