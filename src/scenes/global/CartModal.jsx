import React from "react";
import { Box, Divider, Button, IconButton, Typography } from "@mui/material";
import { Close, Add, Remove } from "@mui/icons-material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount, removeFromCart, setIsCartOpen } from "../../state/cartSlice";
import { shades } from "../../theme";
import CartItem from "./CartItem";

export const FlexBox = styled(Box)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const CartModal = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.cart);
	const totalPrice = cart.reduce((total, item) => {
		return total + (item.count * item.price);
	}, 0);

	return (
		<Box //Overlay
			backgroundColor="rgba(0, 0, 0, 0.4)"
			position="fixed"
			zIndex={10}
			width="100%"
			height="100%"
			left="0"
			top="0"
			overflow="auto"
		>
			{/* Modal */}
			<Box
				position="fixed"
				right="0"
				top="0"
				width="max(450px, 30%)" //max-width 400px, if it goes beyond that then it'll become 30% of it's parent div
				height="100%"
				backgroundColor="white"
			>
				<Box padding="30px" overflow="auto" height="100%">
					{/* header */}
					<FlexBox marginBottom="15px">
						<Typography variant="h3"> Shopping Bag ({cart.length})</Typography>
						<IconButton onClick={() => dispatch(setIsCartOpen({}))}>
							<Close />
						</IconButton>
					</FlexBox>
					{/* cart items */}
					{
						!cart.length ? <Box><Typography>Please add some products first</Typography></Box>:<>
						<Box>
						{cart.map((item) => (
							<CartItem item={item} key={item._id} />
						))}
					</Box>
					{/* actions */}
					<Box m="20px 0">
						<FlexBox m="20px 0">
							<Typography fontWeight="bold">SUBTOTAL</Typography>
							<Typography fontWeight="bold">${totalPrice}</Typography>
						</FlexBox>
						<Button
							sx={{ backgroundColor: shades.primary[400], color: "white", borderRadius: 0, minWidth: "100%", m: "20px 0" }}
							onClick={() => {
								navigate("/checkout");
								dispatch(setIsCartOpen({}));
							}}
						>
							Checkout
						</Button>
					</Box></>
					}
				</Box>
			</Box>
		</Box>
	);
};

export default CartModal;
