import { Route, Routes } from 'react-router-dom'
import AppTodo from './Pages/AppTodo'
import LoginForm from './Pages/LoginForm'
import RegisterForm from './Pages/RegisterForm'
import Error404 from './Pages/Error404'

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppTodo />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
