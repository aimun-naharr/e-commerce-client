import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const apiSlice=createApi({
     reducerPath: 'api',
     baseQuery: fetchBaseQuery({ baseUrl: 'https://e-commerce-trend-server.vercel.app/api/' }),
     endpoints: (builder)=>({})
})

export default apiSlice