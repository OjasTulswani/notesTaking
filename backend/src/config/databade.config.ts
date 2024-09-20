import mongoose from 'mongoose';
import env from './environment.config';



const connectDb = async (): Promise<void> => {
  try {
    mongoose.connect(env.dp.connectionString ?? '')
     .then((v)=>{
        console.log(`[mongodb] Running On ${v.connection.host}`);
     }).catch((err)=>console.log(err));
  } catch (error) {
    console.log(`Server Error: ${error}`);
  }
    
}


export default connectDb;