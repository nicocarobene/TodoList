import { useState } from "react";
import Todos from "./Component/Todos";
import { FilterValue, Todo, TodoId, TodoTitle } from "./types";
import { TODO_FILTER } from "./const";
import Footer from "./Component/Footer";
import { Header } from "./Component/Header";

const mockTodo = [
  {
    id: "1",
    title: "Ver el twitch de midu",
    completed: true,
  },
  {
    id: "2",
    title: "Aprender React with TS",
    completed: false,
  },
  {
    id: "3",
    title: "Ver la MiduFest",
    completed: false,
  },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodo);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTER.ALL
  );

  const handleRemuve = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const handleCompleted = ({
    id,
    completed,
  }: Pick<Todo, "id" | "completed">): void => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });
    setTodos(newTodo);
  };
  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };
  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTER.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTER.COMPLETED) return todo.completed;
    return todo;
  });
  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };
  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };
  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos
        onRemoveTodo={handleRemuve}
        onToggleCompleteTodo={handleCompleted}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleRemoveAllCompleted}
      />
    </div>
  );
}

export default App;
