import { render, screen } from "@testing-library/react";
import App from "./App";

test("test presence of the App element", () => {
  render(<App />);
  const appElement = screen.getByTestId("mainApp");
  expect(appElement).toBeInTheDocument();
});
