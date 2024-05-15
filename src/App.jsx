import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("./pages/Home"));
const Event = lazy(() => import("./pages/Event"));
const Register = lazy(() => import("./pages/Register"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="event/:id" element={<Event />} />
          <Route path="event/:id/register" element={<Register />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
