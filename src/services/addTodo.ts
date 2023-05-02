import { type TodoWithoutId } from '../types'

export const addTodoService = async (newtodo: TodoWithoutId, jwt: string) => {
  return await fetch('http://localhost:3000/toDo', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${jwt}`,
      'Content-type': 'Application/json'
    },
    body: JSON.stringify(newtodo)
  })
    .then(async resp => {
      if (!resp.ok) throw new Error('something is wrong')
      return await resp.json()
    })
    .then(json => json)
}
