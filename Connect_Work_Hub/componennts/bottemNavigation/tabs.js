import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/homeScreen';
import SearchScreen from '../screens/searchScreen';
import Notify from "../screens/notificationScreen"
import ProfileScreen from '../screens/profileScreen';
import PostScreen from '../screens/post';



const Tab = createBottomTabNavigator()

const Stack = createNativeStackNavigator();
export default function Tabs() {
  return (
<Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
    <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }}/>
    <Tab.Screen name="Post" component={PostScreen} options={{ headerShown: false }}/>
    <Tab.Screen name="Notification" component={Notify} options={{ headerShown: false }}/>
    <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
</Tab.Navigator>
  )
}