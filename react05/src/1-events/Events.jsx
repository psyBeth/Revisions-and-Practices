const Events = () => {
    const handleClick = (e) => {
        alert("button clicked")
        console.log("button clicked");
        console.log(e);
        console.log(e.target);
        console.log("Name:", e.target.name);
        console.log("ID:", e.target.id);
    }
    const handleDelete = function (){
        console.log("deleted.");
    }
  return (
    <div>
        <h1>Events</h1>
        <button onClick={handleClick} id="btn" name="my-button">
            Click
        </button>
        <button onClick={handleDelete()}>
            Delete
        </button>
    </div>
  )
}

export default Events