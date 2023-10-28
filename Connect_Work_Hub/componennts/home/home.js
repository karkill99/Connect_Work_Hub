
import { Text, Button } from "react-native";

export default function Home ({navigation}){
    return(
        <>
        <Text>Hello i am home</Text>
        <Button title="got to home 2" onPress={()=> navigation.navigate("hometwo")}/>
        </>
    )
}