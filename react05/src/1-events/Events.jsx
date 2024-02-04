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
        console.log(message);
    }

    let message = "BETULKO"   //? static variable

    function handleChange() {
        message = "Betulko learns React."
        console.log(message);
    }

    
  return (
    <div>
        <h1>Events</h1>
        <h2>{message}</h2>
        <button onClick={handleClick} id="btn" name="my-button">
            Click
        </button>
        <button onClick={() => handleDelete(message)}>
            Delete
        </button>
        <button onClick={handleChange}>
            Change
        </button>
    </div>
  )
}

export default Events