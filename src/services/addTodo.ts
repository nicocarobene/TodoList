import { TodoWithoutId } from "../types"

export const addTodoService = (newtodo: TodoWithoutId, jwt: string) => {
    return fetch('http://localhost:3000/toDo', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(newtodo)
    })
        .then(resp => {
            if (!resp.ok) throw new Error('something is wrong')
            return resp.json()
        })
        .then(json => json)
}