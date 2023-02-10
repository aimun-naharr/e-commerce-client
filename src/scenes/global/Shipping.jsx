import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";
import Form from "./FormsUI/Form";

const Shipping = ({ values, errors, touched, handleBlur, handleChange, setFieldValue }) => {
	return (
		<Box sx={{ m: "30px auto" }}>
			<Box>
				<Typography sx={{ mb: "15px" }} fontSize="18px">
					Billing Information
				</Typography>
				<Form type="billingAddress" value={values.billingAddress} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange}/>
			</Box>
			<Box>
				<FormControlLabel
					label="Same for Shipping Address"
					control={
						<Checkbox
							defaultChecked
							values={values.shippingAddress.isSameAddress}
							onChange={() => {
								setFieldValue("shippingAddress.isSameAddress", !values.shippingAddress.isSameAddress);
							}}
						/>
					}
				/>
			</Box>
            {
                !values.shippingAddress.isSameAddress && <Box>
                    <Typography sx={{ mb: "15px" }} fontSize="18px">
					Shipping Information
				</Typography>
                    <Form type="shippingAddress" values={values.billingAddress} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange}/>
                    </Box>
            }

		</Box>
	);
};

export default Shipping;
