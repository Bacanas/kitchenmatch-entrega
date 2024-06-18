import { StyleSheet } from 'react-native';

export const estiloResultados = StyleSheet.create({
  divgeral: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cabecalho: {
    padding: 20,
    backgroundColor: '#FEFAE0',
    alignItems: 'center',
  },
  logo:{
    height:220,
    width:260,
    marginTop:-50
  },
  cardgera: {
    marginTop:14,
    backgroundColor: '#F2B20C',
    width: 340,
    borderRadius: 20,
    alignItems: "center",
    paddingBottom: 16,
    padding:15
  },
  botao3: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  corpo: {
    padding: 10,
    backgroundColor: '#FEFAE0',
    alignItems: 'center'
  },
  recomendacoes: {
    fontSize:22,
    marginTop: 10,
    marginBottom: 10,
    color: '#D74011',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 1.5, height: 1.5 },
    textShadowRadius: 8,
    textAlign: 'center'
  },
  post: {
    marginTop: 20,
    alignItems : 'center',
  },
  postimg: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  posttxt: {
    fontSize:20,
    color: '#000000',
  },

  botaotd:{
    width: 20,
    height: 20,
    marginLeft: 100,
    marginTop: -27
  },

  botaoyt:{
    width:30,
    height: 30,
    marginLeft: 90,
    marginTop: -35
  },

  link: {
    fontSize: 18,
    color: '#D74011',
    textDecorationLine: 'none',
    marginLeft: -18
  },


});
