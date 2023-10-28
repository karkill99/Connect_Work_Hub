import { useState } from "react"
import {View,Text, TextInput, StyleSheet, Button} from "react-native"


export default function SignUp({navigation}){
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")


    return(

        <View style={style.signUpPage}>

          <Text onPress={() => navigation.navigate("login")} style={{color:"blue"}}>Go to login</Text>

            <Text>Sign up</Text>
            <Text style={style.label}>User Name</Text>
            <TextInput 
            style={style.input} 
            value={userName} 
            onChangeText={(e)=> setUserName(e)}
            />

<Text style={style.label}>Mobile Number</Text>
            <TextInput 
            style={style.input} 
            value={mobile} 
            onChangeText={(e)=> setMobile(e)}
            />

            <Text style={style.label} >Password</Text>
            <TextInput 
            style={style.input} 
            value={password} 
            onChangeText={(e)=>setPassword(e)}
            />

            <Button  title="submit" />

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
    signUpPage: {
      backgroundColor: "white",
      flex: 1,
      padding: 20,
       paddingTop:200,

    },
  });