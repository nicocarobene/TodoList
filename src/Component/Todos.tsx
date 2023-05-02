import { type TodoId, type ListOfTodo, type todo } from '../types'
import Todoo from './Todo'
interface Props {
  todos: ListOfTodo
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleteTodo: ({ id, completed }: Pick<todo, 'id' | 'completed'>) => void
}

const Todos: React.FC<Props> = ({ onToggleCompleteTodo, onRemoveTodo, todos }) => {
  return (
    <ul className="todo-list">
      {
        todos.map((todo) => (
          <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
            <Todoo
              onToggleCompleteTodo={onToggleCompleteTodo}
              onRemoveTodo={onRemoveTodo}
              id={todo.id}
              title={todo.title}
              completed={todo.completed} />
          </li>
        ))
      }
    </ul>
  )
}

export default Todos
