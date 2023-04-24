export interface Todo {
    id: string
    title: string
    completed: boolean
  }
export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>

export type ListOfTodo = Todo[]

export type FilterValue = typeof TODO_FILTER[keyof typeof TODO_FILTER]