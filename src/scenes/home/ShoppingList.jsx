import React from "react";
import { Box, Typography, Tabs, Tab, useMediaQuery } from "@mui/material";
import { useGetPoductQuery } from "../../state/productSlice";
import { useState } from "react";
import Item from "../global/Item";
const ShoppingList = () => {
        const [value, setValue] = useState("all");
        const handleChange = (event, newValue) => {
                setValue(newValue);
        };
        const isNonMobile = useMediaQuery("(min-width: 600px)");
        const { data, isLoading } = useGetPoductQuery();
        const topRatedItems = data?.filter((item) => item.category === "toprated");
        const newArrivals = data?.filter((item) => item.category === "newarrivals");
        const bestSellers = data?.filter((item) => item.category === "bestsellers");

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
                                    value==='all' && data?.map((item)=><Item item={item} key={item._id}></Item>)
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
                </Box>
        );
};

export default ShoppingList;
