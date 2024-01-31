import "./Button.css"

const Button = ({ name }) => {
  return (
    <div className="title">
      <button className="btn-blue">{name}</button>
    </div>
  )
}

export default Button