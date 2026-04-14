import TarjetaPortfolio from "../ui/TarjetaPortfolioComponent";

function PortfolioComponent() {
  return (
    <div className="containter">
      <h1>Materias</h1>
      <div className="row">
        <div className="col-4">
          <TarjetaPortfolio
            name="Front-End (Teórico)"
            image="https://cdn-icons-png.flaticon.com/512/5815/5815406.png"
          ></TarjetaPortfolio>
        </div>
        <div className="col-4">
          <TarjetaPortfolio
            name="Front-End (Práctico)"
            image="https://cdn-icons-png.flaticon.com/512/6153/6153997.png"
          ></TarjetaPortfolio>
        </div>
        <div className="col-4">
          <TarjetaPortfolio
            name="Inglés"
            image="https://cdn-icons-png.flaticon.com/512/5309/5309804.png"
          ></TarjetaPortfolio>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <TarjetaPortfolio
            name="Lengua"
            image="https://cdn-icons-png.flaticon.com/512/8554/8554633.png"
          ></TarjetaPortfolio>
        </div>
        <div className="col-4">
          <TarjetaPortfolio
            name="Matemáticas"
            image="https://cdn-icons-png.flaticon.com/512/9044/9044433.png"
          ></TarjetaPortfolio>
        </div>
        <div className="col-4">
          <TarjetaPortfolio
            name="Filosofía"
            image="https://cdn-icons-png.flaticon.com/512/8235/8235236.png"
          ></TarjetaPortfolio>
        </div>
      </div>
    </div>
  );
}

export default PortfolioComponent;
