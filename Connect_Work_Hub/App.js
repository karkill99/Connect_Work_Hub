<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Worker from './componennts/app/Worker';
  import SignUp from './componennts/auth/SignUp';
  import LogIn from './componennts/auth/LogIn';
import Option from './componennts/app/Option';
import Customer from './componennts/app/Customer';
import UserDetails from './componennts/UserDetails/userDetails';
import UserExperties from './componennts/UserDetails/UserExperties';


=======
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Worker from "./componennts/app/worker";
import SignUp from "./componennts/auth/signup";
import LogIn from "./componennts/auth/login";
import Coustmer from "./componennts/app/coustmer";
>>>>>>> 297a246002615144ee347ed5017a28cd41b05ea0

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
<<<<<<< HEAD
        <Stack.Screen name='login'  component={LogIn}/>
        <Stack.Screen name='signup'  component={SignUp}/>
        <Stack.Screen name='option'  component={Option}  />
        <Stack.Screen name='customer'  component={Customer}  />
        <Stack.Screen name='worker'  component={Worker}  />
        <Stack.Screen name='userExperties'  component={UserExperties}/>
        <Stack.Screen name='userDetails'  component={UserDetails}/>
 </Stack.Navigator>
        
 
=======
        <Stack.Screen name="login" component={LogIn} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="coustmer" component={Coustmer} />
        <Stack.Screen name="worker" component={Worker} />
      </Stack.Navigator>
>>>>>>> 297a246002615144ee347ed5017a28cd41b05ea0
    </NavigationContainer>
  );
}
