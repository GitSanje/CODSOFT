import { useState } from "react";

import "./App.css";

import Page from "./components/pages/Page";
import TaskContextProvider from "./components/state/Tasks/TaskContextProvider";

function App() {
  return (
    <>
      <TaskContextProvider>
        <Page />
      </TaskContextProvider>
    </>
  );
}

export default App;
