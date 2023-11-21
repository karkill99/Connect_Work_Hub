
import { FormControl, Input, Stack, Box, NativeBaseProvider, Button, Radio } from "native-base";
import { useState } from "react";
import { Text, View } from "react-native";
import { CommonActions } from "@react-navigation/native";
import axios from "axios";
import { useSelector } from "react-redux";


const UserDetailsForWorker = ({ navigation }) => {
    const [name, setName] = useState("")
    const [alternateMobile, setAlternateMobile] = useState("")
    const [address, setAddress] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [pincode, setPincode] = useState("")
    const [gender, setGender] = useState("male")
    console.log(gender)

    const handleUserDetails = async () => {
        try {
            const response = await axios.post('https://connect-hub-backend.onrender.com/auth/signup/step3', {
                name: name,
                alternateMobile: alternateMobile,
                address: address,
                state: state,
                city: city,
                pincode: pincode,
                gender: gender

            });
            navigation.dispatch(
                CommonActions.reset({
                    index: 5,
                    routes: [{ name: "userExperties" }]
                })
            )


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
                                onChangeText={(e) => { setName(e) }}
                            />
                            <Input type="number" placeholder="Alternate Mobile"
                                keyboardType="numeric"
                                maxLength={10}
                                value={alternateMobile}
                                onChangeText={(e) => { setAlternateMobile(e) }}
                            />
                            <Input type="text" placeholder="Address"
                                value={address}
                                onChangeText={(e) => { setAddress(e) }}
                            />
                            <Input type="text" placeholder="type state"
                                value={state}
                                onChangeText={(e) => { setState(e) }}
                            />
                            <Input type="text" placeholder="City / District"
                                value={city}
                                onChangeText={(e) => { setCity(e) }}
                            />
                            <Input type="number" placeholder="Pincode"
                                keyboardType="numeric"
                                maxLength={6}
                                value={pincode}
                                onChangeText={(e) => { setPincode(e) }}
                            />
                            <Text>Select Gender</Text>

                            <Radio.Group defaultValue="male" value={gender} name="gender" accessibilityLabel="Pick your favorite gender"
                             onChange={nextValue => setGender(nextValue)}>
                                <Radio value="male" size="sm" >
                                   Male
                                </Radio>
                                <Radio value="female" size="sm" >
                                    Female
                                </Radio>
                                <Radio value="other" size="sm" >
                                    Other
                                </Radio>
                            </Radio.Group>;


                        </Stack>
                        <Button onPress={handleUserDetails}>Next</Button>
                    </FormControl>
                </Box>
            </Box>;
        </NativeBaseProvider>
    )
}

const UserDetailsForCustomer = ({ navigation }) => {
    const [name, setName] = useState("")
    const [alternateMobile, setAlternateMobile] = useState("")
    const [address, setAddress] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [pincode, setPincode] = useState("")
    const [gender, setGender] = useState("")
    console.log(gender)

    const handleUserDetails = async () => {
        try {
            const response = await axios.post('https://connect-hub-backend.onrender.com/auth/signup/step3', {
                name: name,
                alternateMobile: alternateMobile,
                address: address,
                state: state,
                city: city,
                pincode: pincode,
                gender: gender

            });
            navigation.dispatch(
                CommonActions.reset({
                    index: 5,
                    routes: [{ name: "customer" }]
                })
            )


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
                                onChangeText={(e) => { setName(e) }}
                            />
                            <Input type="number" placeholder="Alternate Mobile"
                                keyboardType="numeric"
                                maxLength={10}
                                value={alternateMobile}
                                onChangeText={(e) => { setAlternateMobile(e) }}
                            />
                            <Input type="text" placeholder="Address"
                                value={address}
                                onChangeText={(e) => { setAddress(e) }}
                            />
                            <Input type="text" placeholder="type state"
                                value={state}
                                onChangeText={(e) => { setState(e) }}
                            />
                            <Input type="text" placeholder="City / District"
                                value={city}
                                onChangeText={(e) => { setCity(e) }}
                            />
                            <Input type="number" placeholder="Pincode"
                                keyboardType="numeric"
                                maxLength={6}
                                value={pincode}
                                onChangeText={(e) => { setPincode(e) }}
                            />
                            <Text>Select Gender</Text>

                            <Radio.Group defaultValue="male"  name="gender" accessibilityLabel="Pick your favorite gender">
                                <Radio value="male" size="sm" >
                                   Male
                                </Radio>
                                <Radio value="female" size="sm" >
                                    Female
                                </Radio>
                                <Radio value="other" size="sm" >
                                    Other
                                </Radio>
                            </Radio.Group>;


                        </Stack>
                        <Button onPress={handleUserDetails}>Next</Button>
                    </FormControl>
                </Box>
            </Box>;
        </NativeBaseProvider>
    )
}
export { UserDetailsForWorker, UserDetailsForCustomer }