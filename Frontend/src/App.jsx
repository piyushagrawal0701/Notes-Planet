import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import CreateNote from "./Pages/CreateNote";
import EditNote from "./Pages/EditNote";
import ViewNote from "./Pages/ViewNote";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              borderRadius: "12px",
            },
          },
          error: {
            style: {
              borderRadius: "12px",
            },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/create" element={<CreateNote />} />

        <Route path="/edit/:id" element={<EditNote />} />

        <Route path="/note/:id" element={<ViewNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
