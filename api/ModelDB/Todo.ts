import { prop, getModelForClass, Ref } from '@typegoose/typegoose'
import { UserSchema } from './User';

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

export class TodoSchema {
    @prop()
    title: string;

    @prop()
    completed: boolean;
}

const Todo = getModelForClass(TodoSchema)
export default Todo