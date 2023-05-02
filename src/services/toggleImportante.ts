export const toggleImportante = (id: string, token: string) => {
    return fetch(`http://localhost:3000/togglecompleted/${id}`, {
        method: 'GET',
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