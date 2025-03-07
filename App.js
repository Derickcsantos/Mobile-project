import { NavigationContainer } from '@react-navigation/native';
import Login from './views/Login';
import Home from './views/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Perfil from './views/Perfil';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}  options={{headerShown:false}} />
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name='Perfil' component={Perfil}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}