import { StyleSheet } from 'react-native';

export const lightStyles = StyleSheet.create({
    container: {
         flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        color: '#000',
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
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },

});

export const darkStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6b2e2e',
    },
    text: {
        color: '#fff',
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
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },

});
