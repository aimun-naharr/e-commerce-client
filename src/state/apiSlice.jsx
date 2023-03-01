import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const apiSlice=createApi({
     reducerPath: 'api',
     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' ,
   
     }),
     endpoints: (builder)=>({})
})

export default apiSlice

  // prepareHeaders: (headers, { getState }) => {
     //      // Add your custom headers here
     //      headers.set('Authorization', `Bearer ${getState().auth.token}`);
    
     //      return headers;
     //    }