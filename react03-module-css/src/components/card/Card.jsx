import "./Card.css"
import data from "../../data"

const Card = () => {
    console.log(data);
  return (
    <div>
        <h1>{data.language}</h1>
    </div>
  )
}

export default Card