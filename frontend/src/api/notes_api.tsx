// import axios, { AxiosResponse } from 'axios';
// import { NoteType as Note } from '../types/notes';
import api from './api';
interface NoteInput {
  title: string,
  text?: string,
}

export async function fetchNotes() {
  return api.get('/notes');
}

export async function createNote(note: NoteInput) {
  return api.post('/notes', note);
}

export async function updateNote(noteId: string, note: NoteInput) {
  return api.patch(`/notes/${noteId}`, note);
}

export async function deleteNote(noteId: string) {
  return api.delete(`/notes/${noteId}`);
}