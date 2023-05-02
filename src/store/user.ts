import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Todo, User } from '../types';

export const DEFAULT_VALUE: User = {
  username: null,
  name: null,
  token: null,
  todos: null
}

const initialState: User = (() => {
  const persistedState = localStorage.getItem("__redux__user");
  console.log()
  return persistedState ? JSON.parse(persistedState) : DEFAULT_VALUE;
})();

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state: User) => {
      state = { ...DEFAULT_VALUE }
      return state
    },

    loginUser: (_state, action: PayloadAction<User>) => {
      return action.payload
    },

    addTodo: (state: User, action: PayloadAction<Todo>) => {
      if (state.username === null) return state
      const newtodo = action.payload
      const newTodos = [...state.todos as Todo[], newtodo]
      return { ...state, todos: newTodos }
    },

    deleteTodoById: (state: User, action: PayloadAction<string>) => {
      if (state.todos === null) return state
      const id = action.payload
      const newtodos = state.todos?.filter(todo => todo.id !== id)
      return { ...state, todos: newtodos }
    },
    ToggleCompleted: (state: User, action: PayloadAction<string>) => {
      if (state.todos === null) return state
      const id = action.payload
      const newtodos = state.todos.map(todo => {
        if (todo.id === id) todo = { completed: !todo.completed, title: todo.title, id }
        return todo
      })
      return { ...state, todos: newtodos }
    },
    RemoveAllCompleted: (state: User) => {
      if (state.todos === null) return state
      const newtodos = state.todos?.filter(todo => !todo.completed)
      return { ...state, todos: newtodos }
    },
    roollbackTodo: (state, action: PayloadAction<Todo>) => {
      if (state.todos === null) return state
      const isTodoAlreadyExists = state.todos?.some(todo => todo.id === action.payload.id)
      if (!isTodoAlreadyExists) {
        const newtodos = state.todos?.concat(action.payload)
        return { ...state, todos: newtodos }
      }
    },
    roollbackCompleted: (state, action: PayloadAction<Todo>) => {
      if (state.todos === null) return state
      const newTodos = state.todos?.map(todo => {
        if (todo.id === action.payload.id) return action.payload
        return todo
      })
      console.log(newTodos)
      return { ...state, todos: newTodos }
    }
  }
})

export const { loginUser, logout, deleteTodoById, roollbackTodo, roollbackCompleted, RemoveAllCompleted, ToggleCompleted, addTodo } = counterSlice.actions
export default counterSlice.reducer