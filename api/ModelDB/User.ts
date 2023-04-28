import {  Schema } from 'mongoose'
import {prop, getModelForClass} from '@typegoose/typegoose'


class UserSchema {
    @prop({required:true, unique:true})
    username: string;
  
    @prop({required:true, unique:true})
    name:string;

    @prop({required:true, unique:true})
    email: string;

    @prop({ type:()=>[Schema.Types.ObjectId], ref:'Todo'})
    todo: Schema.Types.ObjectId[]
    
    @prop({required:true, unique:true})
    passwordHash: string;
}


const UserModel= getModelForClass(UserSchema)
export default UserModel


// userSchema.set('toJSON', {
//   transform: (document :any, returnedObject: any) => {
//     returnedObject.id = returnedObject._id
//     delete returnedObject._id
//     delete returnedObject.__v
//     delete returnedObject.passwordHash
//   }
// }
// )

// const UserDB = model('User', userSchema)
