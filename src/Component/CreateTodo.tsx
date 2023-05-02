import { TodoTitle } from "../types";
import { useState } from "react";
interface Props {
  onAddTodo: ({ title }: TodoTitle) => void;
}

export const CreateTodo: React.FC<Props> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onAddTodo({ title: inputValue })
    setInputValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="¿Qué tarea necesitas realizar?"
      />
    </form>
  );
};
