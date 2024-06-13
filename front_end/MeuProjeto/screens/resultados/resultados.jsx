import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { estilera } from './styleresultados';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Card } from '../../components/receitascard';

export default function Resultados({ navigation, route }) {
  const { resultados } = route.params;

  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={estilera.divgeral}>
          <View style={estilera.cabecalho}>
            <Image
              style={estilera.logo}
              source={require('../../assets/WhatsApp_Image_2024-04-11_at_10.37.48-removebg-preview.png')}
            />
            <View style={estilera.cardgera}>
              <Text style={estilera.botao3}>Resultados</Text>
            </View>
          </View>
          
          <View style={estilera.corpo}>
            {resultados.map((resultado, index) => (
              <Card
                key={index}
                title={resultado.nome_receita}
                image={resultado.imagem_receita}
                descricao={resultado.descricao_receita}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
