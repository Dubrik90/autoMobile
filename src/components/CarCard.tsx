import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {CarType} from "../types/types";
import {RFValue} from "react-native-responsive-fontsize";
import {height} from "../style/styles";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
interface CarCardProps {
    route: {
        params: {
            car: CarType;
        };
    };
}

export const CarCard: React.FC<CarCardProps> = ({route}) => {
    const {car} = route.params;
    const {
        id,
        company,
        model,
        year,
        engineVolume,
        engineType,
        mileage,
        price,
        sity,
        date,
        link,
        imgLink,
        description,
    } = car;

    return (
        <View style={styles.container}>
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
    },
    image: {
        width: wp('100'),
        height: hp('40'),
        marginBottom: hp('2'),

    },
    infoContainer: {
        flex: 1,
    },
    title: {
        fontSize: RFValue(18, height),
        fontWeight: 'bold',
        marginBottom: hp('1'),
    },
});
