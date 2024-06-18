import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, Image, ScrollView,Linking } from "react-native";
import axios from 'axios';
import { estilo } from "./stylereceitas";
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';


export default function ReceitasPage({ navigation }) {
  const [receitas, setReceitas] = useState([]);
  
  useEffect(() => {
    axios.get(`http://192.168.1.67:5000/receitas`)
      .then(response => {
        setReceitas(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar receitas:', error);
      });
  }, []);

  

  return (
    <GestureHandlerRootView>
      <View style={estilo.divgeral}>
        <View style={estilo.cabecalho}>       
        </View>
        <ScrollView style={estilo.roll}>
          <View style={estilo.corpo}> 
            <View>

              <View>
                {receitas.map((receita, index) => (
                 
                    <View key={index} style={estilo.card}  >
                      <Image
                        style={estilo.postimg}
                        source={{ uri: receita.imagem_receita }}
                      />
                      <Text style={estilo.posttxt}>{receita.nome}</Text>
                      <Text>{receita.descricao}</Text>
                      <Text
                        style={estilo.link}
                        onPress={() => Linking.openURL(receita.link_receita)}
                        >
                        Acesse no
                      
                      <Image
                        source={require('../../assets/tudogostosologo.png')}
                        style={estilo.botaotd}
                      />
                      </Text>
                      <Text
                      style={estilo.link}
                      onPress={() => Linking.openURL(receita.link_video)}
                        >
                        Acesse no
                      
                      <Image
                        source={require('../../assets/youtubelogo.png')}
                        style={estilo.botaoyt}
                      />
                      </Text>
                    </View>
                
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
}
