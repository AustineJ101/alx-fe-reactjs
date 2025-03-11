import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders TodoList component correctly with initial todos", () => {
    render(<TodoList />);
    
    expect(screen.getByText("Todo Items")).toBeInTheDocument();
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });
});

