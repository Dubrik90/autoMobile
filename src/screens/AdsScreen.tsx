import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from "react-native";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {getCars} from "../app/slice/carsSlice";
import {CarDetail} from "../components/carDetail/CarDetail";
import {useTheme} from "../app/theme/provider/ThemeContext";
import {darkStyles, lightStyles} from "../style/styles";


export const AdsScreen = () => {
    // {navigation}: AdsProps
    const {theme} = useTheme()
    const dispatch = useAppDispatch();
    const cars = useAppSelector((state) => state.car.cars);
    const loading = useAppSelector((state) => state.car.loading);
    const error = useAppSelector((state) => state.car.error);

    const [currentPage, setCurrentPage] = useState(1);

    const handleLoadMore = useCallback(() => {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        dispatch(getCars(nextPage));
    }, [currentPage, dispatch]);


    useEffect(() => {
        dispatch(getCars(currentPage));
    }, [dispatch]);

    const styles = theme === 'light' ? lightStyles : darkStyles;


    return (
        <View style={styles.container}>
            {error && (
                <View style={styles.container}>
                    <Text style={styles.text}>{error}</Text>
                </View>
            )}
            {loading && (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color={theme === 'light' ? 'black' : 'white'}/>
                </View>
            )}
            <FlatList
                data={cars}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <CarDetail car={item}/>}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.1}
              //  style={styles.container}
            />
        </View>
    );
};


