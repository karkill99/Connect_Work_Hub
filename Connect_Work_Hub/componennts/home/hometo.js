import { Text , Button} from "react-native";

export default function HomeTwo ({navigation}){
    return(
        <>
        <Text>Hello i am Home 2nd</Text>
        <Button title="got to Home" 
        onPress={()=> navigation.navigate("home")}
        />
        </>
    )
}