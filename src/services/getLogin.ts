import { type LoginUser } from '../types'
interface GetUser {
  title: string,
  completed: boolean,
  id: string
}

export const getLogin = async (user: LoginUser) => {
  return await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-type': 'Application/json'
    },
    body: JSON.stringify(user)
  })
    .then(async res => {
      if (!res.ok) throw new Error('Someone in your credential was wrong')
      return await res.json()
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
