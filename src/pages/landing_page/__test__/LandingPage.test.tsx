import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For expect().toBeInTheDocument()
import LandingPage from '../LandingPage'; // Assuming the component is in the same directory
import { BrowserRouter, } from 'react-router-dom';

describe('LandingPage Component', () => {

    test('should naviagte to login component when the logout button is clicked', () => {

        render(
            <BrowserRouter>
                <LandingPage />
            </BrowserRouter>);

        const logoutBtn = screen.getByTestId('logout');
        fireEvent.click(logoutBtn);
        localStorage.removeItem('loggedInUser');
        expect(`${window.location.pathname}`).toBe('/login')
    });


    // test("should handle image upload correctly", async () => {
    //     render(
    //         <BrowserRouter>
    //             <LandingPage />
    //         </BrowserRouter>
    //     );

    //     // Get the input element for file upload
    //     const input = screen.getByTestId("upload-label");

    //     // Create a mock file
    //     const file = new File(["testImage"], "testImage.png", {
    //         type: "image/png",
    //     });

    //     // Simulate the FileReader instance
    //     const mockFileReaderInstance = {
    //         result: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    //         onload: jest.fn(),
    //         onloadend: jest.fn(),
    //         readAsDataURL: jest.fn(function (this: any) {
    //             this.result = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    //             this.onload && this.onload();
    //             this.onloadend && this.onloadend();
    //         }),
    //     };

    //     // Mock FileReader implementation
    //     jest.spyOn(window, "FileReader")
    //         .mockImplementation(() => mockFileReaderInstance as any);

    //     // Trigger the change event with the mock file
    //     fireEvent.change(input, {
    //         target: {
    //             files: [file],
    //         },
    //     });

    //     // Get the image element
    //     const image = screen.getByAltText("image-alt") as HTMLImageElement;

    //     // Assert that the image src matches the expected value
    //     expect(image.src).toBe("https://cdn-icons-png.flaticon.com/512/149/149071.png");
    // });


    test("navigation test", () => {
        window.URL.createObjectURL = jest.fn();
        render(
            <BrowserRouter>
                <LandingPage />
            </BrowserRouter>
        );
        const file = new File(["hello"], "hello.png", { type: "image/png" });
        const fileElement = screen.getByTestId("file-input");
        fireEvent.change(fileElement, { target: { files: "" } });
        fireEvent.change(fileElement, { target: { files: [file] } });

    });
});
