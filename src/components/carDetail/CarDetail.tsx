import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {CarType} from "../../types/types";
import {useNavigation} from "@react-navigation/native";
import {useTheme} from "../../app/theme/provider/ThemeContext";
import {darkStyles, lightStyles} from "../../style/styles";

type CarDetailProps = {
    car: CarType
}
export const CarDetail = React.memo(({car}: CarDetailProps) => {
    const navigation = useNavigation();
    const {theme} = useTheme()
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
        navigation.navigate('Car', {car})
    }
    const styles = theme === 'light' ? lightStyles : darkStyles;

    return (
        <View style={[styleCar.container]}>
            <TouchableOpacity onPress={onPressHandler}>
                <Image
                    source={imgLink ? {uri: imgLink} : {uri: 'https://w.forfun.com/fetch/28/2892a3887bd226b3cdd24742aa0a48b5.jpeg'}}
                    style={styles.image}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{company}</Text>
                    <Text style={styles.text}>{`Год выпуска: ${year}`}</Text>
                    <Text style={styles.text}>{`Объем двигателя: ${engineVolume}`}</Text>
                    <Text style={styles.text}>{`Тип двигателя: ${engineType}`}</Text>
                    <Text style={styles.text}>{`Пробег: ${mileage} км`}</Text>
                    <Text style={styles.text}>{`Цена: ${price} руб`}</Text>
                    <Text style={styles.text}>{`Город: ${sity}`}</Text>
                    <Text style={styles.text}>{`Дата: ${date || 'Дата не указана'}`}</Text>
                    <Text style={styles.text}>{`Описание: ${description || 'Описание отсутствует'}`}</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
});

const styleCar = StyleSheet.create({
    container: {
        borderColor: 'gray',
        paddingLeft: 16,
        paddingRight: 16,
        marginBottom: 16,
    },
});

