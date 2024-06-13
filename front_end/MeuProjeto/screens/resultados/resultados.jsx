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
            <View style={estiloResultados.cardgera}>
              <Text style={estiloResultados.botao3}>Resultados</Text>
            </View>
          </View>
          
          <View style={estiloResultados.corpo}>
            <Text style={estiloResultados.recomendacoes}>Resultados da Seleção</Text>

            <View>
              {resultados[0].map((resultado, index) => (
                <View key={index} style={estiloResultados.post}>
                  <Image
                    style={estiloResultados.postimg}
                    source={{ uri: resultado.Receita_Imagem }}
                  />
                  <Text style={estiloResultados.posttxt}>{resultado.Receita_Nome}</Text>
                  <Text style={estiloResultados.descricao}>{resultado.Receita_Descricao}</Text>
                  <Text
                    style={estiloResultados.link}
                    onPress={() => Linking.openURL(resultado.Receita_Link)}
                  >
                    Ver Receita
                  </Text>
                  <Text
                    style={estiloResultados.link}
                    onPress={() => Linking.openURL(resultado.Receita_Video)}
                  >
                    Ver Vídeo
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
