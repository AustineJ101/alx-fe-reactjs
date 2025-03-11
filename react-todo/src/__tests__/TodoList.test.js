import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import useTodo from "../store/TodoStore";
import { vi } from "vitest";

// Mock the Zustand store
vi.mock("../store/TodoStore", () => ({
  default: vi.fn()
}));

describe("TodoList Component", () => {
  beforeEach(() => {
    useTodo.mockReturnValue({
      Todos: [
        { name: "Write tests", isComplete: false, id: "1" },
        { name: "Hit the gym", isComplete: false, id: "2" },
        { name: "Shower", isComplete: false, id: "3" }
      ],
      deleteTodo: vi.fn(),
      toggleComplete: vi.fn(),
      addTodo: vi.fn()
    });
  });

  test("renders TodoList component correctly with initial todos", () => {
    render(<TodoList />);
    
    expect(screen.getByText("Todo Items")).toBeInTheDocument();
    expect(screen.getByText("Write tests")).toBeInTheDocument();
    expect(screen.getByText("Hit the gym")).toBeInTheDocument();
    expect(screen.getByText("Shower")).toBeInTheDocument();
  });

  test("allows users to add a new todo", () => {
    const mockAddTodo = vi.fn();
    useTodo.mockReturnValue({
      Todos: [],
      deleteTodo: vi.fn(),
      toggleComplete: vi.fn(),
      addTodo: mockAddTodo
    });

    render(<TodoList />);
    
    const input = screen.getByLabelText("Enter Todo Item");
    const addButton = screen.getByRole("button", { name: /Add Item/i });
    
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);
    
    expect(mockAddTodo).toHaveBeenCalledWith({
      name: "New Task",
      isComplete: false,
      id: expect.any(String)
    });
  });
});