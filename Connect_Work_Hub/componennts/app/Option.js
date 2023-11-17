import { Button, View, } from "react-native";
import { CommonActions } from '@react-navigation/native';

import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";

import { useDispatch, useSelector } from "react-redux";
import { signUpStep2, userIsCustomer, userIsWorker } from "../../store/slices/authSlice";


export default function Option({ navigation }) {
const dispatch = useDispatch()
    // const step2 = useSelector((state)=>{
    //     return state.Auth
    // })

    const handleCustomer = async () => {
        try {
            const response = await axios.post('https://connect-hub-backend.onrender.com/auth/signup/step2', {
                // tempId:tempId, 
                userType:"customer",
                  

            });
            const {typeOfUser}= response.data
          
        
            
dispatch(userIsCustomer(typeOfUser))
                navigation.dispatch(
                    CommonActions.reset({
                        index: 5,
                        routes: [{ name: "userDetails" }]
                    })
                )
            
        } catch (error) {
            console.log(error)
        }
        
   
        // dispatch(setUserTypeReducer("customer"))
        
    }
    const handleWorker = async () => {
        try {
            const response = await axios.post('https://connect-hub-backend.onrender.com/auth/signup/step2', {
                // tempId:tempId,
                 userType:"worker",


            });
            // console.log('Response:', response.data);
           dispatch(userIsWorker("worker"))
                navigation.dispatch(
                    CommonActions.reset({
                        index: 5,
                        routes: [{ name: "userDetails" }]
                    })
                )
            
        } catch (error) {
            console.log(error)
        }
        
        // dispatch(setUserTypeReducer("worker"))

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