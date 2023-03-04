import apiSlice from "./apiSlice";


const userApi = apiSlice.injectEndpoints({
        endpoints: (builder) => ({
                getAllUsers: builder.query({
                        query: ()=>({
                                url:  `users/getAll`
                        })
                }),
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

export const {useRegisterUserMutation, useLoginUserMutation, useGetAllUsersQuery}=userApi;