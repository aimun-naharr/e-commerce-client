import React from 'react';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    // getuser
    const location=useLocation()
// if(user) return children
    return  <Navigate to='/login' state={{from: location}} replace/>

};

export default PrivateRoute;