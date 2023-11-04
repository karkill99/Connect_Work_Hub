import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
<<<<<<< HEAD
import HomeScreen from '../screens/homeScreen';
import SearchScreen from '../screens/searchScreen';
import Notify from "../screens/notificationScreen"
import ProfileScreen from '../screens/profileScreen';
import PostScreen from '../screens/post';
=======
import HomeScreen from "../screens/home/HomeScreen";
import SearchScreen from "../screens/search/SearchScreen";
import NotificationScreen from "../screens/notification/NotificationScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
>>>>>>> 297a246002615144ee347ed5017a28cd41b05ea0

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
export default function Tabs() {
  return (
<<<<<<< HEAD
<Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
    <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }}/>
    <Tab.Screen name="Post" component={PostScreen} options={{ headerShown: false }}/>
    <Tab.Screen name="Notification" component={Notify} options={{ headerShown: false }}/>
    <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
</Tab.Navigator>
  )
}
=======
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <StarTwoTone twoToneColor="#eb2f96" />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
>>>>>>> 297a246002615144ee347ed5017a28cd41b05ea0
