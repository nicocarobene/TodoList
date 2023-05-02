import { TodoId, type Todo } from "../types";

interface Props extends Todo {
  onToggleCompleteTodo: ({ id, completed }: Pick<Todo, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
}
const Todo: React.FC<Props> = ({ onToggleCompleteTodo, onRemoveTodo, id, title, completed }) => {
  return (
    <div className='view'>
      <input
        id={id}
        className='toggle'
        type="checkbox"
        checked={completed}
        onChange={(e) => {
          onToggleCompleteTodo({ id, completed: e.target.checked })
        }}
      />
      <label>{title}</label>
      <button
        type="button"
        className="destroy"
        onClick={() => { onRemoveTodo({ id }) }} />
    </div>
  )
}

export default Todo