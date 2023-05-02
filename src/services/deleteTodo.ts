export const deleteTodo = ({ todoIdToRemove, token }: { todoIdToRemove: string, token: string }) => {
  return fetch(`http://localhost:3000/${todoIdToRemove}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(resp => {
      if (!resp.ok) throw new Error('error al eliminar el toDo')
      return resp.json()
    })
    .then(json => json)
}