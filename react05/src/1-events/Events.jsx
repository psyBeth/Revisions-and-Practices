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

    //* there're 3 different methods of re-rendering the return part of the component
    //* 1- any state being changed
    //* 2- props being changed
    //* 3- forced refresh (not prefered)

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

//* there are 2 different component structure in ReactJS to use state
//* 1. Hooks (functional components)
//* 2. Statefull Classes (class components)