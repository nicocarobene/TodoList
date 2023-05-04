import { useState } from 'react'
import { type FilterValue, type TodoId, type TodoTitle, type TodoWithoutId } from '../types'
import { TODO_FILTER } from '../const'
import Footer from '../Component/Footer'
import { Header } from '../Component/Header'
import { useUser } from '../useUser'
import Todos from '../Component/Todos'
import { NonUser } from './NonUser'

export default function AppTodo () {
  const { todos = [], addTodoUser, deleteById, togleCompleted, cleanCompleted } = useUser()
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTER.ALL
  )

  if (todos === null) return <NonUser/>

  const handleRemuve = ({ id }: TodoId): void => {
    deleteById(id)
  }

  const handleCompleted = ({ id }: TodoId): void => {
    togleCompleted(id)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter((todo) => !todo.completed).length

  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTER.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTER.COMPLETED) return todo.completed
    return todo
  })

  const handleRemoveAllCompleted = (): void => {
    cleanCompleted()
  }

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo: TodoWithoutId = {
      title,
      completed: false
    }
    addTodoUser(newTodo)
  }

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
  )
}
