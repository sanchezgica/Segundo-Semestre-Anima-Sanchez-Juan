function TarjetaPortfolio(props) {
  return (
    <a href="">
      <div className="card d-flex flex-column align-items-center pt-2">
        <img
          src={props.image}
          alt={`Icono de ${props.name}`}
          className="card-top img-fluid object-fit-border"
          style={{ width: "150px", height: "150px" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{props.name}</h5>
          <hr />
        </div>
      </div>
    </a>
  );
}

export default TarjetaPortfolio;
