import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
    const dispatch = useDispatch();
    const { reduxCounter } = useSelector((store) => store.HomeReducer);

    const onAdd = () => {
        dispatch({ type: "INCREMENT", payload: { reduxCounter: reduxCounter + 1 } })
    }

    const onSub = () => {
        dispatch({ type: "DECREMENT" });
    }

    const onReset = () => {
        dispatch({ type: "RESET" });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={onAdd}>
                <Text>{"Add"}</Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}>{reduxCounter}</Text>
            <TouchableOpacity style={styles.btn} onPress={onSub}>
                <Text>{"Sub"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={onReset}>
                <Text>{"RESET"}</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
    },
    textStyle: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
    },
    btn: {
        height: 40,
        width: 100,
        marginVertical: 20,
        backgroundColor: 'aqua'
    }
});

