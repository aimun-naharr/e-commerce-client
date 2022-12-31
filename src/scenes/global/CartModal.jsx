import React from "react";
import { Box, Divider, Button, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/remove";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount, removeFromCart, setIsCartOpen } from "../../state/cartSlice";
import { shades } from "../../theme";

const FlexBox = styled(Box)`
        display: flex;
        justify-content: space-between;
        align-items: center;
`;
const CartModal = () => {
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const cart = useSelector((state) => state.cart.cart);
        const isCartOpen = useSelector((state) => state.cart.isCartOpen);
        console.log(isCartOpen);

        const totalPrice = cart.reduce((total, item) => {
                return total + item.count * item.totalPrice;
        }, 0);

        return (
                <Box //Overlay
                        display={isCartOpen ? "block" : "none"}
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
                                width="max(350px, 30%)" //max-width 400px, if it goes beyond that then it'll become 30% of it's parent div
                                height="100%"
                                backgroundColor="white"
                        >
                                <Box padding="30px" overflow="auto" height="100%">
                                        {/* header */}
                                        <FlexBox marginBottom="15px">
                                                <Typography variant="h3"> Shopping Bag ({cart.length})</Typography>
                                                <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
                                                        <CloseIcon />
                                                </IconButton>
                                        </FlexBox>
                                        {/* cart items */}
                                        <Box>
                                                {cart.map((item) => (
                                                        <Box key={item._id}>
                                                                <FlexBox p="15px 0">
                                                                        <Box flex="1 1 40%">
                                                                                <img src={item?.img} alt="" width="123px" height="164px" />
                                                                        </Box>
                                                                        <Box flex="1 1 60%">
                                                                                {/* item name */}
                                                                                <FlexBox mb="5px">
                                                                                        <Typography fontWeight="bold">{item.name}</Typography>
                                                                                        <IconButton onClick={() => dispatch(removeFromCart(item))}>
                                                                                                <CloseIcon />
                                                                                        </IconButton>
                                                                                </FlexBox>
                                                                                <Typography>{item?.shortDescription}</Typography>
                                                                                {/* Amout div */}
                                                                                <FlexBox m="15px 0">
                                                                                        <Box display="flex" alignItems="cneter" border={`1.5px solid ${shades.neutral[500]}`}>
                                                                                                <IconButton onClick={dispatch(decreaseCount(item))}>
                                                                                                        <RemoveIcon />
                                                                                                </IconButton>
                                                                                                <Typography>{item?.count}</Typography>
                                                                                                <IconButton onClick={dispatch(increaseCount(item))}>
                                                                                                        <AddIcon />
                                                                                                </IconButton>
                                                                                        </Box>
                                                                                </FlexBox>

                                                                                {/* price */}
                                                                                <Typography fontWeight="bold">{item?.price}</Typography>
                                                                        </Box>
                                                                </FlexBox>
                                                                <Divider />
                                                        </Box>
                                                ))}
                                        </Box>
                                        {/* actions */}
                                        <Box m="20px 0">
                                                <FlexBox m="20px 0">
                                                        <Typography fontWeight="bold">SUBTOTAL</Typography>
                                                        <Typography fontWeight="bold">{totalPrice}</Typography>
                                                </FlexBox>
                                                <Button sx={{backgroundColor: shades.primary[400], color: 'white', borderRadius: 0, minWidth: '100%', m: '20px 0'}} onClick={()=>{navigate('/checkout')
                                        dispatch(setIsCartOpen({}))}}>Checkout</Button>
                                        </Box>
                                </Box>
                        </Box>
                </Box>
        );
};

export default CartModal;
