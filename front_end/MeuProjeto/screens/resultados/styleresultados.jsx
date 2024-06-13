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
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  postimg: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  posttxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  descricao: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
  },
  link: {
    fontSize: 16,
    color: '#1e90ff',
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
});
