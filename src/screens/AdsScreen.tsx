import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from "react-native";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {getCars} from "../app/slice/carsSlice";
import {CarDetail} from "../components/carDetail/CarDetail";


export const AdsScreen = () => {
    // {navigation}: AdsProps
    const dispatch = useAppDispatch();
    const cars = useAppSelector((state) => state.car.cars);
    const loading = useAppSelector((state) => state.car.loading);
    const error = useAppSelector((state) => state.car.error);

    const [currentPage, setCurrentPage] = useState(1);

    const handleLoadMore = () => {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        dispatch(getCars(nextPage));
    };


    useEffect(() => {
        dispatch(getCars(currentPage));
    }, [dispatch]);


    if (error) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{error}</Text>
            </View>
        );
    }

    return (
        <View style={{flex: 1}}>
            {
                loading && <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size="large"/>
                </View>
            }
            <FlatList
                data={cars}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <CarDetail car={item}/>
                )}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.1}
            />
        </View>
    );
};


