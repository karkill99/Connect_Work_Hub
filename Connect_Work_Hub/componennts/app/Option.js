import { Button, View, } from "react-native";
import { CommonActions } from '@react-navigation/native';
import axios from "axios";
// import { useDispatch } from "react-redux";
// import {  userIsCustomer, userIsWorker } from "../../store/slices/authSlice";



export default function Option({ navigation }) {
    // const dispatch = useDispatch()

    const handleCustomer = async () => {
        try {
            const response = await axios.post('https://connect-hub-backend.onrender.com/auth/signup/step2', {
                userType: "customer",
            });

            navigation.dispatch(
                CommonActions.reset({
                    index: 5,
                    routes: [{ name: "userDetailsForCustomer" }]
                })
            )


        } catch (error) {
            console.log(error)
        }

    }

    const handleWorker = async () => {
        try {
            const response = await axios.post('https://connect-hub-backend.onrender.com/auth/signup/step2', {
                userType: "worker",
            });

            navigation.dispatch(
                CommonActions.reset({
                    index: 5,
                    routes: [{ name: "userDetailsForWorker" }]
                })
            )

        } catch (error) {
            console.log(error)
        }

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