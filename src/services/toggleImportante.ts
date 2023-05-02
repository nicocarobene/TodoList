export const toggleImportante = async (id: string, token: string) => {
  return await fetch(`http://localhost:3000/togglecompleted/${id}`, {
    method: 'GET',
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
