const initialState = {
  notes: [
    { id: 1, description: "first_note" },
    { id: 2, description: "second_note" },
    { id: 3, description: "third_note" },
  ],
  articles: [
    { id: 1, name: "FIRST", description: "first_article" },
    { id: 2, name: "SECOND", description: "second_article" },
    { id: 3, name: "THIRD", description: "third_article" },
  ],
};

const MyReducer = (state = initialState, action) => {
  const articles = state.articles;
  const notes = state.notes;
  switch (action.type) {
    case "ADD_NOTE":
      return {
        notes: notes.concat({
          id: notes.length + 1,
          description: action.description,
        }),
      };
    case "ADD_ARTICLE":
      return {
        articles: articles.concat({
          id: articles.length + 1,
          description: action.description,
        }),
      };
    default:
      return state;
  }
};

export default MyReducer;
