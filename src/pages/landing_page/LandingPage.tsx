import { Avatar, Box, Button, InputLabel, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from "@mui/material";
import React, { ChangeEvent } from "react";
import landingPageStyles from "./LandingPage.Styles";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import withRouter from "../../hoc/AuthHoc";


interface State {
    imageFile: string;
}

interface MyProps {
    navigate: (path: string) => void;
}

class LandingPage extends React.Component<MyProps, State> {
    constructor(props: MyProps) {
        super(props);
        this.state = {
            imageFile: "",
        };
    }

    handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        this.setState({ imageFile: file ? URL.createObjectURL(file) : "" });

    };


    // handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     const files = event.target.files?.[0];
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         const imageurl = reader.result as string;
    //         this.setState({ imageFile: imageurl });
    //     };
    //     if (files) {
    //         reader.readAsDataURL(files);
    //     }
    // };

    handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        this.props.navigate("/login");
    }


    render() {
        const { imageFile } = this.state;


        const usersListArray = JSON.parse(localStorage.getItem("usersList") || "[]");

        // const userEmail = localStorage.getItem("loggedInUser");
        // console.log(userEmail)
        // if (userEmail) {
        //     const userEmailArray = JSON.parse(userEmail);
        //     console.log("userEmailArray", userEmailArray)
        //     usersListArray.forEach((eachUser: User) => {
        //         if (eachUser.email === userEmailArray) {
        //             userName = eachUser.username;
        //             console.log(eachUser.username, "username")
        //         }
        //     });
        // }


        return (
            <Box sx={landingPageStyles.mainContainer}>
                <Box sx={landingPageStyles.navContainer}>
                    <Box sx={landingPageStyles.navChildContainer}>
                        <Stack flexGrow={1} direction={"row"} alignItems={"center"} gap={3}>
                            <Box
                                sx={{
                                    // border: imageFile ? "none" : "dashed black 1px",
                                    ...landingPageStyles.imageBox,
                                }}
                            >

                                <Avatar
                                    component={"label"}
                                    htmlFor="upload"
                                    sx={landingPageStyles.image}
                                    src={imageFile}
                                ></Avatar>
                                <Box
                                    component={"input"}
                                    name="image"
                                    placeholder="choose file"
                                    type="file"
                                    id="upload"
                                    display={"none"}
                                    data-testid="file-input"
                                    // accept="image/png, image/gif, image/jpeg"
                                    onChange={this.handleImageChange}
                                />
                                <InputLabel data-testid="upload-label" htmlFor="upload" sx={landingPageStyles.InputLabel}>
                                    <AddAPhotoOutlinedIcon sx={landingPageStyles.addPhotoIcon} />
                                </InputLabel>
                            </Box>
                        </Stack>
                        <Button data-testid="logout" disableFocusRipple disableTouchRipple disableRipple disableElevation sx={landingPageStyles.logoutBtn} onClick={this.handleLogout}>Logout</Button>
                    </Box>
                </Box>
                <TableContainer component={Paper} sx={landingPageStyles.tableContainer}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={landingPageStyles.tableHeading} align="center">Register UsersId</TableCell>
                                <TableCell sx={landingPageStyles.tableHeading} align="center">UserName</TableCell>
                                <TableCell sx={landingPageStyles.tableHeading} align="center">Email</TableCell>
                                <TableCell sx={landingPageStyles.tableHeading} align="center">ContactNumber</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: "100px" }}
                            >
                                <TableCell align="center">1</TableCell>
                                <TableCell align="center">{usersListArray[0]?.username}</TableCell>
                                <TableCell align="center">{usersListArray[0]?.email}</TableCell>
                                <TableCell align="center">{usersListArray[0]?.contactNumber}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        )
    }
}


export default withRouter(LandingPage);