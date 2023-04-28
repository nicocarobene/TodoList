import { useNavigate } from "react-router-dom";
import { getRegister } from "./services/getRegister";
import { useAppDispatch, useAppSelector } from "./store/Usertype";
import { loginUser, logout } from "./store/user";
import { UserLogin, UserRegister } from "./types";
import { getLogin } from "./services/getLogin";

export const useUser=()=>{
    const navigate = useNavigate();

    const dispatch= useAppDispatch();

    const Register= (user:UserRegister)=>{
        getRegister(user).then(resp=>{
            navigate('/login')
        })
    }

    const Login=(user:UserLogin)=>{
        getLogin(user).then(resp=>{
            dispatch(loginUser(resp))
            console.log(resp)
            window.localStorage.setItem('__redux__user',JSON.stringify(resp))
            navigate('/')
        })

    }
    const logut=()=>{
        dispatch(logout())
        window.localStorage.removeItem('__redux__user')
    }
    const user= useAppSelector(store=> store.user)
    return {Register, Login, logut, user}
}
