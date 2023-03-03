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
		logOut: (state, action) => {
			localStorage.removeItem("token");
			localStorage.removeItem("user");
			(state.token = null), (state.userInfo = null);
			action.payload.navigate("/login");
			action.payload.setOpen(false);
		},
		setUser: (state, action) => {
			state.userInfo = action.payload?.user;
			state.userToken=action.payload?.token
			state.isAdmin=action.payload?.user.role=== 'admin'
			localStorage.setItem("token", JSON.stringify(action.payload?.token));
			localStorage.setItem("user", JSON.stringify(action.payload?.user));
		},
	},
});

export const { logOut, setUser } = authSlice.actions;
export default authSlice.reducer;
