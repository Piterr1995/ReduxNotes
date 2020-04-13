import React from "react";
import { Provider } from "react-redux";
import Notes from "views/Notes";
import store from "store";

const Root = () => (
  <Provider store={store}>
    <Notes />
  </Provider>
);

export default Root;
