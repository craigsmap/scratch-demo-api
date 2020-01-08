
export class InvalidNoteError extends Error {}

export function validateNote(note) {
  if(!note || !note.content || !note.content.trim()) {
    throw new InvalidNoteError(note);
  }
  return true;
}
