import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { estiloResultados } from './styleresultados';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Resultados({ route, navigation }) {
  const { resultados } = route.params;

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
              {resultados.map((resultado, index) => (
                <View key={index} style={estiloResultados.post}>
                  <Image
                    style={estiloResultados.postimg}
                    source={{ uri: resultado.imagem }}
                  />
                  <Text style={estiloResultados.posttxt}>{resultado.nome}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
