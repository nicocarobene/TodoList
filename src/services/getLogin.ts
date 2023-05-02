import { LoginUser } from "../types"
type GetUser = {
    title: string,
    completed: boolean,
    id: string
}

export const getLogin = (user: LoginUser) => {
    return fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => {
            if (!res.ok) throw new Error('Someone in your credential was wrong')
            return res.json()
        })
        .then(json => {
            const todos = json.todos.map((todo: GetUser) => (
                {
                    title: todo.title,
                    id: todo.id,
                    completed: todo.completed
                }
            ))
            console.log(json)
            const { name, token, username } = json
            return { name, token, username, todos }
        })
}