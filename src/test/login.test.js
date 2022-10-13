import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import Login from "../pages/login";
describe("Login form should work as expected", () => {
  test("username input is rendered", () => {
    render(<Login />);
    const inputPassword = screen.getByPlaceholderText(/password/i);
    const inputEmail = screen.getByPlaceholderText(/email/i);
    expect(inputPassword).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
  });
  test("username input is empty at 1st render", () => {
    render(<Login />);
    const inputPassword = screen.getByPlaceholderText(/password/i);
    const inputEmail = screen.getByPlaceholderText(/email/i);
    expect(inputPassword.value).toBe("");
    expect(inputEmail.value).toBe("");
  });
  test("username input is empty should channge when user enters input.", () => {
    render(<Login />);
    const userPassword = screen.getByPlaceholderText(/password/i);
    const userEmail = screen.getByPlaceholderText(/email/i);
    const testValue = "test";
    fireEvent.change(userEmail, { target: { value: testValue } });
    fireEvent.change(userPassword, { target: { value: testValue } });
    expect(userPassword.value).toBe(testValue);
    expect(userEmail.value).toBe(testValue);
  });
});
