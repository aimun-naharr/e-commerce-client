import apiSlice from "./apiSlice";


const productApi = apiSlice.injectEndpoints({
        endpoints: (builder) => ({
                postProduct: builder.mutation({
                        query: (data) => ({
                                method: "POST",
                                url: "/products/createNew",
                                body: data,
                        }),
                }),
                getPoduct: builder.query({
                        query: ({currentPage, startIndex, limit})=>({
                                url:  `products/getAll?page=${currentPage}&startIndex=${startIndex}&limit=${limit}`
                        })
                }),
                getOnePoduct: builder.query({
                        query: (id)=>({
                                url:  `products/${id}`
                        })
                })
        }),
});

export const {usePostProductMutation, useGetPoductQuery, useGetOnePoductQuery}=productApi