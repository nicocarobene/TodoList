import mongoose from 'mongoose'
import { MONGO_DB } from '../Mongo_DB'

mongoose.connect(MONGO_DB)
  .then(() => {
    console.log('Database connected')
  }).catch(err => {
    console.error(err)
  })

process.on('uncaughtException', error => {
  console.error(error)
  void mongoose.disconnect()
})
