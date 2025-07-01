
//coração do costelo
import React from "react";
//porta principal do castelo 
import { NavigationContainer } from '@react-navigation/native';
// a porta que decide onde o usuario entra
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//pergunta para a guardiã / chama a guardiã
import { useIsSignedIn,AuthProvider } from "./src/context/AuthContext";

//chama a tela de login(recepção)
import SignInScreen from './src/screens/Auth/Login';
//chama o drawer,Mapa para ver as salas com caltelo 
import DrawerNavigator from './src/navigation/DrawerNavigator';


//criar porta principal do castelo é ele que decide o login ou drawer
const Stack = createNativeStackNavigator();

//parte que a guardian escolhe para onde a pessoa vai
function RootNavigation() {
  const isSignedIn = useIsSignedIn(); //pergunta para a guardiã

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isSignedIn ? (
          <Stack.Screen name="Main" component={DrawerNavigator} />
        ) : (
          <Stack.Screen name="SignIn" component={SignInScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// agora o castelo todo está envolto pela guardiã
export default function App() {
  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  );
}