import { Button,  Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import TextFieldWrapper from "./TextFieldWrapper";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { shades } from "../../theme";
import { Link } from "react-router-dom";
import { useRegisterUserMutation } from "../../state/userSlice";
const SignUpScreen = () => {

	const isNonMobile = useMediaQuery("(min-width:600px)");
	const [createNewUser, {isError, isLoading, isSuccess, data, status}]=useRegisterUserMutation()

	const initialStates = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	};
	const formValidation = Yup.object().shape({
		email: Yup.string().email().required("Email is required"),
		firstName: Yup.string().min(3, "Too Short").required("First Name is required"),
		lastName: Yup.string().min(3, "Too Short").required("Last Name is required"),
		password: Yup.string().min(5, "Too Short").required("Password is required"),
	});
	const handleSubmit = (values, {resetForm}) => {
		createNewUser(values)
		resetForm()
	};
	if(isSuccess){
		localStorage.setItem('token', JSON.stringify(data.token))
		localStorage.setItem('user', JSON.stringify(data.user))
		return<Navigate to="/" replace={true} />
	}
	return (
		<Stack sx={{ m: "90px auto" }} width={isNonMobile ? "40%" : "90%"}>
			<Stack>
				<Typography variant="h2">Sign up</Typography>
				<Formik initialValues={{ ...initialStates }} validationSchema={formValidation} onSubmit={handleSubmit}>
					<Form>
						<Stack spacing={3} sx={{ my: 5 }}>
							<Stack gap={2} flexDirection={'row'}  alignItems='center' justifyContent={'center'}>
								{" "}
								<TextFieldWrapper name="firstName" label="First Name" type="text" />
								<TextFieldWrapper name="lastName" label="Last Name" type="text" />
							</Stack>
							<TextFieldWrapper name="email" label="Email" type="email" />
							<TextFieldWrapper name="password" label="Password" type="password" />
							<Stack>
								<Link to='/login'>Already have an account? Login now</Link>{" "}
							</Stack>
							<Button
								type="submit"
								fullWidth
								sx={{ backgroundColor: shades.primary[400], color: "#fff", "&:hover": { backgroundColor: shades.primary[500] } }}
							>
								{isLoading? 'Please wait...': 'Sign up'}
							</Button>
						</Stack>
					</Form>
				</Formik>
			</Stack>
		</Stack>
	);
};

export default SignUpScreen;
