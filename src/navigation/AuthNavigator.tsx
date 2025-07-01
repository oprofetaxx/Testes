//ingredientes
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //construtor de 'portas do castelo' rotas
import { useIsSignedIn } from '../context/AuthContext'; //é a guardiã que vai dizer se a pessoa tem crachá
import HomeScreen from '../screens/Dashboard'; //salão principal
import SignInScreen from '../screens/Auth/Login'; // Recepção

const Stack = createNativeStackNavigator(); //stack Navigator quem vai controlar as portas que podem abrir(telas que podem ser exibidas)

export default function AuthNavigator() { //mostra as portas do castelo 
    
    //pergunto para a guardiã se o usuário está logado 
    const isSignedIn = false; //guardiã, essa pessoa tem crachá

    return (//Estou dizendo o que a função AuthNavigator vai devolver (mostrar)

        //porta do castelo aberta
        <Stack.Navigator>  

            {isSignedIn ? ( // SE (a guardiã disse que a pessoa tem crachá )
            
                // então mostro a porta Home
                <Stack.Screen name="Home" component={HomeScreen} />

            ) : ( // Caso Contrário (a guardiã disse que não tem crachá)
        
                //Mostro a porta de Login (Recepção)
                <Stack.Screen
                    name="SignIn" // corrigido
                    component={SignInScreen} // corrigido
                    options={{ title: 'Sign in' }}
                />
            )}

        </Stack.Navigator>
    );        
}
