// ferramentas do castelo 
import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// chama a guardiã do castelo
import { AuthContext } from '../../../context/AuthContext';

// criar tela de login 
export default function LoginScreen() {
  
  // pergunto à guardiã como eu dou o crachá para o visitante
  const { setIsSignedIn } = useContext(AuthContext);

  // estados locais para usuário e senha
  const [username, setUsername] = useState(''); //nome do usuario que vai entrar no castelo
  const [password, setPassword] = useState(''); //criando autenticação do usuario para entrar no csatelo

  // monta tela (quando clicar, chama setSignedIn(true), dá o crachá, o visitante entra no Drawer)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Genesis-Tec Estufas 🍓</Text>

      <TextInput //estilo do texto do usuario que vai ter o cracha para entrar no castelo 
        style={styles.input}//estilo
        placeholder="Usuário"//nome
        value={username}
        onChangeText={setUsername} //chama o local
        autoCapitalize="none"
      />
      <TextInput //
        style={styles.input}//estilo
        placeholder="Senha"//nome
        value={password}//valor que passa par entender que é uma senha
        onChangeText={setPassword}//chama o local
        secureTextEntry
      />
      <Button 
        title="Fazer Login" 
        onPress={() => {
          // Aqui você pode implementar a autenticação real
          // Exemplo: chamar uma função de login passando username e password
          setIsSignedIn(true);
        }} 
      />

      {/* Botão de registro discreto */}
      <TouchableOpacity style={styles.registerContainer} onPress={() => { /* ação de registro futura */ }}>
        <Text style={styles.registerText}>Não tem uma conta? Registrar-se</Text>
      </TouchableOpacity>

      {/* Botões de autenticação social */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#fff', borderColor: '#4285F4', borderWidth: 1 }]}>
          <Text style={styles.socialText}>🔵 Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#fff', borderColor: '#000', borderWidth: 1 }]}>
          <Text style={styles.socialText}>❌ X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#fff', borderColor: '#000', borderWidth: 1 }]}>
          <Text style={styles.socialText}> Apple</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// estilizando a sala
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  registerContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  registerText: {
    color: '#4285F4',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 14,
    opacity: 0.8,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  socialText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
