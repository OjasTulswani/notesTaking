import { useState, useEffect } from "react";
import NoteList from "../components/NoteList";
import { NoteType } from "../types/notes";
import api from "../api/api";
// import axios from "axios";

const Home = () => {
    const [notes, setNotes] = useState<NoteType['notes'][]>([]);



    const fetchNotes = async () => {
        try {
          const response = await api.get('/notes');
          console.log(response);
          setNotes(response.data);
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        fetchNotes();
      }, []);
  
    return (
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-3xl font-bold">Home</h1>
        <NoteList notes={notes} />
      </div>
    );
  };
  
  export default Home;

 
