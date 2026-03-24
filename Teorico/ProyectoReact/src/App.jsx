import { useState } from "react";
import "./App.css";
import "./components/layout/SidebarComponent.jsx";
import Sidebar from "./components/layout/SidebarComponent.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="containter">
        <Sidebar image=""></Sidebar>
      </div>
    </>
  );
}

export default App;
