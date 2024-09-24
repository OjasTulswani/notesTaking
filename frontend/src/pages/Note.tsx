import { useState } from "react";
import type { FormProps } from "antd";
import { Modal, Form, Input } from "antd";
import NoteList from "../components/NoteList";
import { NoteInput, NotesContext } from "../contexts/noteContextProvider";
import { useContext } from "react";

const Note = () => {
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

  const { createNote } = useContext(NotesContext);

  const handleSubmit: FormProps<FieldType>["onFinish"] = (
    values: NoteInput
  ) => {
    setIsModalOpen(false);
    createNote(values);
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-serif font-extralight pb-4">
        <i>Welcome Back Ojas Tulswani...!!!</i>
      </h1>
      <hr />
      <br />
      <button
        className="landingbutton mb-5 bg-transparent hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={showModal}
      >
        Add New
      </button>
      
      <Modal
        title="Add Note Here! :)"
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <Form layout="vertical" onFinish={handleSubmit}>

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
      <NoteList />
    </div>
  );
};

export default Note;
