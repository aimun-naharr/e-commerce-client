import { Box, Button, IconButton, InputLabel, MenuItem, Select, Stack, TextField, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import { shades } from "../../theme";
import { usePostProductMutation } from "../../state/productSlice";

const AddProduct = () => {
	const [category, setCategory] = React.useState("");
	const [image, setImg] = React.useState(null);
	const [name, setName] = React.useState("");
	const [price, setPrice] = React.useState("");
	const [description, setDescription] = React.useState("");
	const [postProduct, { isError, isLoading, isSuccess, data, status }] = usePostProductMutation();
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const imageRef = React.useRef();
	const handleChange = (e) => {
		setCategory(e.target.value);
	};
	const onImageChange = (e) => {
		if (e.target.files[0]) {
			const file = e.target.files[0];
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				setImg(reader.result);
			};
		}
	};
	const handleSubmit = () => {
		if ((name, category, description, price, image)) {
			postProduct({name, category, description, price, image});
		}
	};
	if(isSuccess){
		return <p>Product added successfully</p>
	}
	
	return (
		<Box p={4} width="100%">
			<Typography variant="h5">Add a product</Typography>
			<Box width={isNonMobile ? "80%" : "100%"} sx={{ my: 4 }}>
				<Stack gap={2}>
					<Stack flexDirection={isNonMobile ? "row" : "column"} gap={2}>
						<TextField type="text" required label="Product Name" fullWidth onChange={(e) => setName(e.target.value)} />
						<TextField type="text" required label="Description" fullWidth onChange={(e) => setDescription(e.target.value)} />
					</Stack>
					<Stack flexDirection={isNonMobile ? "row" : "column"} gap={2}>
						<TextField select value={category} label="Categories" onChange={handleChange} fullWidth required>
							<MenuItem value={"newarrivals"}>New Arrivals</MenuItem>
							<MenuItem value={"toprated"}>Top Rated</MenuItem>
							<MenuItem value={"bestsellers"}>Best Sellers</MenuItem>
						</TextField>
						<TextField type="text" required label="Price" fullWidth onChange={(e) => setPrice(e.target.value)} />
					</Stack>
					<Stack>
						{image ? (
							<div style={{ positon: "relative" }}>
								<button onClick={() => setImg(null)} style={{ position: "absolute", backgroundColor: "whitesmoke", border: "none", cursor: "pointer" }}>
									X
								</button>
								<img width="200px" src={image} alt="previewImg" />
							</div>
						) : (
							<div
								onClick={() => imageRef.current.click()}
								style={{
									border: "1px dashed",
									height: "100px",
									width: "100%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									cursor: "pointer",
								}}
							>
								{" "}
								<ImageIcon sx={{ fontSize: 30 }} />
								<Typography variant="h4">Upload image</Typography>
							</div>
						)}
						<input type="file" style={{ display: "none" }} ref={imageRef} onChange={onImageChange} />
					</Stack>
					<Button
						type="submit"
						onClick={handleSubmit}
						fullwidth
						disabled={isLoading}
						sx={{ backgroundColor: shades.primary[400], color: "#fff", "&:hover": { backgroundColor: shades.primary[500] } }}
					>
						{isLoading ? 'Adding': 'Add'}
					</Button>
				</Stack>
			</Box>
		</Box>
	);
};

export default AddProduct;
