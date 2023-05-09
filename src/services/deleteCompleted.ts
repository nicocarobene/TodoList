export const deleteCompleted = async ({ token }: { token: string }) => {
  return await fetch('http://localhost:3000/deleteCompleted', {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(async resp => {
      if (!resp.ok) throw new Error('error al eliminar el toDo')
      return await resp.json()
    })
    .then(json => json)
}
