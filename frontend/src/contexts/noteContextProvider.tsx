import { createContext, ReactElement, useEffect, useState } from "react";
import * as apiEndpoints from '../api/notes_api'

// Define the type
export type NoteType = {
  _id: string;
  title: string;
  text: string;
  createdAt: string
  updatedAt: string
};

export type NoteInput = {
  title: string;
  text: string;
}

// Use the type
const initState: NoteType[] = [];

export type UseNotesContextType = {
  notes: NoteType[];
  createNote: (note: NoteInput) => void;
  updateNote: (noteId: string, note: NoteInput) => void;
  deleteNote: (noteId: string) => void;
};

const initContextState: UseNotesContextType = { notes: [], createNote: () => {}, updateNote: () => {}, deleteNote: () => {} };

export const NotesContext = createContext<UseNotesContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const NotesProvider = ({ children }: ChildrenType): ReactElement => {
  const [notes, setNotes] = useState<NoteType[]>(initState);

  useEffect(() => {
    const fetchNotes = async (): Promise<NoteType[]> => {
      const response = await apiEndpoints.fetchNotes();
      const data = response.data;
      return data;
    };
    fetchNotes().then((notes) => setNotes(notes));
  }, []);

  const createNote = async (note: NoteInput) => {
    try{
    const response = await apiEndpoints.createNote(note);
    setNotes([...notes, response.data]);
    }catch(err){
      console.log(err);
    }
  };

  const updateNote = async (noteId: string, note: NoteInput) => {
    try {
      const response = await apiEndpoints.updateNote(noteId, note);

     // get
      setNotes(notes.map((n) => n._id === noteId ? response.data : n));
    } catch (error) {
      console.log(error);
    
    }
  };

  const deleteNote = async (noteId: string) => {
    try{
    await apiEndpoints.deleteNote(noteId);
    setNotes(notes.filter((n) => n._id !== noteId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NotesContext.Provider value={{ notes, deleteNote, updateNote, createNote,  }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;