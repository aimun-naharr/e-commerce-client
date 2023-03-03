import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import TextFieldWrapper from "./TextFieldWrapper";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { shades } from "../../theme";
import { Link } from "react-router-dom";
import { useLoginUserMutation } from "../../state/userSlice";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../state/authSlice";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const dispatch=useDispatch()
	const navigate=useNavigate()
	const [loginUser, { isError, isLoading, isSuccess, data, status }] = useLoginUserMutation();
	const auth=useSelector(state=>state.auth)
		if(isSuccess) {
			dispatch(setUser(data))
		}


	const initialStates = {
		email: "",
		password: "",
	};

	const formValidation = Yup.object().shape({
		email: Yup.string().email().required("Email is required"),
		password: Yup.string().min(5, "Too Short").required("Password is required"),
	});
	const handleSubmit = (values, { resetForm }) => {
		loginUser(values);
		resetForm();
	};
	// if(data || !isLoading) {
		
	// }
	let from = location.state?.from?.pathname || "/";
	if(auth.userInfo){
		navigate(from, { replace: true })
	}

	return (
		<Stack sx={{ m: "90px auto" }} width={isNonMobile ? "40%" : "90%"}>
			<Stack>
				<Typography variant="h2">Login</Typography>
				<Formik initialValues={{ ...initialStates }} validationSchema={formValidation} onSubmit={handleSubmit}>
					<Form>
						<Stack spacing={3} sx={{ my: 5 }}>
							<TextFieldWrapper name="email" label="Email" type="email" />
							<TextFieldWrapper name="password" label="Password" type="password" />
							<Stack>
								<Link to="/sign-up">New to TrendWear? Sign up now</Link>{" "}
							</Stack>
							<Button
								type="submit"
								fullWidth
								sx={{ backgroundColor: shades.primary[400], color: "#fff", "&:hover": { backgroundColor: shades.primary[500] } }}
							>
								{isLoading ? "Please wait..." : "Login"}
							</Button>
						</Stack>
					</Form>
				</Formik>
			</Stack>
		</Stack>
	);
};

export default LoginScreen;
