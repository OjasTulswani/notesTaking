import { NoteType } from "../types/notes";
import { formatDate } from "../utils/formatDate";
import '../styles/Note.module.css'
interface NoteCardProps {
  note : NoteType['notes'],
  
}



const NoteCard = ({ note }: NoteCardProps) => {
  
  let createdUpdatedText: string;
  if(note.updatedAt > note.createdAt) {
    createdUpdatedText = "Updated " + formatDate(note.updatedAt)
  }
  else {
    createdUpdatedText = "Created " + formatDate(note.createdAt)
  }

  return (
    <div className="bg-slate-50 shadow-md rounded px-4 py-2 ">
      <h2 className="text-lg font-bold ">{note.title}</h2>
      <p className="text-gray-600 "> {note.text}</p>
      <br />
      <hr />
      
      <div className="text-gray-500 text-sm bg-neutral-100">
        {createdUpdatedText}
      </div>
    </div>
  );
};

export default NoteCard;