import React from "react";
import { Provider } from "react-redux";
import { store } from "./stores/stores";
import TodoList from "./components/todolist";

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
