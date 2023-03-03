import React from "react";
import { Box, Typography, Tabs, Tab, useMediaQuery } from "@mui/material";
import { useGetPoductQuery } from "../../state/productSlice";
import { Pagination, PaginationItem } from "@mui/material";
import { useState } from "react";
import Item from "../global/Item";
import ProgressBar from "../global/ProgressBar";
const ShoppingList = () => {
        const [value, setValue] = useState("all");
        const handleChange = (event, newValue) => {
                setValue(newValue);
        };
        const isNonMobile = useMediaQuery("(min-width: 600px)");
        const [currentPage, setCurrentPage] = useState(0);
    const limit=5;
    const startIndex=currentPage * 5
        const { data, isLoading, error } = useGetPoductQuery({currentPage, startIndex, limit});
        const handleChangePage = ( event, value) => {
		setCurrentPage(value-1);
	};
    
        const topRatedItems = data?.products.filter((item) => item.category === "toprated");
        const newArrivals = data?.products.filter((item) => item.category === "newarrivals");
        const bestSellers = data?.products.filter((item) => item.category === "bestsellers");
        
        if(isLoading) return <ProgressBar/>
        return (
                <Box width="80%" margin="80px auto">
                        <Typography variant="h3" textAlign="center">
                                Our featured <b>Products</b>
                        </Typography>
                        <Tabs
                                indicatorColor="primary"
                                value={value}
                                onChange={handleChange}
                                centered
                                TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
                                textColor="primary"
                                sx={{
                                        m: "25px",
                                        "& .MuiTabs-flexContainer": {
                                                flexWrap: "wrap",
                                        },
                                }}
                        >
                                <Tab label="all" value="all"></Tab>
                                <Tab label="New Arrivals" value="newarrivals"></Tab>
                                <Tab label="Top Rated" value="toprated"></Tab>
                                <Tab label="Best Sellers" value="bestsellers"></Tab>
                        </Tabs>
                        <Box
                        margin='0 auto'
                        display='grid'
                        gridTemplateColumns="repeat(auto-fill, 300px)" //each column will be 300px
                        justifyContent='space-around'
                        rowGap='20px'
                        columnGap='20px'
                        >
                                    {
                                    value==='all' && data?.products.map((item)=><Item item={item} key={item._id}></Item>)
                        }
                                    {
                                    value==='newarrivals' && newArrivals?.map((item)=><Item item={item} key={item._id}></Item>)
                        }
                                    {
                                    value==='bestsellers' && bestSellers?.map((item)=><Item item={item} key={item._id}></Item>)
                        }
                                    {
                                    value==='toprated' && topRatedItems?.map((item)=><Item item={item} key={item._id}></Item>)
                        }
                        </Box>
                       <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}><Pagination onChange={handleChangePage} count={data?.NumberofPages} renderItem={(item) => <PaginationItem {...item} size={"large"} />} /></Box>
                </Box>
        );
};

export default ShoppingList;
