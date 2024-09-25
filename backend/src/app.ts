import express, { Express, Request, Response, NextFunction } from "express";
import userRoutes from "./apis/user/user.route";
import noteRoutes from "./apis/note/note.routes";
import morgan from "morgan"; 
import errorHandler from "./middlewares/errorHandler";
import createHttpError from "http-errors";
import cors from "cors"

const app: Express = express();


app.use(morgan("dev"));

app.use(express.json());

app.use(cors());

app.use("/api/notes", noteRoutes);

app.use("/api/users", userRoutes);

app.use((req : Request, res : Response, next: NextFunction) => {
    next(createHttpError(404, "Endpoint not found"));
});

// error handler middleware
app.use(errorHandler)

export default app;