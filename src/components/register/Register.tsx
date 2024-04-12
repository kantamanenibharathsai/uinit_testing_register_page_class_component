// import React, { Component } from 'react';
// import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import registerPageStyles from "./Register.Styles";

// interface FormData {
//     email: string;
//     username: string;
//     contactNumber: string;
//     password: string;
// }

// interface State {
//     isPasswordVisible: boolean;
//     errors: { [key: string]: string };
//     successfulMsg: string;
// }

// class Register extends Component<{}, State> {
//     state: State = {
//         isPasswordVisible: false,
//         errors: {},
//         successfulMsg: ''
//     };

//     passwordVisibleOrNotHandler = () => {
//         this.setState(prevState => ({
//             isPasswordVisible: !prevState.isPasswordVisible
//         }));
//     }

//     onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const form = e.currentTarget;
//         const formData: FormData = {
//             email: (form.elements.namedItem('Email') as HTMLInputElement).value || '',
//             username: (form.elements.namedItem('username') as HTMLInputElement).value || '',
//             contactNumber: (form.elements.namedItem('contactNumber') as HTMLInputElement).value || '',
//             password: (form.elements.namedItem('password') as HTMLInputElement).value || ''
//         };

//         const errors: { [key: string]: string } = {};
//         if (!formData.email) {
//             errors.email = "*Email is required!";
//         } else if (!/^(([^<>()/[\]\\.,;:\s@"]+(\.[^<>()/[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formData.email)) {
//             errors.email = "*Invalid Email Address";
//         }
//         if (!formData.username) {
//             errors.username = "*Username is required!";
//         }

//         if (!formData.contactNumber) {
//             errors.contactNumber = "*Contact number is required!";
//         } else if (formData.contactNumber.length !== 10 || !/^\d+$/.test(formData.contactNumber)) {
//             errors.contactNumber = "*Contact number must be a valid 10-digit number!";
//         }
//         if (!formData.password) {
//             errors.password = "*Password is required!";
//         } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}/.test(formData.password)) {
//             errors.password = "*Password must contain at least one uppercase letter, one lowercase letter, and one number, and must be between 6 and 15 characters long.";
//         }

//         if (Object.keys(errors).length === 0) {
//             console.table(formData);
//             this.setState({ successfulMsg: 'Registration Successful', errors: {} });
//         } else {
//             this.setState({ errors, successfulMsg: "" });
//         }
//     };

//     render() {
//         const { isPasswordVisible, errors, successfulMsg } = this.state;

//         return (
//             <Box sx={registerPageStyles.mainContainer}>
//                 <Box sx={registerPageStyles.cardContainer}>
//                     <Typography sx={registerPageStyles.signUpText}>
//                         Sign up
//                     </Typography>
//                     <Box component={"form"} data-testid="submit-form" sx={registerPageStyles.formContainer} onSubmit={this.onSubmit} noValidate autoComplete="off">
//                         <Box sx={registerPageStyles.labelInputContainer}>
//                             <Box component="label" htmlFor="Email" sx={registerPageStyles.labelText}>Enter your email</Box>
//                             <TextField id="Email" fullWidth placeholder="Email Address" type="email" data-testid="email-input"
//                                 sx={registerPageStyles.textFieldStyle}
//                             />
//                             {errors.email && <Box data-testid="email-error" sx={registerPageStyles.errorText} component={"span"}>{errors.email}</Box>}
//                         </Box>
//                         <Box sx={registerPageStyles.labelInputContainer}>
//                             <Box component="label" htmlFor="username" sx={registerPageStyles.labelText}>User name</Box>
//                             <TextField id="username" fullWidth placeholder="User name"
//                                 sx={registerPageStyles.textFieldStyle}
//                                 data-testid="username-input"
//                             />
//                             {errors.username && <Box data-testid="username-error" sx={registerPageStyles.errorText} component={"span"}>{errors.username}</Box>}
//                         </Box>
//                         <Box sx={registerPageStyles.labelInputContainer}>
//                             <Box component="label" htmlFor="contactNumber" sx={registerPageStyles.labelText}>Contact Number</Box>
//                             <TextField data-testid="contactNumber-input" sx={registerPageStyles.textFieldStyle} id="contactNumber" fullWidth placeholder="Contact Number" type="number" />
//                             {errors.contactNumber && <Box component={"span"} sx={registerPageStyles.errorText}>{errors.contactNumber}</Box>}
//                         </Box>
//                         <Box sx={registerPageStyles.labelInputContainer}>
//                             <Box component="label" htmlFor="password" sx={registerPageStyles.labelText}>Enter your Password</Box>
//                             <TextField data-testid="password-input" sx={registerPageStyles.textFieldStyle} id="password" fullWidth placeholder="Password" type={isPasswordVisible ? "text" : "password"}
//                                 InputProps={{
//                                     endAdornment: (
//                                         <InputAdornment position="end">
//                                             {isPasswordVisible ? <VisibilityIcon sx={registerPageStyles.passwordIcon} onClick={this.passwordVisibleOrNotHandler} /> : <VisibilityOffIcon sx={registerPageStyles.passwordIcon} onClick={this.passwordVisibleOrNotHandler} />}
//                                         </InputAdornment>
//                                     )
//                                 }} />
//                             {errors.password && <Box component={"span"} sx={registerPageStyles.errorText}>{errors.password}</Box>}
//                         </Box>
//                         <Button disableElevation disableFocusRipple disableRipple disableTouchRipple sx={registerPageStyles.SignupButton} type="submit">Sign up</Button>
//                     </Box>
//                     {successfulMsg && (<Typography sx={registerPageStyles.successfulMsg}>{successfulMsg}</Typography>)}
//                 </Box>
//             </Box>
//         );
//     }
// }

// export default Register;


import React, { Component } from 'react';
import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import registerPageStyles from "./Register.Styles";

interface FormData {
    email: string;
    username: string;
    contactNumber: string;
    password: string;
    [key: string]: string; 
}

interface State {
    isPasswordVisible: boolean;
    formData: FormData;
    errors: { [key: string]: string };
    successfulMsg: string;
}

class Register extends Component<{}, State> {
    state: State = {
        isPasswordVisible: false,
        formData: {
            email: '',
            username: '',
            contactNumber: '',
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
            case 'username':
                errorMessage = value ? (value.length >= 5 && value.length <= 100 ? '' : '*Username should be between 5 and 100 characters!') : '*Username is required!';
                break;
            case 'contactNumber':
                errorMessage = value ? (/^\d{10}$/.test(value) ? '' : '*Contact number must be a valid 10-digit number!') : '*Contact number is required!';
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
            this.setState({ successfulMsg: 'Registration Successful', errors: {} });
        } else {
            this.setState({ errors, successfulMsg: '' });
        }
    };



    render() {
        const { isPasswordVisible, formData, errors, successfulMsg } = this.state;

        return (
            <Box sx={registerPageStyles.mainContainer}>
                <Box sx={registerPageStyles.cardContainer}>
                    <Typography sx={registerPageStyles.signUpText}>
                        Sign up
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
                            <Box component="label" htmlFor="username" sx={registerPageStyles.labelText}>User name</Box>
                            <TextField id="username" fullWidth placeholder="User name"
                                sx={registerPageStyles.textFieldStyle}
                                onChange={this.handleInputChange}
                                value={formData.username}
                                name="username"
                                inputProps={{ "data-testid": "username-input" }}

                            />
                            {errors.username && <Box data-testid="username-error" sx={registerPageStyles.errorText} component={"span"}>{errors.username}</Box>}
                        </Box>
                        <Box sx={registerPageStyles.labelInputContainer}>
                            <Box component="label" htmlFor="contactNumber" sx={registerPageStyles.labelText}>Contact Number</Box>
                            <TextField inputProps={{ "data-testid": "contactNumber-input" }} sx={registerPageStyles.textFieldStyle} id="contactNumber" fullWidth placeholder="Contact Number" type="number"
                                onChange={this.handleInputChange}
                                value={formData.contactNumber}
                                name="contactNumber"

                            />
                            {errors.contactNumber && <Box component={"span"} data-testid="contactNumber-error" sx={registerPageStyles.errorText}>{errors.contactNumber}</Box>}
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
                        <Button data-testid="submit-button" disableElevation disableFocusRipple disableRipple disableTouchRipple sx={registerPageStyles.SignupButton} type="submit">Sign up</Button>
                    </Box>
                    {successfulMsg && (<Typography sx={registerPageStyles.successfulMsg}>{successfulMsg}</Typography>)}
                </Box>
            </Box>
        );
    }
}

export default Register;
