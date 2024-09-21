import express, { Express, Request, Response, NextFunction } from "express";
import notesRoutes from './routes/note'
import morgan from "morgan"; 
import errorHandler from "./middlewares/errorHandler";



const app: Express = express();


app.use(morgan("dev"));

app.use(express.json());

app.use("/api/notes", notesRoutes);

app.use((req : Request, res : Response, next: NextFunction) => {
    next(Error("Endpoint not found"));
});

// error handler middleware
app.use(errorHandler)

export default app;