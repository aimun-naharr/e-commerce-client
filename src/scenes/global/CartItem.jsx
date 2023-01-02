import React from "react";
import { Box, Divider, Button, IconButton, Typography } from "@mui/material";
import { Close, Add, Remove } from "@mui/icons-material";
import { shades } from "../../theme";
import { FlexBox } from "./CartModal";
const CartItem = ({item}) => {
	return (
		<Box>
			<FlexBox p="15px 0">
				<Box flex="1 1 40%">
					<img src={item?.image} alt="" width="123px" height="164px" />
				</Box>
				<Box flex="1 1 60%">
					{/* item name */}
					<FlexBox mb="5px">
						<Typography fontWeight="bold">{item.name}</Typography>
						<IconButton onClick={() => dispatch(removeFromCart(item))}>
							<Close />
						</IconButton>
					</FlexBox>
					<Typography>{item?.description}</Typography>
					{/* Amout div */}
					<FlexBox m="15px 0">
						<Box display="flex" alignItems="center" border={`1.5px solid ${shades.neutral[500]}`}>
							<IconButton onClick={() => dispatch(decreaseCount(item))}>
								<Remove />
							</IconButton>
							<Typography>{item?.count}</Typography>
							<IconButton onClick={() => dispatch(increaseCount(item))}>
								<Add />
							</IconButton>
						</Box>
					</FlexBox>
					{/* price */}
					<Typography fontWeight="bold">${item?.price}</Typography>
				</Box>
			</FlexBox>
			<Divider />
		</Box>
	);
};

export default CartItem;
