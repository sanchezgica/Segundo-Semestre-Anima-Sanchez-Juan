import { useState } from "react";
import "./App.css";
import Sidebar from "./components/layout/SidebarComponent.jsx";
import Footer from "./components/layout/FooterComponent.jsx";
import Navbar from "./components/layout/NavBarComponent.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="container-fluid overflow-hidden"
        style={{ height: "100%", width: "100%" }}
      >
        <div className="row">
          <Navbar></Navbar>
        </div>
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
