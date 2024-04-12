import { fireEvent, render, screen, } from "@testing-library/react";
import Register from "../Register";


describe("Register", () => {

    test('submit form with invalid username', () => {
       render(<Register />);

        const textField = screen.getByTestId("username-input");
        fireEvent.change(textField, { target: { value: "" } });
        expect(textField).toHaveValue("");

        const textField1 = screen.getByTestId("username-input");
        fireEvent.change(textField1, { target: { value: "bharath" } });
        expect(textField1).toHaveValue("bharath");

        const textField2 = screen.getByTestId("username-input");
        fireEvent.change(textField2, { target: { value: "" } });
        expect(textField2).toHaveValue("");

        const submitButton = screen.getByTestId("submit-button");
        fireEvent.submit(submitButton);

        const userNameError = screen.getByTestId("username-error");
        expect(userNameError).toBeInTheDocument();
    });


    test('submit form with invalid email', () => {
        render(<Register />);
 
         const textField = screen.getByTestId("email-input");
         fireEvent.change(textField, { target: { value: "" } });
         expect(textField).toHaveValue("");
 
         const textField1 = screen.getByTestId("email-input");
         fireEvent.change(textField1, { target: { value: "bharath21@gmail.com" } });
         expect(textField1).toHaveValue("bharath21@gmail.com");
 
         const textField2 = screen.getByTestId("email-input");
         fireEvent.change(textField2, { target: { value: "" } });
         expect(textField2).toHaveValue("");
 
         const submitButton = screen.getByTestId("submit-button");
         fireEvent.submit(submitButton);
 
         const emailError = screen.getByTestId("email-error");
         expect(emailError).toBeInTheDocument();
     });


     test('submit form with invalid contact number', () => {
        render(<Register />);
 
        const textField = screen.getByTestId("contactNumber-input");
        fireEvent.change(textField, { target: { value: "" } });
        // expect(textField).toHaveValue("");

        const textField1 = screen.getByTestId("contactNumber-input");
        fireEvent.change(textField1, { target: { value: "8179041437" } });
        expect(textField1).toHaveValue(8179041437);

        const textField2 = screen.getByTestId("contactNumber-input");
        fireEvent.change(textField2, { target: { value: "" } });
        // expect(textField2).toHaveValue("");

        const submitButton = screen.getByTestId("submit-button");
        fireEvent.submit(submitButton);

        const contactNumberError = screen.getByTestId("contactNumber-error");
        expect(contactNumberError).toBeInTheDocument();
     });


     test('submit form with invalid password', () => {
        render(<Register />);
 
        const textField = screen.getByTestId("password-input");
        fireEvent.change(textField, { target: { value: "" } });
        expect(textField).toHaveValue("");

        const textField1 = screen.getByTestId("password-input");
        fireEvent.change(textField1, { target: { value: "React@8021" } });
        expect(textField1).toHaveValue("React@8021");

        const textField2 = screen.getByTestId("password-input");
        fireEvent.change(textField2, { target: { value: "" } });
        expect(textField2).toHaveValue("");

        const submitButton = screen.getByTestId("submit-button");
        fireEvent.submit(submitButton);

        const passwordError = screen.getByTestId("password-error");
        expect(passwordError).toBeInTheDocument();
     });


    test("should show password when the icon is clicked", () => {
        render(<Register />);

        const passwordInput = screen.getByTestId("password-input");
        expect(passwordInput).toHaveAttribute("type", "password");
        const visibleOffIcon = screen.getByTestId("visible-off-icon");
        fireEvent.click(visibleOffIcon);
        expect(passwordInput).toHaveAttribute("type", "text");
        const visibleIcon = screen.getByTestId("visible-icon");
        expect(visibleIcon).toBeInTheDocument();
    });


    test('should not display error message for valid email format', () => {
        render(<Register />);
        const emailInput = screen.getByTestId("email-input");
        fireEvent.change(emailInput, { target: { value: "validemail@gmail.com" } });
        expect(emailInput).toHaveValue("validemail@gmail.com");
        // const emailError = screen.queryAllByTestId("email-error");
        // expect(emailError.length).toBe(0);
        const emailError = screen.queryByTestId("email-error");
        expect(emailError).not.toBeInTheDocument();
    });


    test('should not display error message for valid username length', () => {
        render(<Register />);

        const usernameInput = screen.getByTestId("username-input");
        fireEvent.change(usernameInput, { target: { value: "validusername" } });
        expect(usernameInput).toHaveValue("validusername");
        const emailError = screen.queryAllByTestId("username-error");
        expect(emailError.length).toBe(0);
    });

    test('should not display error message for valid contact number format', () => {
        render(<Register />);
        const contactNumberInput = screen.getByTestId("contactNumber-input");
        fireEvent.change(contactNumberInput, { target: { value: "8179041437" } });
        expect(contactNumberInput).toHaveValue(8179041437);
        const contactNumError = screen.queryAllByTestId("contactNumber-error");
        expect(contactNumError.length).toBe(0);
    });


    test('should not display error message for valid password format', () => {
        render(<Register />);
        const passwordInput = screen.getByTestId("password-input");
        fireEvent.change(passwordInput, { target: { value: "React@8021" } });
        expect(passwordInput).toHaveValue("React@8021");
        const passwordError = screen.queryAllByTestId("passwordError-error");
        expect(passwordError.length).toBe(0);
    });


    test('should display error message for invalid contact number format', () => {
        render(<Register />);

        const contactNumberInput = screen.getByTestId("contactNumber-input");
        fireEvent.change(contactNumberInput, { target: { value: "123" } });
        expect(contactNumberInput).toHaveValue(123);
        const contactNumberError = screen.getByTestId("contactNumber-error");
        expect(contactNumberError).toHaveTextContent("*Contact number must be a valid 10-digit number!");
        expect(contactNumberError).toBeInTheDocument();
    });


    test('should display error message for invalid email format', () => {
        render(<Register />);

        const emailInput = screen.getByTestId("email-input");
        fireEvent.change(emailInput, { target: { value: "invalid-email" } });
        expect(emailInput).toHaveValue("invalid-email");
        const emailError = screen.getByTestId("email-error");
        expect(emailError).toHaveTextContent("*Invalid Email Address");
        expect(emailError).toBeInTheDocument();
    });


    test('should display error message for invalid username length', () => {
        render(<Register />);

        const usernameInput = screen.getByTestId("username-input");
        fireEvent.change(usernameInput, { target: { value: "abc" } });
        expect(usernameInput).toHaveValue("abc");
        const usernameError = screen.getByTestId("username-error");
        expect(usernameError).toHaveTextContent("*Username should be between 5 and 100 characters!");
        expect(usernameError).toBeInTheDocument();
    });


    test('should display error message for invalid password format', () => {
        render(<Register />);

        const passwordInput = screen.getByTestId("password-input");
        fireEvent.change(passwordInput, { target: { value: "weakpassword" } });
        expect(passwordInput).toHaveValue("weakpassword");
        const passwordError = screen.getByTestId("password-error");
        expect(passwordError).toHaveTextContent("*Password must contain at least one uppercase letter, one lowercase letter, and one number, and must be between 6 and 15 characters long.");
        expect(passwordError).toBeInTheDocument();
    });

    test('should display successful message when form submission is successful', () => {
        render(<Register />);
    
        // Simulate filling out the form with valid data
        const emailInput = screen.getByTestId("email-input");
        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    
        const usernameInput = screen.getByTestId("username-input");
        fireEvent.change(usernameInput, { target: { value: "testuser" } });
    
        const contactNumberInput = screen.getByTestId("contactNumber-input");
        fireEvent.change(contactNumberInput, { target: { value: "1234567890" } });
    
        const passwordInput = screen.getByTestId("password-input");
        fireEvent.change(passwordInput, { target: { value: "Password123" } });
    
        // Submit the form
        const submitButton = screen.getByTestId("submit-button");
        fireEvent.click(submitButton);
    
        // Assert that successful message is displayed
        const successfulMsg = screen.getByText('Registration Successful');
        expect(successfulMsg).toBeInTheDocument();
    
        // Assert that no error messages are displayed
        expect(screen.queryAllByTestId("email-error")).toHaveLength(0);
        expect(screen.queryAllByTestId("username-error")).toHaveLength(0);
        expect(screen.queryAllByTestId("contactNumber-error")).toHaveLength(0);
        expect(screen.queryAllByTestId("password-error")).toHaveLength(0);
    });

})