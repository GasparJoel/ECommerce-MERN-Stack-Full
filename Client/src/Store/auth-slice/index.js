import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticate: false,
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  "/auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data); // Envía el mensaje de error del servidor
      } else {
        return rejectWithValue({ message: "Unexpected error occurred" });
      }
    }
  }
);


export const loginUser = createAsyncThunk(
  "/auth/login",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data); // Envía el mensaje de error del servidor
      } else {
        return rejectWithValue({ message: "Unexpected error occurred" });
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
  extraReducers:(builder)=>{
    builder.addCase(registerUser.pending,(state)=>{
        state.isLoading=true
    }).addCase(registerUser.fulfilled,(state,action)=>{
        state.isLoading= false
        state.user = action.payload
        state.isAuthenticate=false
    }).addCase(registerUser.rejected,(state)=>{
        state.isLoading= false
        state.user = null
        state.isAuthenticate=false
    })

    builder.addCase(loginUser.pending,(state)=>{
      state.isLoading=true
  }).addCase(loginUser.fulfilled,(state,action)=>{

    console.log(action)
      state.isLoading= false
      state.user = action.payload.success? action.payload.user:null
      state.isAuthenticate= action.payload.success
      
  }).addCase(loginUser.rejected,(state)=>{
      state.isLoading= false
      state.user = null
      state.isAuthenticate=false
  })
  }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
