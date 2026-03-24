import { useState } from "react";
import "./App.css";
import "./components/layout/SidebarComponent.jsx";
import Sidebar from "./components/layout/SidebarComponent.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="containter">
        <div className="row">
          <Sidebar
            image="https://i.ytimg.com/vi/VPFdyk0kadY/maxresdefault.jpg"
            quote="¿Puedes ver lo infinito que eres?"
            cite="Vagabond"
          ></Sidebar>
          <div className="col-10"></div>
        </div>
      </div>
    </>
  );
}

export default App;
