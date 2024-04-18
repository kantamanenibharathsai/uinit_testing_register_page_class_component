import { fireEvent, render, screen, } from "@testing-library/react";
import Login from "../Login";
import { BrowserRouter, MemoryRouter } from "react-router-dom";


describe("Login", () => {
    test('submit form with invalid email', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

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


    test('submit form with invalid password', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

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
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        const passwordInput = screen.getByTestId("password-input");
        expect(passwordInput).toHaveAttribute("type", "password");
        const visibleOffIcon = screen.getByTestId("visible-off-icon");
        fireEvent.click(visibleOffIcon);
        expect(passwordInput).toHaveAttribute("type", "text");
        const visibleIcon = screen.getByTestId("visible-icon");
        expect(visibleIcon).toBeInTheDocument();
    });


    test('should not display error message for valid email format', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );
        const emailInput = screen.getByTestId("email-input");
        fireEvent.change(emailInput, { target: { value: "validemail@gmail.com" } });
        expect(emailInput).toHaveValue("validemail@gmail.com");
        const emailError = screen.queryByTestId("email-error");
        expect(emailError).not.toBeInTheDocument();
    });


    test('should not display error message for valid password format', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );
        const passwordInput = screen.getByTestId("password-input");
        fireEvent.change(passwordInput, { target: { value: "React@8021" } });
        expect(passwordInput).toHaveValue("React@8021");
        const passwordError = screen.queryAllByTestId("passwordError-error");
        expect(passwordError.length).toBe(0);
    });


    test('should display error message for invalid email format', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        const emailInput = screen.getByTestId("email-input");
        fireEvent.change(emailInput, { target: { value: "invalid-email" } });
        expect(emailInput).toHaveValue("invalid-email");
        const emailError = screen.getByTestId("email-error");
        expect(emailError).toHaveTextContent("*Invalid Email Address");
        expect(emailError).toBeInTheDocument();
    });


    test('should display error message for invalid password format', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        const passwordInput = screen.getByTestId("password-input");
        fireEvent.change(passwordInput, { target: { value: "weakpassword" } });
        expect(passwordInput).toHaveValue("weakpassword");
        const passwordError = screen.getByTestId("password-error");
        expect(passwordError).toHaveTextContent("*Password must contain at least one uppercase letter, one lowercase letter, and one number, and must be between 6 and 15 characters long.");
        expect(passwordError).toBeInTheDocument();
    });

    test('should display successful message when form submission is successful', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );
        const emailInput = screen.getByTestId("email-input");
        fireEvent.change(emailInput, { target: { value: "test@example.com" } });

        const passwordInput = screen.getByTestId("password-input");
        fireEvent.change(passwordInput, { target: { value: "Password123" } });

        const submitButton = screen.getByTestId("submit-button");
        fireEvent.click(submitButton);


        expect(screen.queryAllByTestId("email-error")).toHaveLength(0);
        expect(screen.queryAllByTestId("password-error")).toHaveLength(0);
    });


    test('should navigate to home page if user exists, and display error message if user does not exist', () => {
        // Mock localStorage getItem method to return user details
        const getItemMock = jest.spyOn(Storage.prototype, 'getItem');
        getItemMock.mockReturnValueOnce(JSON.stringify([{ email: "test@example.com", username: "testuser", contactNumber: "1234567890", password: "Password123" }]));
        // Render the component
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );
        // Fill in the form with valid user details
        const emailInput = screen.getByTestId("email-input");
        fireEvent.change(emailInput, { target: { value: "test@example.com" } });

        const passwordInput = screen.getByTestId("password-input");
        fireEvent.change(passwordInput, { target: { value: "Password123" } });

        // Submit the form
        const submitButton = screen.getByTestId("submit-button");
        fireEvent.submit(submitButton);

        // Assert that the component navigates to the home page
        expect(window.location.pathname).toBe('/');

        // Reset the mock to simulate the scenario where the user does not exist
        getItemMock.mockReturnValueOnce(null);

        // Fill in the form with invalid user details
        fireEvent.change(emailInput, { target: { value: "invalid@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "InvalidPassword" } });

        // Submit the form
        fireEvent.submit(submitButton);

        // Assert that the error message is displayed
        const errorMessage = screen.getByTestId("Account-does-not-exist");
        expect(errorMessage).toBeInTheDocument();
        // expect(setItemMock).not.toHaveBeenCalled();
    });


    test('should display error message if email and password do not match', () => {
        // Mock localStorage getItem method to return user details
        const getItemMock = jest.spyOn(Storage.prototype, 'getItem');
        getItemMock.mockReturnValueOnce(JSON.stringify([{ email: "test@example.com", username: "testuser", contactNumber: "1234567890", password: "Password123" }]));

        // Render the component
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        // Fill in the form with invalid user details
        const emailInput = screen.getByTestId("email-input");
        fireEvent.change(emailInput, { target: { value: "testue@example.com" } });

        const passwordInput = screen.getByTestId("password-input");
        fireEvent.change(passwordInput, { target: { value: "InvalidPassword" } });

        // Submit the form
        const submitButton = screen.getByTestId("submit-button");
        fireEvent.submit(submitButton);

        // Assert that the error message is displayed
        const errorMessage = screen.getByTestId("Account-does-not-exist");
        expect(errorMessage).toBeInTheDocument();
    });



})