import React from "react";
import { screen, render, act } from "@testing-library/react";
import Dashboad from "../pages/dashboard/dashboad";
jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: {
        id: "1",
        Username: "john",
        orgName: "lendingTest",
        email: "test@gmail.com",
        profile: {
          name: "lily",
          phoneNumber: "08000077750",
        },
      },
    }),
  },
}));
describe("Dashboard should work as expected", () => {
  test("Should fetch users from Api.", async () => {
    render(<Dashboad />);
    act(async () => {
      const userName = await screen.findByText("john");
      const orgName = await screen.findByText("john");
      const email = await screen.findByText("john");
      expect(userName).toBeInTheDocument();
      expect(orgName).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    });
  });
  test("should fetch user details", async () => {
    render(<Dashboad />);
    act(async () => {
      const name = await screen.findByText("lily");
      const phoneNumber = await screen.findByText("08000077750");
      expect(name).toBeInTheDocument();
      expect(phoneNumber).toBeInTheDocument();
    });
  });
});
