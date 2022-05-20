import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./page/Login";
import PanelIndex from "./page";
function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/panel" element={<PanelIndex />} />
    </Routes>
  );
}

export default App;
