import { UserRegister } from "../types"


export const getRegister = (user: UserRegister) => {
    return fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            "Content-Type": 'Application/json'
        },
        body: JSON.stringify(user)
    })
        .then(resp => {
            if (!resp.ok) throw new Error('algo salio mal')
            return resp.json()
        })
        .then(json => {
            console.log({ json })
            return json
        })
        .catch(e => console.log(e))
}