import { Box,  TableCell, TableRow, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useGetAllUsersQuery } from "../../state/userSlice";
import BasicTable from "../global/BasicTable";
import ProgressBar from "../global/ProgressBar";



const AllUsers = () => {
	const user = useSelector((state) => state.auth.userInfo);
    const {data, isLoading}=useGetAllUsersQuery()
    if(isLoading){
        return <ProgressBar/>
    }
	const tableHeader = ["First Name", "Last Name", "Email", "Role", "Actions"];
    const handleDelete=(id)=>{
// console.log(id)
    }
	return (
		<Box p={4} width="100%">
			<Typography variant="h2">Welcome, {user?.firstName}</Typography>
			<Box width={"100%"} sx={{ my: 4 }}>
				<BasicTable tableHeader={tableHeader}>
					{data.map((row, index) => (
						<TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							<TableCell sx={{ fontSize: "13px" }}>{row.firstName}</TableCell>
							<TableCell sx={{ fontSize: "13px" }}>{row.lastName}</TableCell>
							<TableCell align="left" sx={{ fontSize: "13px" }}>
								{row.email}
							</TableCell>
							<TableCell align="left" sx={{ fontSize: "13px" }}>
								{row.role}
							</TableCell>

							<TableCell align="left" sx={{ fontSize: "13px" }}>
								<Typography variant="subtitle2" gutterBottom>
									<Typography
										onClick={() => handleAction("edit")}
										sx={{fontWeight: "bold", cursor: "pointer", backgroundColor: "green", color: "white", px: 1, py: 1, borderRadius: 1 }}
										variant="span"
										gutterBottom
									>
										Edit
									</Typography>
									<Typography sx={{ ml: 1, mr: 1 }} variant="span" gutterBottom>
										|
									</Typography>
									<Typography
										onClick={() => handleDelete("delete")}
										sx={{ fontWeight: "bold", cursor: "pointer", backgroundColor: "red", color: "white", px: 1, py: 1, borderRadius: 1 }}
										variant="span"
										gutterBottom
									>
										Delete
									</Typography>
								</Typography>
							</TableCell>
						</TableRow>
					))}
				</BasicTable>
			</Box>
		</Box>
	);
};

export default AllUsers;
