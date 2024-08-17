import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LoginSignup from "./components/users/LoginSignup.jsx";
import ErrorPage from "./error-page.jsx";
import Root, { loader as rootLoader } from "./routes/root";
import Contact from "./routes/contact.jsx";
import Layout from "./Layout.jsx";
import Home from "./components/pages/Home.jsx";
import { ContextProvider } from "./context/GlobalContext";

import QuizTemplate from "./components/partials/QuizTemplates/QuizTemplate.jsx";
import { ToastContainer} from 'react-toastify'
import QuizBuild from "./components/partials/QuizBuild/QuizBuild.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage/>,
//     loader: rootLoader,
//     children: [
//       {
//         path: "contacts/:contactId",
//         element: <Contact/>,
//       },
//     ],
//   },
// ]);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage/>,

//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
   
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<LoginSignup mode="login" />} />
      <Route path="signup" element={<LoginSignup mode="signup" />} />
      <Route path="quzztemplate/:qzid/:qsid" element={<QuizTemplate/>} />
      <Route path='quizbuild' element={ <QuizBuild/>}/>
      
    </Route>
  
   
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
   
         <RouterProvider router={router} />

         <ToastContainer />
   
  </StrictMode>
);
