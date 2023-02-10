import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import Shipping from "../global/Shipping";
import { shades } from "../../theme";
const Checkout = () => {
	const [activeStep, setActiveStep] = useState(0);
	const cart = useSelector((state) => state.cart.cart);
	const isFirstStep = activeStep === 0;
	const isSecondStep = activeStep === 1;
	const initialStates = {
		billingAddress: {
			firstName: "",
			lastName: "",
			country: "",
			state: "",
			zipCode: "",
			street1: "",
			street2: "",
		},
		shippingAddress: {
			isSameAddress: true,
			firstName: "",
			lastName: "",
			country: "",
			state: "",
			zipCode: "",
			street1: "",
			street2: "",
		},
		email: "",
		phoneNumber: "",
	};

	const formValidation = [
		Yup.object().shape({
			billingAddress: Yup.object().shape({
				firstName: Yup.string().min(3, "Too Short!").required("required"),
				lastName: Yup.string().required("required"),
				state: Yup.string().required("required"),
				country: Yup.string().required("required"),
				zipCode: Yup.string().required("required"),
				street1: Yup.string().required("required"),
				street2: Yup.string(),
			}),
			shippingAddress: Yup.object().shape({
				isSameAddress: Yup.boolean(),
				firstName: Yup.string()
					.min(3, "Too Short!")
					.when("isSameAddress", {
						is: false,
						then: Yup.string().required("required"),
					}),
				lastName: Yup.string().when("isSameAddress", {
					is: false,
					then: Yup.string().required("required"),
				}),
				state: Yup.string().when("isSameAddress", {
					is: false,
					then: Yup.string().required("required"),
				}),
				country: Yup.string().when("isSameAddress", {
					is: false,
					then: Yup.string().required("required"),
				}),
				zipCode: Yup.string().when("isSameAddress", {
					is: false,
					then: Yup.string().required("required"),
				}),
				street1: Yup.string().when("isSameAddress", {
					is: false,
					then: Yup.string().required("required"),
				}),
				street2: Yup.string(),
			}),
		}),
		Yup.object().shape({
			email: Yup.string().required("required"),
			phone: Yup.string().required("required"),
		}),
	];
	const handleFormSubmit = async (values, actions) => {
		setActiveStep(activeStep + 1);
		//copy the billingaddress to shippingaddress
		if(isFirstStep && values.shippingAddress.isSameAddress){
			actions.setFieldValue('shippingAddress',{
				...values.billingAddress,
				isSameAddress: true
			})
		}
		actions.setTouched({})
	};
	return (
		<Box width="80%" sx={{ m: "100px auto" }}>
			<Stepper activeStep={activeStep} sx={{ m: "10px auto" }}>
				<Step>
					<StepLabel>Billing</StepLabel>
				</Step>
				<Step>
					<StepLabel>payment</StepLabel>
				</Step>
			</Stepper>
			<Box>
				<Formik initialValues={{ ...initialStates }} validationSchema={formValidation[activeStep]} onSubmit={handleFormSubmit}>
					{({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue }) => (
						<form onSubmit={handleSubmit}>
							{isFirstStep && (
								<Shipping
									values={values}
									errors={errors}
									touched={touched}
									handleBlur={handleBlur}
									handleChange={handleChange}
									handleSubmit={handleSubmit}
									setFieldValue={setFieldValue}
								/>
							)}
					<Box><Button variant='primary' type='submit' fullWidth sx={{backgroundColor: shades.primary[400], color: '#fff'}}>Submit</Button></Box>
						</form>
					)}
				</Formik>
			</Box>
		</Box>
	);
};

export default Checkout;
