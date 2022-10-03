import { Stack } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Stack
      width={{ xl: 1488 }}
      minHeight="100vh"
      mx="auto"
      justifyContent="space-between"
    >
      {/* Navbar */}
      <Navbar />
      {/* Routing between pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<Exercise />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </Stack>
  );
}

export default App;
