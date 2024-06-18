import { StyleSheet } from 'react-native';

export const estilera = StyleSheet.create({
  divgeral: {
    flex: 1,
    backgroundColor: '#FEFAE0',
    alignItems: 'center'
  },
  cabecalho: {
    padding: 20,
    backgroundColor: '#FEFAE0',
    alignItems: 'center',
    marginTop: -5
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  cardgera: {
    backgroundColor: '#F9C40D',
    alignItems: 'center',
    height: 130,
    borderRadius: 20
  },
  botao3: {
    height: 30,
    width: 240,
    backgroundColor: '#F9C40D',
    alignItems: 'center',
    borderRadius: 20,
    color: '#D74011',
    paddingLeft: 40,
    fontSize: 19,
    fontWeight: 'bold',
  },
  txtgera: {
    backgroundColor: '#F9C40D',
    color: '#D74011',
    fontSize: 16,
  },
  corpo: {
    padding: 10,
    alignItems: 'center'
  },
  post: {
    
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: 'rgba(215, 64, 17, 0.70)',
    borderRadius: 10,
    height: 120,
    width: 120,
      },

enviar:{
  height: 50,
  width: 100,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
  backgroundColor: '#D74011',
  paddingVertical: 5,
  borderRadius: 30,
  fontSize: 16,
},

  postSelecionado: {
    backgroundColor: '#33eb98', // Cor diferente para itens selecionados
  },

  postimg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  
  posttxt: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  recomendacoes :{
    fontSize:30,
    marginTop: 20,
    marginBottom: 10,
    color: '#D74011',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 1.5, height: 1.5 },
    textShadowRadius: 8,
  },

  grid:{
  
  
  flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
});
