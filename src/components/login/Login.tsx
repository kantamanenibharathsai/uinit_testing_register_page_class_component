import React, { Component } from 'react';
import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import registerPageStyles from "./Login.Styles";
import loginPageStyles from './Login.Styles';
import withRouter from '../../hoc/AuthHoc';
import { Link } from 'react-router-dom';

interface User {
    email: string,
    username: string,
    contactNumber: string,
    password: string
}

interface FormData {
    email: string;
    password: string;
    [key: string]: string;
}

interface State {
    isPasswordVisible: boolean;
    formData: FormData;
    errors: { [key: string]: string };
    successfulMsg: string;
}

interface MyProps {
    navigate: (path: string) => void;
}

class Login extends Component<MyProps, State> {
    state: State = {
        isPasswordVisible: false,
        formData: {
            email: '',
            password: ''
        },
        errors: {},
        successfulMsg: ''
    };

    passwordVisibleOrNotHandler = () => {
        this.setState(prevState => ({
            isPasswordVisible: !prevState.isPasswordVisible
        }));
    }

    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                [name]: value
            }
        }), () => {
            this.validateField(name, value);
        });
    }

    validateField = (fieldName: string, value: string) => {
        let errorMessage = '';
        switch (fieldName) {
            case 'email':
                errorMessage = value ? (this.validateEmail(value) ? '' : '*Invalid Email Address') : '*Email is required!';
                break;
            default:
                errorMessage = value ? (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}/.test(value) ? '' : '*Password must contain at least one uppercase letter, one lowercase letter, and one number, and must be between 6 and 15 characters long.') : '*Password is required!';
                break;

        }

        this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                [fieldName]: errorMessage
            }
        }));
    }

    validateEmail = (email: string) => {
        const regex = /^(([^<>()/[\]\\.,;:\s@"]+(\.[^<>()/[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }


    onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { formData } = this.state;

        const errors: { [key: string]: string } = {};
        Object.keys(formData).forEach(fieldName => {
            if (!formData[fieldName]) {
                errors[fieldName] = `*${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required!`;
            } else {
                this.validateField(fieldName, formData[fieldName]);
            }
        });

        const hasErrors = Object.values(errors).some(error => error !== '');

        if (!hasErrors) {
            let isUserExist = false;
            const usersList = JSON.parse(localStorage.getItem("usersList") || "null");
            usersList?.forEach((user: User) => {
                if (user.email === formData.email && user.password === formData.password) {
                    isUserExist = true;
                    localStorage.setItem("loggedInUser", JSON.stringify(user.email));
                }
            })
            if (isUserExist) this.props.navigate("/");
            else this.setState({ successfulMsg: '*Account does not exist. Please sign up.', errors: {} });
        } else {
            this.setState({ errors, successfulMsg: '' });
        }
    };


    // clickHereHandler = () => {
    //     this.props.navigate("/register");
    // }



    render() {
        // const loggedInUser = localStorage.getItem("loggedInUser");
        // if (loggedInUser && JSON.parse(loggedInUser) !== null) {
        //     this.props.navigate("/");
        // }

        const { isPasswordVisible, formData, errors, successfulMsg } = this.state;

        return (
            <Box sx={registerPageStyles.mainContainer}>
                <Box sx={registerPageStyles.cardContainer}>
                    <Typography sx={registerPageStyles.signUpText}>
                        Sign in
                    </Typography>
                    <Box component={"form"} data-testid="submit-form" sx={registerPageStyles.formContainer} onSubmit={this.onSubmit} noValidate autoComplete="off">
                        <Box sx={registerPageStyles.labelInputContainer}>
                            <Box component="label" htmlFor="Email" sx={registerPageStyles.labelText}>Enter your email</Box>
                            <TextField id="Email" fullWidth placeholder="Email Address" type="email" inputProps={{ "data-testid": "email-input" }}
                                sx={registerPageStyles.textFieldStyle}
                                onChange={this.handleInputChange}
                                value={formData.email}
                                name="email"

                            />
                            {errors.email && <Box data-testid="email-error" sx={registerPageStyles.errorText} component={"span"}>{errors.email}</Box>}
                        </Box>
                        <Box sx={registerPageStyles.labelInputContainer}>
                            <Box component="label" htmlFor="password" sx={registerPageStyles.labelText}>Enter your Password</Box>
                            <TextField inputProps={{ "data-testid": "password-input" }} name="password" sx={registerPageStyles.textFieldStyle} id="password" fullWidth placeholder="Password" type={isPasswordVisible ? "text" : "password"}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {isPasswordVisible ? <VisibilityIcon data-testid="visible-icon" sx={registerPageStyles.passwordIcon} onClick={this.passwordVisibleOrNotHandler} /> : <VisibilityOffIcon data-testid="visible-off-icon" sx={registerPageStyles.passwordIcon} onClick={this.passwordVisibleOrNotHandler} />}
                                        </InputAdornment>
                                    )
                                }}
                                onChange={this.handleInputChange}
                                value={formData.password}

                            />
                            {errors.password && <Box component={"span"} data-testid="password-error" sx={registerPageStyles.errorText}>{errors.password}</Box>}
                        </Box>
                        <Button data-testid="submit-button" disableElevation disableFocusRipple disableRipple disableTouchRipple sx={registerPageStyles.SignupButton} type="submit">Sign in</Button>
                    </Box>
                    {successfulMsg && (<Typography data-testid="Account-does-not-exist" sx={registerPageStyles.successfulMsg}>{successfulMsg}</Typography>)}
                    <Typography sx={loginPageStyles.dontHaveAccount}>Don't have an account?</Typography>
                    <Link to="/register" style={{ textDecoration: "none" }}>
                        <Typography data-testid="create-account-link" sx={loginPageStyles.clickHere}>Click here to create new account</Typography>
                    </Link>
                </Box>
            </Box>
        );
    }
}

export default withRouter(Login);
