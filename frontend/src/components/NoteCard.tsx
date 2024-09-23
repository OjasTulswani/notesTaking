import { NoteType } from "../types/notes";


interface NoteCardProps {
  note : NoteType['notes'],
  
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  return (
    <div className="bg-white shadow-md rounded px-4 py-2">
      <h2 className="text-lg font-bold">{note.title}</h2>
      <p className="text-gray-600">{note.text}</p>
    </div>
  );
};

export default NoteCard;