import { useState } from "react";
import "./App.css";
import Sidebar from "./components/layout/SidebarComponent.jsx";
import Footer from "./components/layout/FooterComponent.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="containter" style={{ height: "100%" }}>
        <div className="row" style={{ height: "100%" }}>
          <Sidebar
            name="Miyamoto Musashi"
            image="https://i.ytimg.com/vi/VPFdyk0kadY/maxresdefault.jpg"
            quote="¿Puedes ver lo infinito que eres?"
            cite="Vagabond"
          ></Sidebar>
          <div className="col-10"></div>
        </div>
        <div className="row">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
