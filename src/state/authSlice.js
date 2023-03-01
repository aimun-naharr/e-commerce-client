import { createSlice } from "@reduxjs/toolkit";

const userToken = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null;
const userInfo = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
const isAdmin = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).role === "admin" : false;
const initialState = {
	userToken,
	userInfo,
	isAdmin,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
	
		setIsAdmin: (state) => {
			if (state.user?.role === "admin") {
				state.isAdmin = true;
				localStorage.setItem("isAdmin", true);
			} else state.isAdmin = false;
		},
	},
});

export const {setIsAdmin } = authSlice.actions;
export default authSlice.reducer;
