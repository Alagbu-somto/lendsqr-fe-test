import test from "../assets/icons/user-card.png";
function Card(props: { name: string; figure: string; icon: typeof test }) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.icon} alt="" />
      </div>
      <span className="card-name">{props.name}</span>
      <span className="card-figure">{props.figure}</span>
    </div>
  );
}

export default Card;
