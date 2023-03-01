import React from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { useGetPoductQuery } from "../../state/productSlice";

const PaginateBar = () => {
    const dispatch=useDispatch()
	const [currentPage, setCurrentPage] = React.useState(1);
    const limit=5;
    const startIndex=currentPage * 5
    const { data, isLoading, error } = useGetPoductQuery({currentPage, startIndex, limit});
	const handleChange = ( value) => {
		setCurrentPage(value);
	};
    React.useEffect(()=>{
dispatch()
    }, [currentPage])
	return <Pagination onChange={handleChange} count={5} renderItem={(item) => <PaginationItem {...item} size={"large"} />} />;
};

export default PaginateBar;
