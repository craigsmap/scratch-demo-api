import { validateNote, InvalidNoteError } from "../libs/notes-lib";

test("Non-empty note content passes", () => {
  const n = {content: 'Here is my file', attachment: 'my-file.jpg'};
  expect(validateNote(n)).toBe(true);
});

test("Non-empty note content and missing attachment passes", () => {
  const n = {content: 'Here is my file'};
  expect(validateNote(n)).toBe(true);
});

test("Missing note content throws an Error", () => {
  const n = {attachment: 'my-file.jpg'};
  expect(() => validateNote(n)).toThrow(InvalidNoteError);
});

test("Empty note content throws an Error", () => {
  const n = {content: '', attachment: 'my-file.jpg'};
  expect(() => validateNote(n)).toThrow(InvalidNoteError);
});

test("Empty trimmed note content throws an Error", () => {
  const n = {content: '    ', attachment: 'my-file.jpg'};
  expect(() => validateNote(n)).toThrow(InvalidNoteError);
});

