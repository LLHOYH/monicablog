import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ImagesProvider } from "./contexts/ImagesContext";

import Homepage from "./pages/Homepage";
import Resume from "./pages/Resume";
function App() {
  return (
    <ImagesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </ImagesProvider>
  );
}

export default App;
