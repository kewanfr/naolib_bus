// import { useState } from "react";
// import './App.css'
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from "./layout/Header.jsx";
import Home from "./pages/Home.jsx";
import Settings from "./pages/Settings.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="settings" element={<Settings />} />
      {/* <Route path="login" element={<Login />} /> */}
      {/* <Route path="register" element={<Register />} /> */}
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
