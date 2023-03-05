import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const apiSlice=createApi({
     reducerPath: 'api',
     baseQuery: fetchBaseQuery({ baseUrl: 'https://backend-trendwear-server.vercel.app/api/' ,
   
     }),
     endpoints: (builder)=>({})
})

export default apiSlice

 