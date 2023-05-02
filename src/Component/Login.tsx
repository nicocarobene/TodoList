import { NavLink } from "react-router-dom"
import { useUser } from "../useUser"

export default function Login() {
    const { user, logut } = useUser()
    const LogOut = () => {
        logut()
    }
    return (
        <nav style={{ display: 'flex', gap: '10px' }}>
            <p>{user.name !== null ? `Hola, ${user.name}!` : ''}</p>
            {user.name
                ? <button className="log" onClick={LogOut}>Logout</button>
                : <>
                    <NavLink style={{ cursor: 'pointer' }} to='/register'>
                        Register
                    </NavLink>
                    <NavLink style={{ cursor: 'pointer' }} to='/login'>
                        Login
                    </NavLink>
                </>
            }
        </nav>
    )
}