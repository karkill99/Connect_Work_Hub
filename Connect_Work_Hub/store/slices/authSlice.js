import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState:[],
    reducers: {
        signUpStep1(state,action){
            state.push(action.payload)
        },
        userIsCustomer(state,action){
            state.push(action.payload)
        },
        userIsWorker(state,action){
            state.push(action.payload)
        },
        setExpertiesReducer(state,action){
            state.push(action.payload)
        },
        setToken(state,action){
state.push(action.payload)
        },
        signUpStep2(state,action){},
        signUpStep3(state,action){},
        logIn(state,action){},
        setUserTypeReducer(state,action){
            state.push(action.payload)
        }
    }
})
export {authSlice}
export const {signUpStep1,signUpStep2,signUpStep3,setToken,setUserTypeReducer, setExpertiesReducer,userIsCustomer,userIsWorker} = authSlice.actions