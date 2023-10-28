import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './componennts/home/home';
import SignUp from './componennts/auth/signup';
import LogIn from './componennts/auth/login';
import HomeTwo from './componennts/home/hometo';

const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='signup'  component={SignUp}/>
        <Stack.Screen name='home'  component={Home}/>
        <Stack.Screen name='login'  component={LogIn}/>
        <Stack.Screen name='hometwo'  component={HomeTwo}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


