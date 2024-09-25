import {InferSchemaType, model, Schema} from "mongoose";

const userSchema = new Schema({
    name:{
        type: "string",
        required: true
    }, 
    email:{
        type: "string",
        required: [true, "Email is required and should be unique"],
        unique: true,
    },
    password:{
        type: "string",
        required: [true, "Password is required and should be strong"]
    }

})

type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema)