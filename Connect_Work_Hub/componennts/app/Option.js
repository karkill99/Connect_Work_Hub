import { Button, View,} from "react-native";
import { CommonActions } from '@react-navigation/native';


export default function Option({navigation}){
    return(
        <View >
            
            <Button title="I am Customer" 
            color={"green"}
            onPress={() => {navigation.dispatch(
                CommonActions.reset({
                    index:3,
                    routes:[{name:"customer"} ]
                })
            )}}
            />
            <Button title="I am Worker" 
            onPress={() => {navigation.dispatch(
                CommonActions.reset({
                    index:4,
                    routes:[{name:"userDetails"} ]
                })
            )}}
            />

        </View>
    )
}