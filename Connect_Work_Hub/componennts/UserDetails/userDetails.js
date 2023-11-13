
import { FormControl, Input, Stack, WarningOutlineIcon, Box, NativeBaseProvider, Select, Checkbox, Button } from "native-base";
import { useState } from "react";
import { Text } from "react-native";

export default function UserDetails({navigation}) {
    const [name,setName] = useState("")
    const [alternateMobile,setAlternateMobile] = useState("")
    const [address,setAddress] = useState("")
    const [state,setState] = useState("")
    const [city,setCity] = useState("")
    const [pincode,setPincode] = useState("")
     const [gender,setGender] = useState("")
    

const handleUserDetails = async ()=>{
    try {
        const response = await axios.post('https://connect-hub-backend.onrender.com/auth/signup/step3', {
       


        });
    } catch (error) {
        console.log(error)
      }

    }
    return (
        <NativeBaseProvider>
            <Box alignItems="center">
                <Box w="100%" maxWidth="300px">
                    <FormControl isRequired>
                        <Stack mx="4">
                            <FormControl.Label>Submit Your details</FormControl.Label>
                            <Input type="text" placeholder="Your Name" 
                            value={name}
                             onChangeText={(e)=>{setName(e)}}
                             />                           
                            <Input type="number" placeholder="Alternate Mobile"
                             keyboardType="numeric"
                             maxLength={10}
                             value={alternateMobile}
                             onChangeText={(e)=>{setAlternateMobile(e)}}
                            />
                            <Input type="text" placeholder="Address"
                            value={address}
                            onChangeText={(e)=>{setAddress(e)}}
                            />
                            <Input type="text" placeholder="type state"
                            value={state}
                            onChangeText={(e)=>{setState(e)}}
                            />
                            <Input type="text" placeholder="City / District" 
                            value={city}
                            onChangeText={(e)=>{setCity(e)}}
                            />
                            <Input type="number" placeholder="Pincode"
                             keyboardType="numeric"
                             maxLength={6}
                             value={pincode}
                             onChangeText={(e)=>{setPincode(e)}}
                            />
                            <Text>Select Gender</Text>
                            
      <Checkbox
      value={gender}
      onChangeText={(e)=>{setGender(e)}}
      >Male</Checkbox>
      <Checkbox 
     value={gender}
     onChangeText={(e)=>{setGender(e)}}
      >Female</Checkbox>
      <Checkbox value={gender}
      onChangeText={(e)=>{setGender(e)}}
      >Other</Checkbox>
    
                        </Stack>
                        <Button
                        onPress={()=>{
                            
                            navigation.navigate("userExperties")
                        }}
                        >Next</Button>
                    </FormControl>
                </Box>
            </Box>;
        </NativeBaseProvider>
    )
}
