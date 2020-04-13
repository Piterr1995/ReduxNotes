export const addNote = (description) => {
  return { type: "ADD_NOTE", description: description };
};

export const removeNote = (id) => {
  return { type: "DELETE_NOTE", id: id };
};
