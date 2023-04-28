import { Routes, Route } from 'react-router-dom'
import RegisterForm from "./Pages/RegisterForm";
import AppTodo from './Pages/AppTodo'
import LoginForm from './Pages/LoginForm';

const App: React.FC = () => {
  return (
    <div className="todoapp">
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path='/' element={<AppTodo/>}/>
        <Route path='/login' element={<LoginForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
