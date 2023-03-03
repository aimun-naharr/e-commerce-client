import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AdminRoute = ({children}) => {
	const user = useSelector(state=>state.auth.userInfo);
    const isAdmin=useSelector(state=>state.auth.isAdmin)
	
    
	const location = useLocation();
	if( !isAdmin) return <Navigate to="/login" state={{ from: location }}  replace={true} />;
	return children;
};

export default AdminRoute;