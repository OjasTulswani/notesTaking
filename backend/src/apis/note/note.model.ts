import mongoose, {InferSchemaType, model, Schema} from "mongoose";

const noteSchema = new Schema({
    user:{
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    title : {
        type : String,
        required : true
    },
    text : {
        type : String,
        required : true
    },
    
}, {timestamps: true});

type Note = InferSchemaType<typeof noteSchema>;

export default model<Note>("Note", noteSchema);

