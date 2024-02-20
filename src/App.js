import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";

function App() {
  return (
    <Routes>
      <Route paht="/" element={<Layout />}></Route>
      {/* index mean root path */}
      <Route index element={<Public />}></Route>
    </Routes>
  );
}

export default App;
