import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getUsersData = createAsyncThunk("getUsersData", async () => {
  try {
    const res = await axios.get("http://localhost:3000/Users");
    const data = await res.data;
    console.log(data, "getUsersData");
    return data;
  } catch (error) {
    console.log(`You Got an Error :${error}`);
  }
});

export const PostUsersData = createAsyncThunk("PostUsersData", async (daa) => {
  try {
    console.log(daa, "=====");
    const daaa = JSON.stringify(daa);
    console.log(daaa, "daaa");
    const res = await axios.post("http://localhost:3000/Users", daaa, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data = await res.data;
    console.log(data, "PostUsersData");
    return data;
  } catch (error) {
    console.log(`You Got an Error :${error}`);
  }
});
getUsersData();
const initialState = {
  data: null,
  error: null,
  status: null,
  demo: [
    {
      cellno: 1,
      status: true,
    },
    {
      cellno: 2,
      status: false,
    },
    {
      cellno: 3,
      status: false,
    },
    {
      cellno: 4,
      status: true,
    },
    {
      cellno: 5,
      status: false,
    },
  ],
};
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleAvaiblity(state, action) {
      console.log(action.payload);
      state.demo[action.payload].status = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersData.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getUsersData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
      console.log(action.payload, "444");
    });
    builder.addCase(getUsersData.rejected, (state, action) => {
      state.status = "Failed";
      state.error = action.error.message;
    });

    builder.addCase(PostUsersData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(PostUsersData.fulfilled, (state) => {
      state.status = "succeeded";
    });
    builder.addCase(PostUsersData.rejected, (state) => {
      state.status = "Failed";
    });
  },
});

export default UserSlice.reducer;

export const { handleAvaiblity } = UserSlice.actions;
