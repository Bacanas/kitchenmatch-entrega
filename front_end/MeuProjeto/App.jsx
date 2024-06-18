  import Home from "./screens/home";
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import ReceitasPage from "./screens/receitasprontas/receitas";
  import Resultados from "./screens/resultados/resultados";
  import Ingredientes from "./screens/ingredientes/ingredientes";
import LoginPage from "./screens/login/login";

export const ip = "192.168.1.67"

const Stack = createNativeStackNavigator();
 

export default function App(){

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FEFAE0',
            elevation: 0,
            shadowOpacity: 0 // Cor de fundo da barra de navegação
          },
          headerTintColor: '#D74011', // Cor do texto na barra de navegação
          headerTitleStyle: {
            fontWeight: 'bold', // Estilo do título na barra de navegação
    
          },
        }}
      >
      <Stack.Screen name="Home" component={Home}options={{title: 'Página Inicial' , headerShown: false}}/>
      <Stack.Screen name="Receitas" component={ReceitasPage} options={{title: '',  headerShadowVisible:false}}/>
      <Stack.Screen name="Resultados" component={Resultados} options={{title: '',  headerShadowVisible:false}}/>
      <Stack.Screen name="Gerar Receita" component={Ingredientes} options={{title: '',  headerShadowVisible:false}}/>
      <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}
  


 
