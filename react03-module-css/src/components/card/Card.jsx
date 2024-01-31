// import "./Card.css"
import CardStyle from "./Card.module.css"
import data from "../../data"
import Button from "../button/Button";

const Card = () => {
    console.log(data);
  return (
    <div>
      {data.map( ({ id, language, img, btnName}) => (
        <div key={id}>
          <h1 className={CardStyle.title}>{language}</h1>
          <img src={img} alt="img" />
          <Button name={btnName} />
        </div>
      ) )}

        {/* //? will be iterating now 
        <h1>{data[0].language}</h1>
        <img src={data[0].img} alt="" />
        <Button name={data[0].btnName} />

        <h1>{data[1].language}</h1>
        <img src={data[1].img} alt="" />
        <Button name={data[1].btnName} />

        <h1>{data[2].language}</h1>
        <img src={data[2].img} alt="" />
        <Button name={data[2].btnName} /> */}

         
    </div>
  )
}

export default Card