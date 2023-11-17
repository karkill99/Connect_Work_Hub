import { useState } from "react"
import { CommonActions } from '@react-navigation/native';
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, } from "native-base";
import { Pressable } from "react-native";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setToken,} from "../../store/slices/authSlice";


export default function LogIn({ navigation }) {

    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")
    const dispatch = useDispatch()

    const step1 = useSelector((state)=>{
        return state.Auth
    })
    const step2 = useSelector((state)=>{
        return state.Auth
    })
    const step3 = useSelector((state)=>{
        return state.Auth
    })

    const handleLogin = async () => {


        try {
            const response = await axios.post('https://connect-hub-backend.onrender.com/auth/signin', {
                username: userName,
                password: password
            });

            const { token} = response.data

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

            console.log('token', token);

            console.log(step1)
            dispatch(setToken(token))
          
            navigation.dispatch(
                CommonActions.reset({
                    index: 2,
                    routes: [
                        { name: "option" },
        
                    ]
                })
            )

        } catch (error) {
            console.error('Error logging in:', error);
            console.log('Error response data:', error.response.data);
            console.log('Error status:', error.response.status);

        }

    }



    return (
        <NativeBaseProvider>

            <Center w="100%">
                <Box safeArea p="2" py="8" w="90%" maxW="290">
                    <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }}>
                        Welcome
                    </Heading>
                    <Heading mt="1" _dark={{
                        color: "warmGray.200"
                    }} color="coolGray.600" fontWeight="medium" size="xs">
                        Sign in to continue!
                    </Heading>

                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label>User Name</FormControl.Label>
                            <Input
                                value={userName}
                                onChangeText={(e) => setUserName(e)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input type="password"
                                value={password}
                                onChangeText={(e) => setPassword(e)}
                            />

                        </FormControl>
                        <Button mt="2" colorScheme="indigo"
                            onPress={
                                //     () => {
                                //         navigation.dispatch(
                                //             CommonActions.reset({
                                //                 index: 1,
                                //                 routes: [
                                //                     { name: "option" },

                                //                 ]
                                //             })
                                //         )
                                //     }

                                // }
                                handleLogin
                            }>
                            Log in
                        </Button>
                        <HStack mt="6" justifyContent="center">
                            <Text fontSize="sm" color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                I'm a new user.{"  "}
                            </Text>
                            <Pressable>
                                <Link _text={{
                                    color: "indigo.500",
                                    fontWeight: "medium",
                                    fontSize: "sm"
                                }} onPress={() => navigation.navigate("signup")}>
                                    Sign Up
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
//         borderWidth: 1,
//         borderColor: "gray",
//         marginBottom: 10,
//         padding: 10,
//         borderRadius: 5,

//     },
//     label: {
//         fontSize: 10,
//         fontWeight: "bold",
//     },
//     logInPage: {
//         backgroundColor: "white",
//         flex: 1,
//         padding: 20,
//         paddingTop: 200,

//     },
// });
// cc
// mobile ===mobile && password === password ?


// : console.log("password is incorrect")