import React from 'react';
import {View, Text, StyleSheet } from 'react-native';


const style = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});


export default function IrrigationScreen() {
    return (
        <View style = {style.container}>
            <Text style = {style.text}> Tela de Irrigação </Text>
        </View>

    );
        

 }

