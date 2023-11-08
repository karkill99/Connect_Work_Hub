import { Button, View, } from "react-native";
import { CommonActions } from '@react-navigation/native';
import { useState } from "react";
import axios from "axios";

export default function Option({ navigation }) {
    const [userType, setUserType] = useState()
    let tempId
    const handleCustomer = async () => {
        try {
            const response = await axios.post('https://connect-hub-backend.onrender.com/auth/signup/step2', {
                tempId, 
                userType:userType,


            });
            console.log('Response:', response.data);

        } catch (error) {
            console.log(error)
        }
        setUserType("customer")
        console.log(userType)
        navigation.dispatch(
            CommonActions.reset({
                index: 3,
                routes: [{ name: "customer" }]
            })
        )
    }
    const handleWorker = async () => {
        try {
            const response = await axios.post('https://connect-hub-backend.onrender.com/auth/signup/step2', {
                tempId, userType,


            });
            console.log('Response:', response.data);

        } catch (error) {
            console.log(error)
        }
        setUserType("worker")
        console.log(userType)
        navigation.dispatch(
            CommonActions.reset({
                index: 4,
                routes: [{ name: "userDetails" }]
            })
        )
    }
    return (
        <View >

            <Button title="I am Customer"
                color={"green"}
                onPress={handleCustomer}
            />
            <Button title="I am Worker"
                onPress={handleWorker}
            />

        </View>
    )
}