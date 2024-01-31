import "./Card.css"
import data from "../../data"

const Card = () => {
    console.log(data);
  return (
    <div>
        <h1>{data[0].language}</h1>
        <img src={data[0].img} alt="" />
        <button>{data[0].btnName}</button>

        <h1>{data[1].language}</h1>
        <img src={data[1].img} alt="" />
        <button>{data[1].btnName}</button>

        //! iterating will be much more better 
    </div>
  )
}

export default Card