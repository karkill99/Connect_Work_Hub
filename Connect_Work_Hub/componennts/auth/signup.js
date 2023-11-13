import { useState } from "react"
import { Box, Text, Heading, VStack, FormControl, Link, Button, HStack, Center, NativeBaseProvider,Input } from "native-base";
import { Pressable, ActivityIndicator } from "react-native";
// import { CommonActions } from '@react-navigation/native';
import axios from "axios";
// import { useDispatch } from "react-redux";
// import { setTempId } from "../../store/slices/workerSlice";

export default function SignUp({navigation}){
  const [mobile, setMobile] = useState()
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
//  const [loading,setLoading] = useState(false)
    
     
   
     const handleSignup = async () => {
      try {
        const response = await axios.post('https://connect-hub-backend.onrender.com/auth/signup/step1', {
        username:userName,
        password:password,
        mobile:mobile,

        });
        const {step1Completed} = response.data
        dispatch(signUpStep1(step1Completed))
     
       
      //   if (mobile && password && userName) {
      //     navigation.dispatch(
      //         CommonActions.reset({
      //             index: 0,
      //             routes: [{ name: "option" }]
      //         })
      //     );
      // }
    
   setLoading(true)
      } catch (error) {
        console.log(error)
      }
    }      

    const isButtonDisabled = () => {
     
      return !(mobile && password && userName)
      
    };


    const handlePhoneNumberChange = (text) => {

      const cleanedText = text.replace(/[^0-9]/g, '');
  
      if (cleanedText.length <= 10) {
        setMobile(cleanedText);
      }
    };


    return(
<NativeBaseProvider>
<Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Mobile</FormControl.Label>
         
            <Input 
            value={mobile}
            keyboardType="numeric"
            maxLength={10}
            onChangeText={handlePhoneNumberChange}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>User name</FormControl.Label>
            <Input
            value={userName} 
           onChangeText={(e)=> setUserName(e)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password"
             value={password} 
             onChangeText={(e)=> setPassword(e)}
            />
          </FormControl>
          <Button mt="2" colorScheme="indigo"
          onPress={handleSignup}
          disabled={isButtonDisabled()}
         
          >
            Sign up
          
          </Button>
          <HStack mt="6" justifyContent="center">
                            <Text fontSize="sm" color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                Back to.{"  "}
                            </Text>
                            <Pressable>
                                <Link _text={{
                                    color: "indigo.500",
                                    fontWeight: "medium",
                                    fontSize: "sm"
                                }} onPress={() => navigation.navigate("login")}>
                                    Login
                                </Link>

                            </Pressable>
                            
                        </HStack>
        </VStack>
      </Box>
    </Center>;
</NativeBaseProvider>

    )
}

// const style = StyleSheet.create({
//     input: {
//       borderWidth: 1,
//       borderColor: "gray",
//       marginBottom: 10,
//       padding: 10,
//       borderRadius: 5,
      
//     },
//     label: {
//       fontSize: 10,
//       fontWeight: "bold",
//     },
//     signUpPage: {
//       backgroundColor: "white",
//       flex: 1,
//       padding: 20,
//        paddingTop:200,

//     },
//   });