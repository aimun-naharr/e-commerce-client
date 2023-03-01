import { Add, FavoriteBorderOutlined, Remove } from "@mui/icons-material";
import { Box, Button, IconButton, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../state/cartSlice";
import { useGetOnePoductQuery, useGetPoductQuery } from "../../state/productSlice";
import { shades } from "../../theme";
import Item from "../global/Item";

const ItemDetail = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const [value, setValue] = useState("description");
	const [count, setCount] = useState(1);
	console.log(count)
	
	const products= useGetPoductQuery();
	const { data, error, isLoading } = useGetOnePoductQuery(id);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box width="80%" m="80px auto">
			<Box display={"flex"} flexWrap={"wrap"} columnGap={1} alignItems="center">
				<Box flex="1 1 40%" mb="40px">
					<img width={"80%"} src={data?.image} alt={data?.name} style={{ objectFit: "contain" }} />
				</Box>
				<Box flex="1 1 40%" mb="40px">
					<Stack direction="row" justifyContent={"space-between"}>
						<Typography>Home/item</Typography>
						<Typography>prev/next</Typography>
					</Stack>
					{/* item name, price and description */}
					<Stack>
						<Stack direction={"row"} justifyContent={"space-between"} alignItems="center" mt={1} flexWrap="wrap">
							<Typography variant="h3">{data?.name}</Typography>
							<Typography variant="h1">${data?.price}</Typography>
						</Stack>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, possimus! Maiores deleniti at doloribus, temporibus adipisci tempora, saepe illo
							itaque quibusdam magni possimus quidem consequuntur accusamus eius odio quos nesciunt ipsum distinctio, dolores beatae minima ipsa. Cumque non,
							incidunt dolorum, sequi sit quas itaque repellat ipsa id fugiat molestias nesciunt?
						</Typography>
					</Stack>
					<Stack direction="row" mt={2} spacing={2}>
						<Stack direction="row" alignItems="center" border="1px solid">
							<IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
								<Remove />
							</IconButton>
							<Typography color={shades.primary[300]}>{count}</Typography>
							<IconButton onClick={() => setCount((prev) => prev + 1)}>
								<Add />
							</IconButton>
						</Stack>
						<Button onClick={() => dispatch(addToCart({ item: { ...data, count } }))} sx={{ backgroundColor: "#222222", color: "#fff", minWidth: "150px" }}>
							ADD To cart
						</Button>
					</Stack>
					<Stack mt={2}>
						<Button variant="outlined" startIcon={<FavoriteBorderOutlined />}>
							Add to wishlist
						</Button>
						<Typography mt={2}>{data?.category}</Typography>
					</Stack>
				</Box>
			</Box>
			<Box m="20px 0">
				<Tabs value={value} onChange={handleChange}>
					<Tab label="Descripiton" value="description" />
					<Tab label="Reviews" value="reviews" />
				</Tabs>
			</Box>
			<Stack>
				{value === "description" && (
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, possimus! Maiores deleniti at doloribus, temporibus adipisci tempora, saepe illo itaque
						quibusdam magni possimus quidem consequuntur accusamus eius odio quos nesciunt ipsum distinctio, dolores beatae minima ipsa. Cumque non, incidunt
						dolorum, sequi sit quas itaque repellat ipsa id fugiat molestias nesciunt?
					</Typography>
				)}
				{value === "reviews" && <div>Reviews are under construction</div>}
			</Stack>
			{/* related products */}
			<Box mt="50px" width="100%">
				<Typography variant="h3" fontWeight="bold">
					Related Products
				</Typography>
				<Box mt="20px" display="flex" flexWrap="wrap" columnGap="1.33%" justifyContent="space-between">
					{products.data?.slice(0, 4).map((item, i) => (
						<Item key={`${item.name}-${i}`} item={item} />
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default ItemDetail;
