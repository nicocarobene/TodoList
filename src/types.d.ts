export interface UserRegister{
  username: string,
  name: string,
  email:string,
  password:string
}

export type UserLogin= Pick<UserRegister,'username'|'password'>

export interface ErrorRegister {
  email?: string,
  username?: string
  password?: string
  name?: string
}

export type ErrorLogin= Omit <ErrorLogin, 'email' | 'name'>

export interface User {
  username: string | null,
  name: string | null,
  token: string | null
}

export type LoginUser= {
  username: string,
  password: string
}

export interface Todo {
    id: string
    title: string
    completed: boolean
  }

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>

export type ListOfTodo = Todo[]

export type FilterValue = typeof TODO_FILTER[keyof typeof TODO_FILTER]