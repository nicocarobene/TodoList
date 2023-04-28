import express from 'express'
require('./mongo')
import { User } from '../types'
import UserModel from '../ModelDB/User'
import bcrypt from 'bcrypt'
import cors from 'cors'
import jwt from 'jsonwebtoken'

const SECRET_WORD = 'palabrasecretea'
const app = express()

app.use(express.json())
app.use(cors())

app.post('/', async (req, resp) => {
    const { username, name, email, password } = req.body

    if (!(username && name && password)) {
        return resp.status(400).json({ error: 'the user required a username, name and password, pleas fill de input required' })
    }
    const isAlreadyuser = await UserModel.findOne({ username })
    if (isAlreadyuser) {
        return resp.status(400).json({ error: 'user is already exist' })
    }

    const passwordHash = await bcrypt.hash(password, 10)

    const newuser: User = {
        username,
        name,
        email,
        passwordHash
    }
    console.log(newuser)
    const user = new UserModel(newuser)
    user.save()
        .then(savedUser => {
            const { email, name, passwordHash, _id, username } = savedUser
            const newuser = {
                email,
                name,
                password: passwordHash,
                id: _id,
                username
            }
            resp.json(newuser)
        })
        .catch(e => console.log(e))
})
app.post('/todo',async(req,resp)=>{
    const {title, completed}= req.body
    
})

app.post('/login', async (req, resp) => {
    const { username, password } = req.body
    if (!username && !password) return resp.status(400).json({ Error: "username and password don't exist" })

    const user = await UserModel.findOne({ username }).populate('todo')
    if (user === null) return resp.status(400).json({
        error: 'Invalid credential'
    })


    const passwordCorrect = await bcrypt.compare(password, user.passwordHash)

    if (!(user && passwordCorrect)) {
        return resp.status(400).json({
            error: 'invalid user or password'
        })
    }

    const userForToken = {
        user: user.username,
        id: user._id
    }

    const token = jwt.sign(userForToken, SECRET_WORD, {
        expiresIn: 60 * 60 * 24 * 7
    })

    resp.status(200).json({
        username: user.username,
        name: user.name,
        token,
        message: 'todo salio perfecto'
    })

})
const PORT = 3000

app.listen(PORT, () => {
    console.log(`🚀 Server listen PORT ${PORT}`)
})