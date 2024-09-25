import express from "express";
import * as NotesController from "./note.controllers";

const noteRouter = express.Router();

noteRouter.get("/", NotesController.getNotes);

noteRouter.get("/:noteId", NotesController.getNote);

noteRouter.post("/", NotesController.createNote);

noteRouter.patch("/:noteId", NotesController.updateNote);

noteRouter.delete("/:noteId", NotesController.deleteNote);

export default noteRouter;