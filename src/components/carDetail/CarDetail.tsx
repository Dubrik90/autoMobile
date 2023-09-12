import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {CarType} from "../../types/types";
import {useNavigation} from "@react-navigation/native";

type CarDetailProps = {
    car: CarType
}
export const CarDetail = ({car}: CarDetailProps) => {
    const navigation = useNavigation();
    const {
        company,
        dateCreatedUtc,
        engineVolume,
        description,
        imgLink,
        link,
        mileage,
        model,
        price,
        sity,
        year,
        date,
        id,
        engineType,
    } = car

    const onPressHandler = () => {
        // @ts-ignore
        navigation.navigate('CarCard', {car})
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPressHandler}>
                <Image
                    source={imgLink ? {uri: imgLink} : {uri: 'https://w.forfun.com/fetch/28/2892a3887bd226b3cdd24742aa0a48b5.jpeg'}}
                    style={styles.image}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{company}</Text>
                    <Text>{`Год выпуска: ${year}`}</Text>
                    <Text>{`Объем двигателя: ${engineVolume}`}</Text>
                    <Text>{`Тип двигателя: ${engineType}`}</Text>
                    <Text>{`Пробег: ${mileage} км`}</Text>
                    <Text>{`Цена: ${price} руб`}</Text>
                    <Text>{`Город: ${sity}`}</Text>
                    <Text>{`Дата: ${date || 'Дата не указана'}`}</Text>
                    <Text>{`Описание: ${description || 'Описание отсутствует'}`}</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        padding: 16,
        marginBottom: 16,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 16,
    },
    infoContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});

