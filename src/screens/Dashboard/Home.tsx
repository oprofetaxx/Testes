//coração do castelo 
import React, { useContext } from "react";

//blocos de construção do castelo 
import { View , Text, Button, StyleSheet} from 'react-native';

//chama a guardiã
import { AuthContext } from '../../context/AuthContext';


//manual de decoração da sala
const styles = StyleSheet.create({
  container:{ 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
//fontes
  text :{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20, 
  },
});

//criando salas e contexto
export default function DashboardScreen(){
  const { setIsSignedIn } = useContext(AuthContext);

  //monta a sala de decoração
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>Tela de Dashboard</Text>
    </View>

  );
}



