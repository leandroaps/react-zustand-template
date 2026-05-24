import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import Counter from "../shared/components/counter";
import { useStore } from "../store/store";

describe("Counter Component", () => {
  beforeEach(() => {
    useStore.setState({ count: 1 });
  });

  it("renders the counter with initial count", () => {
    render(<Counter />);

    const countElement = screen.getByText(/1/);
    expect(countElement).toBeInTheDocument();
  });

  it("increments the count when button is clicked", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const button = screen.getByRole("button", { name: /one up/i });
    await user.click(button);

    const updatedCount = screen.getByText(/2/);
    expect(updatedCount).toBeInTheDocument();
  });

  it("decreases the count when button is clicked", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const button = screen.getByRole("button", { name: /one down/i });
    await user.click(button);

    const updatedCount = screen.getByText(/0/);
    expect(updatedCount).toBeInTheDocument();
  });
});
