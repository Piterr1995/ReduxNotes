export const addNote = (description) => {
  return { type: "ADD_NOTE", payload: { description } };
};

export const removeNote = (id) => {
  return { type: "REMOVE_NOTE", payload: { id } };
};
