import { useState } from "react"
import { StyleSheet, View, TextInput, Text, Button} from "react-native"
import { CommonActions } from '@react-navigation/native';

export default function LogIn({navigation}) {
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")

    const userPassword = "1234"
    const userMobile = "9672932853"

let LogIn = false
    return (
        <View style={style.logInPage}>

     
            <Text onPress={() => navigation.navigate("signup") } style={{color:"blue"}}>Click Here to sign up</Text>
            

            <Text>Log in</Text>

            <Text style={style.label}>Mobile Number</Text>
            <TextInput
                style={style.input}
                value={mobile}
                onChangeText={(e) => setMobile(e)}
            />

            <Text style={style.label} >Password</Text>
            <TextInput
                style={style.input}
                value={password}
                onChangeText={(e) => setPassword(e)}

            />
            <Button onPress={
                mobile === userMobile && password === userPassword ?
                    () => {navigation.dispatch(
                        CommonActions.reset({
                            index:1,
                            routes:[
                                {name:"option"},
                               
                            ]
                        })
                    )}
                    
                    : console.log("password is incorrect")
            }
                title="submit"
            />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "gray",
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,

    },
    label: {
        fontSize: 10,
        fontWeight: "bold",
    },
    logInPage: {
        backgroundColor: "white",
        flex: 1,
        padding: 20,
        paddingTop: 200,

    },
});
