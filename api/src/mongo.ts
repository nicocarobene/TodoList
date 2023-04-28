import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://Nicolas:nicolas1997@cluster0.si2frwa.mongodb.net/TodoTsUser?retryWrites=true&w=majority')
.then(() => {
  console.log('Database connected')
}).catch(err => {
  console.error(err)
})

process.on('uncaughtException', error => {
  console.error(error)
  mongoose.disconnect()
})