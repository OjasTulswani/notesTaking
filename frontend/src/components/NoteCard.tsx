import { NoteType } from "../types/Notes";
import { formatDate } from "../utils/formatDate";
import { NoteInput, NotesContext } from "../contexts/noteContextProvider";
import "../styles/Note.module.css";
import { useState } from "react";
import { Modal, Form, Input } from "antd";
import type { FormProps } from "antd";
import { useContext } from "react";
interface NoteCardProps {
  note: NoteType["notes"];
}

const NoteCard = ({ note }: NoteCardProps) => {
  const { deleteNote, updateNote } = useContext(NotesContext);

  let createdUpdatedText: string;

  if (note.updatedAt > note.createdAt) {
    createdUpdatedText = "Updated " + formatDate(note.updatedAt);
  } else {
    createdUpdatedText = "Created " + formatDate(note.createdAt);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  type FieldType = {
    title: string;
    text: string;
  };

  const handleSubmit: FormProps<FieldType>["onFinish"] = (
    values: NoteInput
  ) => {
    setIsModalOpen(false);
    updateNote(note._id, values);
  };

  return (
    <div className="bg-slate-50 shadow-md rounded px-4 py-2 ">
      <h2 className="text-lg font-bold ">{note.title}</h2>
      <p className="text-gray-600 mb-10"> {note.text}</p>

      <hr />

      <div className="text-gray-500 text-sm bg-neutral-100">
        {createdUpdatedText}
      </div>

      <button onClick={showModal} className="p-5 hover:bg-slate-100">
        EDIT
      </button>
      <button
        onClick={() => deleteNote(note._id)}
        className="hover:bg-gray-100 p-5"
      >
        DELETE
      </button>

      <Modal title="Edit Note" open={isModalOpen} onCancel={handleCancel}>
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{ title: note.title, text: note.text }}
        >
          <Form.Item label="Title" required name="title">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Note" required name="text">
            <Input type="text" />
          </Form.Item>
          <button
            type="submit"
            className="flex justify-end bg-transparent hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            {" "}
            Save
          </button>
        </Form>
      </Modal>
    </div>
  );
};

export default NoteCard;
