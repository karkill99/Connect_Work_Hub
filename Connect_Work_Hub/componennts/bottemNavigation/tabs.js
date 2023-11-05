// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen"
import SearchScreen from '../screens/search/SearchScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
// import PostScreen from '../screens/Post';
import NotificationScreen from "../screens/notification/NotificationScreen"



const Tab = createBottomTabNavigator()


export default function Tabs() {
  return (
<Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
    <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }}/>
    {/* <Tab.Screen name="Post" component={PostScreen} options={{ headerShown: false }}/> */}
    <Tab.Screen name="Notification" component={NotificationScreen} options={{ headerShown: false }}/>
    <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
</Tab.Navigator>
  )
}