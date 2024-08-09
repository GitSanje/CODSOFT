import { useState } from "react";

import "./App.css";

import Page from "./components/pages/Page";
import TaskContextProvider from "./components/state/Tasks/TaskContextProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <TaskContextProvider>
        <Page />
        <ToastContainer />
      </TaskContextProvider>
    </>
  );
}

export default App;
