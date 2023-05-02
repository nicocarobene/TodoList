import { useNavigate } from 'react-router-dom'
import { getRegister } from './services/getRegister'
import { useAppDispatch, useAppSelector } from './store/Usertype'
import { addTodo, deleteTodoById, loginUser, logout, ToggleCompleted, RemoveAllCompleted } from './store/user'
import { type TodoWithoutId, type UserLogin, type UserRegister } from './types'
import { getLogin } from './services/getLogin'
import { addTodoService } from './services/addTodo'

export const useUser = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector(store => store.user)
  const todos = useAppSelector(store => store.user.todos)

  const Register = (user: UserRegister) => {
    getRegister(user).then(resp => {
      navigate('/login')
      console.log(resp)
    })
      .catch(e => { console.log(e) })
  }
  const addTodoUser = (todo: TodoWithoutId) => {
    if (user.token === null) return
    addTodoService(todo, user.token).then(resp => {
      dispatch(addTodo(resp))
    })
      .catch(e => { console.log(e) })
  }
  const Login = (user: UserLogin) => {
    getLogin(user).then(resp => {
      dispatch(loginUser(resp))
      navigate('/')
    })
      .catch(e => { console.log(e) })
  }

  const cleanCompleted = () => {
    dispatch(RemoveAllCompleted())
  }
  const logut = () => {
    dispatch(logout())
  }

  const deleteById = (id: string) => {
    dispatch(deleteTodoById(id))
  }

  const togleCompleted = (id: string) => {
    dispatch(ToggleCompleted(id))
  }

  return { Register, Login, logut, user, todos, deleteById, addTodoUser, togleCompleted, cleanCompleted }
}
