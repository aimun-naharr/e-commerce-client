import React from "react";
import { IconButton, Typography, Box, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/material/add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { useDispatch } from "react-redux";
import { addToCart } from "../../state/cartSlice";
const Item = ({ item, width }) => {
        const [count, setCount] = useState(0);
        const dispatch=useDispatch()
        const [isHovered, setIsHovered] = useState(false);
        const {
                palette: { neutral },
        } = useTheme();
        const navigate = useNavigate();
        return (
                <Box width={width}>
                        <Box position="relative" onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
                                <img src={item.img} alt={item.name} width="300px" style={{ cursor: "pointer" }} height="400px" onClick={() => navigate(`/item/${item._id}`)} />
                                <Box position="absolute" bottom="10%" left="0" width="100%" padding="0 5%" display={isHovered ? "block" : "none"}>
                                        <Box display="flex" justifyContent="space-between">
                                                {/* Amount */}
                                                <Box backgroundColor={shades.neutral[100]} display="flex" alignItems="center" borderRadius="3px">
                                                        <IconButton onClick={()=>setCount(Math.max(count, -1, 1))}>
                                                                <RemoveIcon />
                                                        </IconButton>
                                                        <Typography color={shades.primary[300]}>{count}</Typography>
                                                        <IconButton onClick={count +1}>
                                                                <AddIcon />
                                                        </IconButton>
                                                </Box>
                                                {/* Add to cart button */}
                                                <Button sx={{backgroundColor: shades.primary[300], color: 'white'}} onClick={()=>dispatch(addToCart({item: {...item, count}}))}>Add to cart</Button>
                                        </Box>
                                </Box>
                        </Box>
                        <Box mt='3px'>
                                <Typography variant='subtitle2' color={neutral.dark}>{category}  </Typography>
                                <Typography >{name}  </Typography>
                                <Typography fontWeight='bold'>${price}  </Typography>
                        </Box>
                </Box>
        );
};

export default Item;
