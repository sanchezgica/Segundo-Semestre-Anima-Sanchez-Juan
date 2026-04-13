import { useState } from "react";
import "./App.css";
import Sidebar from "./components/layout/SidebarComponent.jsx";
import Footer from "./components/layout/FooterComponent.jsx";
import Navbar from "./components/layout/NavBarComponent.jsx";
import AboutComponent from "./components/sections/AboutComponent.jsx";
import InterestComponent from "./components/sections/InterestComponent.jsx";
import ContactComponent from "./components/sections/ContactComponent.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [seccionActiva, setSeccionActiva] = useState("about");
  const renderContenidoPrincipal = () => {
    switch (seccionActiva) {
      case "about":
        return <AboutComponent />;
      case "interest":
        return <InterestComponent />;
      case "contact":
        return <ContactComponent />;
      default:
        return <AboutComponent />;
    }
  };

  return (
    <>
      <div
        className="container-fluid overflow-hidden"
        style={{ height: "100%", width: "100%" }}
      >
        <div className="row">
          <Navbar setSeccionActiva={setSeccionActiva}></Navbar>
        </div>
        <div className="row" style={{ height: "100%" }}>
          <Sidebar
            name="Miyamoto Musashi"
            image="https://i.ytimg.com/vi/VPFdyk0kadY/maxresdefault.jpg"
            quote="¿Puedes ver lo infinito que eres?"
            cite="Vagabond"
          ></Sidebar>
          <main className="col-10">{renderContenidoPrincipal()}</main>
        </div>
        <div className="row">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
