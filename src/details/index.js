import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

export default function Details() {
    const { name, age } = useSelector((store) => store.DetailsReducer);
    const { reduxCounter } = useSelector((store) => store.HomeReducer);

    return (
        <View style={styles.container}>
            <Text>{"Details"}</Text>
            <Text>{name}</Text>
            <Text>{age}</Text>
            <Text>{reduxCounter}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
});

