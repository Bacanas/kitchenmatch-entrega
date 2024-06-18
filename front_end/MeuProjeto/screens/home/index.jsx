import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, Image, ScrollView,Linking } from "react-native";
import axios from 'axios';
import { estilo } from "./styles";
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Tela({ navigation }) {
  const [receitas, setReceitas] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios.get(`http://192.168.1.67:5000/recomendacao`)
      .then(response => {
        setReceitas(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar receitas:', error);
        setLoading(false);
      });
  }, []);

  function ChamaReceitas() {
    navigation.navigate('Receitas');
  }

  function ChamaIngredientes(){
    navigation.navigate('Gerar Receita');
  }

function ChamaLogin(){
  navigation.navigate('Login');
  console.log('pressionado')
}



  return (
    <GestureHandlerRootView>
      <View style={estilo.divgeral}>
      <Pressable onPress={ChamaLogin}><Image style={estilo.perfil} source={require('../../assets/perfil.jpg')}/></Pressable>
        <View style={estilo.cabecalho}>   
          <Image
            style={estilo.logo}
            source={require('../../assets/WhatsApp_Image_2024-04-11_at_10.37.48-removebg-preview.png')}
          /> 
          <Pressable onPress={ChamaReceitas} style={estilo.botao2}><Text style={estilo.textobotao}>Receitas</Text></Pressable>
          <Pressable onPress={ChamaIngredientes} style={estilo.botao3}><Text style={estilo.textobotao}>Gere receitas</Text></Pressable>
        </View>
          <ScrollView style={estilo.roll}>
            <View style={estilo.corpo}>
              <View>
                <Text style={estilo.recomendacoes}>Recomendação</Text>
                <View>
                  <Pressable onPress={() => Linking.openURL(receitas.link_receita)}>
                    <View style={estilo.post}  >
                      <Image
                        style={estilo.postimg}
                        source={{ uri: receitas.imagem_receita }}
                      />
                      <Text style={estilo.posttxt}>{receitas.nome}</Text>
                      <Text>{receitas.descricao}</Text>
                    </View>
                  </Pressable>
                </View>
              </View>
            </View>
          </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
}
