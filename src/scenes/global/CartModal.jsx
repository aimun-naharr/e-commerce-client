import React from "react";
import { Box, Divider, Button, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/remove";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../state/cartSlice";

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
                                width="max(400px, 30%)" //max-width 400px, if it goes beyond that then it'll become 30% of it's parent div
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
                                                                </FlexBox>
                                                        </Box>
                                                ))}
                                        </Box>
                                </Box>
                        </Box>
                </Box>
        );
};

export default CartModal;
