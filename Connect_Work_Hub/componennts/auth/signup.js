import { useState } from "react"
import { CommonActions } from '@react-navigation/native';
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, } from "native-base";
import { Pressable } from "react-native";


export default function SignUp({navigation}){
     const [mobile, setMobile] = useState("")
     const [userName, setUserName] = useState("")
     const [password, setPassword] = useState("")
     const [rePassword, setRePassword] = useState("")


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
           onChangeText={(e)=> setMobile(e)}
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
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" 
            value={rePassword} 
            onChangeText={(e)=> setRePassword(e)}
            />
          </FormControl>
          <Button mt="2" colorScheme="indigo"
          onPress={
            password === rePassword  ?
                () => {
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 1,
                            routes: [
                                { name: "option" },

                            ]
                        })
                    )
                }

                : console.log("password is incorrect")
        }
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