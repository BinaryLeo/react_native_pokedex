import {createSlice} from "@reduxjs/toolkit";
const authState = createSlice({
    name: "authorizationState",
    initialState:{
        authenticated:false,
        email:"",
    },
    reducers:{
        beAuthenticated(state,email:any){
            state.authenticated = true;
            state.email = email;
        },
        beDeAuthenticated(state){
            state.authenticated = false;
            state.email = "";
        },
    },
});
export const {beAuthenticated,beDeAuthenticated} = authState.actions;
export default authState.reducer;