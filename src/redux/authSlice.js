import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import {setUserRegister} from "./"
// import {login} from "."
// import {}

const initialState= {
    token: null,
    isLoggedIn: false,
    userDetail: {},
    isUserRegister: false,
};


export const 