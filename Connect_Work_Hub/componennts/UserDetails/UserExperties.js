import { VStack, Box, NativeBaseProvider, HStack, Text, Button, Checkbox, Heading } from "native-base";
import { useState } from "react";
import { CommonActions } from "@react-navigation/native";
import axios from "axios";

export default function UserExperties({ navigation }) {

  const [experties, setExperties] = useState([])

  
const handleExperties = async()=>{
try{
const response = await axios.post('https://connect-hub-backend.onrender.com/auth/signup/step4',{
experties:experties
})

navigation.dispatch(
  CommonActions.reset({
      index: 5,
      routes: [{ name: "worker" }]
  }))

}catch(error){
console.log(error)
}
}
  return (
    <NativeBaseProvider>
      <Box alignItems="center">
        <HStack>
          <VStack>
            <Heading size={"md"}>Your Experties</Heading>
            <Text >Electronics</Text>
            <Checkbox.Group value={experties} onChange={setExperties} accessibilityLabel="choose values">
              <Checkbox value="ac repair" >Ac Repair</Checkbox>
              <Checkbox value="laptop">Laptop</Checkbox>
              <Checkbox value="refrigerator">Refrigerator</Checkbox>
              <Checkbox value="water purifier">Water Purifier</Checkbox>
              <Checkbox value="television">Television</Checkbox>
              <Checkbox value="mobile phone">Mobile Phone</Checkbox>
              <Checkbox value="computer">Computer</Checkbox>
              <Checkbox value="washing machine">Washing Machine</Checkbox>
            <Text>Home Repair</Text>
              <Checkbox value="plumber" >Plumber</Checkbox>
              <Checkbox value="construction repair">Construction Repair</Checkbox>
              <Checkbox value="electrician">Electrician</Checkbox>
              <Checkbox value="furniture maker">Furniture Maker</Checkbox>
              <Checkbox value="painter">Painter</Checkbox>
              <Checkbox value="house planner">House Planner</Checkbox>
            </Checkbox.Group>;
          </VStack>
        </HStack>
        <Button onPress={ handleExperties }>Done</Button>
      </Box>;

    </NativeBaseProvider>
  )
}

