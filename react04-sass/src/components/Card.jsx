import "../scss/card.scss"

const Card = ({ veri }) => {
  const {id, name, job, comment, img} = veri
  return (
    <div>
      <h2>{name}</h2>
      <h3>{job}</h3>
      <img src={img} alt="" />
      <div>
        <button>Small</button>
        <button>Large</button>
      </div>
    </div>
  )
}

export default Card