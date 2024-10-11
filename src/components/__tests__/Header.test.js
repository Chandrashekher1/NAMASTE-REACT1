import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"

test("Should load Header Component with a login button", () => {
    render(
    <BrowserRouter>
        <Provider store={appStore}>
        <Header/></Provider>
    </BrowserRouter>
    )

    const loginButton = screen.getByRole("button")

    expect(loginButton).toBeInTheDocument();
})

test("Should load Header Component with a cart-0 Items", () => {
    render(
    <BrowserRouter>
        <Provider store={appStore}>
        <Header/></Provider>
    </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart - (0 items)")

    expect(cartItems).toBeInTheDocument();
})

// For login and Logout

test("Should Change login to logout on click", () => {
    render(
    <BrowserRouter>
        <Provider store={appStore}>
        <Header/></Provider>
    </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"})

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button",{name: "Logout"})

    expect(logoutButton).toBeInTheDocument();
})
