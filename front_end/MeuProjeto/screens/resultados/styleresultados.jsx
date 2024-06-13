import { StyleSheet } from 'react-native';

export const estilera = StyleSheet.create({
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
  card: {
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
  receitaimg: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  textocard: {
    fontSize: 16,
    color: '#666',
  },
});
