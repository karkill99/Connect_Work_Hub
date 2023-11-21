// import { NativeBaseProvider, Box } from "native-base"
import axios from "axios";
import { FormControl, Input,CheckIcon, Stack,Center, Box, NativeBaseProvider,Select, Button } from "native-base";
import { useState } from "react";

export default function Post(){
    const [name, setName]= useState("")
    const [service, setService]= useState("")
    const [description,setDescription]= useState("")
    const [pay,setPay]= useState("")
    const [mobile,setMobile]= useState("")
    console.log(service)
    console.log(pay)
    const handlePublish = async ()=>{
        const reponse = await axios.post("https://connect-hub-backend.onrender.com/post",{
            name:name,
            work:service,
            description:description,
            willigToPay:pay,
            mobile,mobile
        })
    }
    return(
        <NativeBaseProvider>
       <Box alignItems="center">
      <Box w="100%" maxWidth="300px">
        <FormControl isRequired>
          <Stack mx="4">
      <Box maxW="300">
      <FormControl.Label>Work Type</FormControl.Label>
        <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Ac Repair" value="ac repair" />
          <Select.Item label="Laptop" value="laptop" />
          <Select.Item label="Refrigerator" value="refrigerator" />
          <Select.Item label="Water purifier" value="water purifier" />
          <Select.Item label="Television" value="television" />
          <Select.Item label="Mobile Phone" value="mobile phone" />
          <Select.Item label="Computer" value="computer" />
          <Select.Item label="Washing Machine" value="washing machine" />
          <Select.Item label="Plumber" value="plumber" />
          <Select.Item label="Construction Repair" value="construction repair" />
          <Select.Item label="Electrician" value="electrician" />
          <Select.Item label="Furniture Maker" value="furniture maker" />
          <Select.Item label="Painter" value="painter" />
          <Select.Item label="House Planner" value="house planner" />
        </Select>
      </Box>
        <FormControl.Label>Name</FormControl.Label>
        <Input type="text" placeholder="Name" value={name}  onChangeText={setName}/>
        
      

            <FormControl.Label>Description</FormControl.Label>
            <Input type="text" size="2xl"  placeholder="Description" value={description}  onChangeText={setDescription}/>

            <FormControl.Label>Willing to pay</FormControl.Label>
            <Input type="numeric"  placeholder="Willing to pay" value={pay}  onChangeText={setPay}/>

            <FormControl.Label>Mobile</FormControl.Label>
            <Input type="numeric"  placeholder="mobile" value={mobile}  onChangeText={setMobile}/>
          
          </Stack>
        </FormControl>
      </Box>
    </Box>;
    <Center>

    <Box maxW="300">

          <Button 
          onPress={handlePublish}
          >Publish</Button>
    </Box>
    </Center>
            
      </NativeBaseProvider>
    )
}