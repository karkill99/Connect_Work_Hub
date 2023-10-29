import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Worker from './componennts/app/worker';
  import SignUp from './componennts/auth/signup';
  import LogIn from './componennts/auth/login';
import Coustmer from './componennts/app/coustmer';



const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login'  component={LogIn}/>
        <Stack.Screen name='signup'  component={SignUp}/>
        <Stack.Screen name='coustmer'  component={Coustmer}  />
        <Stack.Screen name='worker'  component={Worker}  />
 </Stack.Navigator>
        
 
    </NavigationContainer>
    
  );
}


