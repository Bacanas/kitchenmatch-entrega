import React from 'react';
import { View, Text, Image, ScrollView, Linking } from 'react-native';
import { estiloResultados } from './styleresultados';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Resultados({ route, navigation }) {
  const { resultados } = route.params;
  console.log('Ingredientes enviados com sucesso:', resultados[0]);

  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={estiloResultados.divgeral}>
          <View style={estiloResultados.cabecalho}>
            <Image
              style={estiloResultados.logo}
              source={require('../../assets/WhatsApp_Image_2024-04-11_at_10.37.48-removebg-preview.png')}
            />
          </View>
          <View style={estiloResultados.corpo}>
            <Text style={estiloResultados.recomendacoes}>Resultados da Seleção</Text>
            <View>
              {resultados[0].map((resultado, index) => (
                <View key={index} style={estiloResultados.cardgera}>
                  <Image
                        style={estiloResultados.postimg}
                        source={{ uri: resultado.imagem_receita }}
                      />
                      <Text style={estiloResultados.posttxt}>{resultado.receitas_nome}</Text>
                      <Text>{resultado.receitas_descricao}</Text>
                      <Text
                        style={estiloResultados.link}
                        onPress={() => Linking.openURL(resultado.link_receita)}
                        >
                        Acesse no
                      
                      <Image
                        source={require('../../assets/tudogostosologo.png')}
                        style={estiloResultados.botaotd}
                      />
                      </Text>
                      <Text
                      style={estiloResultados.link}
                      onPress={() => Linking.openURL(resultado.link_video)}
                        >
                        Acesse no
                      
                      <Image
                        source={require('../../assets/youtubelogo.png')}
                        style={estiloResultados.botaoyt}
                      />
                      </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
