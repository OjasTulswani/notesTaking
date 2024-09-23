import React from 'react';
import NoteCard from './NoteCard';
import { NoteType } from '../types/notes';

const NoteList: React.FC<{notes : NoteType['notes'][]}> = ({ notes }) => {
  return (
    <ul className="list-none mb-4">
      {notes.map((note) => (
        <li key={note._id} className="mb-4">
          <NoteCard note={note} />
        </li>
      ))}
    </ul>
  );
};

export default NoteList;