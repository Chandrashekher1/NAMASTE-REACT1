import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("Should render contact me page", () => {
    render(<Contact/>)

    const heading = screen.getByRole("heading")

    // Assertion
    expect(heading).toBeInTheDocument();

})

// For button

test("Should load button inside contact me page", () => {
    render(<Contact/>)

    const button = screen.getByRole("button")

    // Assertion
    expect(button).toBeInTheDocument();

})

test("Should load input inside contact me page", () => {
    render(<Contact/>)

    const Text = screen.getByText("Submit")

    // Assertion
    expect(Text).toBeInTheDocument();

})