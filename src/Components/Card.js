import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  return (
    <div className="card">

      <img src={props.image} alt={''}/>

      <span className="likes">
        { 0 } likes
      </span>

      <div className="buttons-list">

        <button className={"like"}>
          <FontAwesomeIcon icon={"heart"} />
        </button>

        <button className={"comment"}>
          <FontAwesomeIcon icon={"comment"} />
        </button>

        <button className={"share"}>
          <FontAwesomeIcon icon={"share"} />
        </button>

      </div>

    </div>
  )
}

export default Card;
