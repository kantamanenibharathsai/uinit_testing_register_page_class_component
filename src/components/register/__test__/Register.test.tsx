import { fireEvent, render, screen, } from "@testing-library/react";
import Register from "../Register";


describe("Register", () => {

    test("should render Register component", () => {
        render(<Register />);
    });


    test('submit form with invalid username', () => {
       render(<Register />);

        const textField = screen.getByTestId("username-field");
        fireEvent.change(textField, { target: { value: "" } });
        expect(textField).toHaveValue("");

        const submitButton = screen.getByTestId("submit-button");
        fireEvent.submit(submitButton);

        const userNameError = screen.getByTestId("username-error");
        expect(userNameError).toBeInTheDocument();
    });
})