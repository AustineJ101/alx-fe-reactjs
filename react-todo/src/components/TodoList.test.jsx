// src/__tests__/TodoList.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import { describe, it, expect, beforeEach } from "vitest";

describe("TodoList Component", () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  it("renders the initial todo list", () => {
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Test with Vitest")).toBeInTheDocument();
  });

  it("adds a new todo", () => {
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");
    
    fireEvent.change(input, { target: { value: "New Todo Item" } });
    fireEvent.click(addButton);
    
    expect(screen.getByText("New Todo Item")).toBeInTheDocument();
  });

  it("toggles a todo's completion status", () => {
    const todoItem = screen.getByText("Learn React");
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");
    
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  it("deletes a todo item", () => {
    const deleteButton = screen.getAllByText("Delete")[0];
    const todoItem = screen.getByText("Learn React");
    
    fireEvent.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();
  });
});

