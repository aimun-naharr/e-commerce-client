import apiSlice from "./apiSlice";


const userApi = apiSlice.injectEndpoints({
        endpoints: (builder) => ({
                registerUser: builder.mutation({
                        query: (data) => ({
                                method: "POST",
                                url: "users/signup",
                                body: data,
                        }),
                }),
               loginUser: builder.mutation({
                query:(data)=>({
                    method: "POST",
                                url: "users/login",
                                body: data,
                })
               })
        }),
});

export const {useRegisterUserMutation, useLoginUserMutation}=userApi;