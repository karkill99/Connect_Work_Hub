import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Worker from "./componennts/app/Worker";
import SignUp from "./componennts/auth/SignUp";
import LogIn from "./componennts/auth/LogIn";
import Option from "./componennts/app/Option";
import Customer from "./componennts/app/Customer";
 import { UserDetailsForCustomer, UserDetailsForWorker } from "./componennts/UserDetails/userDetails";
import UserExperties from "./componennts/UserDetails/UserExperties";
import { Provider } from "react-redux";
import store from "./store/store";
import Post from "./componennts/screens/Post/post";



const Stack = createNativeStackNavigator();
export default function App() {
  return (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LogIn} />
        <Stack.Screen name="p" component={Post} />
        <Stack.Screen name="userDetailsForWorker" component={UserDetailsForWorker} />
        <Stack.Screen name="userDetailsForCustomer" component={UserDetailsForCustomer} />
        <Stack.Screen name="customer" component={Customer} />
        <Stack.Screen name="worker" component={Worker} />
        <Stack.Screen name="userExperties" component={UserExperties} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="option" component={Option} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
