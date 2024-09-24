
import NoteCard from './NoteCard';
import {NotesContext} from "../contexts/noteContextProvider"
import { useContext } from 'react';


const NoteList= () => {
  const { notes } = useContext(NotesContext);
  return (
    <ul className="flex flex-wrap justify-center mb-4">
      {notes.map((note, index) => (
        <li key={index} className={`mb-4 w-full sm:w-1/2 md:w-1/2 xl:w-1/2 ${index % 2 === 0 ? 'pr-4' : 'pl-4'}`}>
          <NoteCard note={note} />
        </li>
      ))}
    </ul>
  );
};

export default NoteList;