import { useState, useEffect } from "react";
import NoteList from "../components/NoteList";
import { NoteType } from "../types/notes";
import * as api from "../api/notes_api"


const Home = () => {
    const [notes, setNotes] = useState<NoteType['notes'][]>([]);
      useEffect(() => {
        api.fetchNotes().then(response => {
          setNotes(response.data)
        });
      }, []);
  
    return (
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-3xl font-bold">Home</h1>
        <NoteList notes={notes} />
      </div>
    );
  };
  
  export default Home;

 
