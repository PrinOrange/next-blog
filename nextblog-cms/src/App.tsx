import { Route, Routes } from "react-router-dom";
import "./App.css";

import PanelIndex from "./page";
function App() {
  return (
    <Routes>
      <Route index element={<PanelIndex />}/>
    </Routes>
  );
}

export default App;
