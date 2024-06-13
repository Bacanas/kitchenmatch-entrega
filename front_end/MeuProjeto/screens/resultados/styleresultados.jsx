import { StyleSheet } from 'react-native';

export const estiloResultados = StyleSheet.create({
  divgeral: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cabecalho: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  cardgera: {
    alignItems: 'center',
    marginTop: 20,
  },
  botao3: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  corpo: {
    padding: 10,
  },
  recomendacoes: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  post: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
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
});
