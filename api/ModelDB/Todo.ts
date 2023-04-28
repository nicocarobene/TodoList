import {  Schema } from 'mongoose'
import {prop, getModelForClass} from '@typegoose/typegoose'

const mockTodo = [
    {
        id: "1",
        title: "Ver el twitch de midu",
        completed: true,
    },
    {
        id: "2",
        title: "Aprender React with TS",
        completed: false,
    },
    {
        id: "3",
        title: "Ver la MiduFest",
        completed: false,
    },
];

class TodoSchema{
    @prop()
    title: string;
    @prop()
    completed: boolean;
    @prop({required:true, ref:'UserModel'})
    users: Schema.Types.ObjectId
}