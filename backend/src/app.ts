import express, { Express, Request, Response } from "express";
import NoteModel from "./models/note";



const app: Express = express();


app.get("/", async (req : Request, res : Response, next) => {
  try {
    const notes = await NoteModel.find().exec();
    res.status(200).json(notes);
    throw Error("Bhai ho jaa!");
  } catch (error) {
      next(error);
  }
});

app.use((req, res, next) => {
  next(Error("Endpoint not found"));
});



export default app;