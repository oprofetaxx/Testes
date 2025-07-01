//pedreiros do castelo
import React from 'react';
//decoradores para montar as salas
import { View, Text, StyleSheet } from 'react-native';


//pintar as paredes de branco e centraliza a placa no meio da sala 
const styles = StyleSheet.create ({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',

    },
    text:{
        fontSize: 20,
        fontWeight:'bold',
    },
});

//construindo sala de

export default function ReportsScreen(){
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Tela de Reclamação </Text>
        </View>
    );


}

// o estylista pinta as paredes de branco e centraliza no meio da sala
// apos isso agora vamos construir o app.tsx para conetar tudo 







