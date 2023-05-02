import { type Middleware, configureStore } from '@reduxjs/toolkit'
import user, { roollbackCompleted, roollbackTodo } from './user'
import { deleteTodo } from '../services/deleteTodo'
import { toggleImportante } from '../services/toggleImportante'

const persistanceMiddleware: Middleware = (store) => (next) => (action) => {
  next(action)
  localStorage.setItem('__redux__user', JSON.stringify(store.getState()))
}

const syncWithDatabaseMiddleware: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action
  console.log(type, payload)
  const previusState = store.getState() as RootState
  next(action)
  if (type === 'user/deleteTodoById') {
    if (previusState.user.token === null) return
    const { token } = previusState.user
    const todoIdToRemove = payload
    const todoToRemove = previusState.user.todos?.find(todo => todo.id === todoIdToRemove)
    deleteTodo({ todoIdToRemove, token }).catch(e => {
      console.log(e)
      if (todoToRemove) store.dispatch(roollbackTodo(todoToRemove))
    })
  }
  if (type === 'user/ToggleCompleted') {
    if (previusState.user.token === null) return
    const { token } = previusState.user
    const todoIdToggle = payload
    const togleTodo = previusState.user.todos?.find(todo => todo.id === todoIdToggle)
    toggleImportante(todoIdToggle, token).catch(e => {
      console.log(e)
      if (togleTodo) store.dispatch(roollbackCompleted(togleTodo))
    })
  }
}

export const store = configureStore({
  reducer: {
    user
  },
  middleware: [persistanceMiddleware, syncWithDatabaseMiddleware]
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
