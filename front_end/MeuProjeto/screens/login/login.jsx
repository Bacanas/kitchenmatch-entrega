import React, { useState } from 'react';
import { View, Text, Image, TextInput, Pressable, Alert } from 'react-native';
import { estilera } from "./stylelogin";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.1.67:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          senha: senha,
        }),
      });

     
      if (response.status == 200) {
        const json = await response.json();
        console.log(json)
        // Login bem-sucedido
        Alert.alert('Login', 'Login realizado com sucesso!');
        // Navegue para outra tela se necessário
        // navigation.navigate('OutraTela');
      } 
      if(response.status == 204){
        Alert.alert('Ops...', 'Login ou senha incorreta');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro de conexão');
    }
  };

  return (
    <View style={estilera.divgeral}>
      <View style={estilera.cabecalho}>
        <Image
          style={estilera.logo}
          source={require('../../assets/WhatsApp_Image_2024-04-11_at_10.37.48-removebg-preview.png')}
        />
      </View>
      
      <View style={estilera.card}>
        <Text style={estilera.titulo}>Clebinho Juçilei</Text>
        <TextInput
          placeholder="LOGIN"
          style={estilera.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="SENHA"
          style={estilera.input}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <Pressable style={estilera.botao} onPress={handleLogin}>
          <Text style={estilera.textobotao}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}
