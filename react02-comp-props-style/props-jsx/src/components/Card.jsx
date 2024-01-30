import Photo from "./Photo"

const Card = (props) => {
    console.log(props);
  return (
    <div>
        <h2>Hello Ahmet</h2>
        <Photo />
        <p>Telephone: +49 555 5678</p>
    </div>
  )
}

export default Card