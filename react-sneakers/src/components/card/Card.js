export function Card(props) {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneaker" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className="button">
          <img height={11} width={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}
