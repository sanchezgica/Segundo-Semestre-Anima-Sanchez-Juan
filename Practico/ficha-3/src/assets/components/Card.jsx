function Card(props) {
  return (
    <div style={{ border: "solid 2px blue" }}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>(sin estilo pero esto es una card)</p>
    </div>
  );
}

export default Card;
