import "./Card.css"
import data from "../../data"
import Button from "../button/Button";

const Card = () => {
    console.log(data);
  return (
    <div>
        <h1>{data[0].language}</h1>
        <img src={data[0].img} alt="" />
        <Button name={data[0].btnName} />

        <h1>{data[1].language}</h1>
        <img src={data[1].img} alt="" />
        <Button name={data[1].btnName} />

        //! iterating will be much more better 
    </div>
  )
}

export default Card