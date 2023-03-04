import { Box, Button, IconButton, InputLabel, MenuItem, Select, Stack, TextField, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import ImageIcon from '@mui/icons-material/Image';
import { shades } from "../../theme";

const AddProduct = () => {
	const [category, setCategory] = React.useState("");
	const [img, setImg] = React.useState(null);
	const isNonMobile = useMediaQuery("(min-width:600px)");
    const imageRef=React.useRef()
    console.log(imageRef)
	const handleChange = (e) => {
       
        setCategory(e.target.value)
    };
    const onImageChange=(e)=>{
       if(e.target.files[0]){
        setImg(e.target.files[0])
       }
    }
	return (
		<Box p={4} width="100%">
			<Typography variant="h5">Add a product</Typography>
			<Box width={isNonMobile ? "80%" : "100%"} sx={{ my: 4 }}>
				<Stack gap={2}>
					<Stack flexDirection={isNonMobile ? "row" : "column"} gap={2}>
						<TextField type="text" required label="Product Name" fullWidth />
						<TextField type="text" required label="Description" fullWidth />
					</Stack>
					<Stack flexDirection={isNonMobile ? "row" : "column"} gap={2}>
						<TextField select value={category}  label="Categories" onChange={handleChange} fullWidth>
							<MenuItem value={'newArrivals'}>New Arrivals</MenuItem>
							<MenuItem value={'topRated'}>Top Rated</MenuItem>
							<MenuItem value={'bestSellers'}>Best Sellers</MenuItem>
						</TextField>
						<TextField type="text" required label="Price" fullWidth />
					</Stack>
                    <Stack>
                        {
                            img ?  <div style={{positon: 'relative'}}>
                             <button onClick={()=>setImg(null)} style={{position: 'absolute', backgroundColor: 'whitesmoke', border: 'none', cursor: 'pointer'}}>X</button>
                                <img height='200px' width='200px' src={URL.createObjectURL(img)} alt='previewImg'/>
                            </div>: <div onClick={() => imageRef.current.click()} style={{border: '1px dashed', height: '100px' , width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}> <ImageIcon sx={{ fontSize: 30 }}/><Typography variant="h4">Upload image</Typography></div>
                        }
                        <input type='file' style={{display: 'none'}} ref={imageRef} onChange={onImageChange}/>
                    </Stack>
                <Button fullwidth sx={{backgroundColor: shades.primary[400], color: '#fff' ,"&:hover":{ backgroundColor: shades.primary[500]}}}>Add</Button>
				</Stack>
			</Box>
		</Box>
	);
};

export default AddProduct;
