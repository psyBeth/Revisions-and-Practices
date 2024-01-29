//* named export 
import bird from "./img/bird.jpg"

export const Main = () => {
    //? local style object {can also be imported from some external file}
    const parStyle = {
        fontFamily: "tahoma",
        color: "#333",
        fontSize: "1.2rem",
    }
    const imgStyle = {
        width: "300px",
        borderRadius: "10px",
        marginRight: "20px",
      }

  return (
    <main>
        {/* inline-CSS, key-value, camelCase */}
        <h1 style={{ color: "white", backgroundColor:"red"}}>MAIN SECTION</h1>

        <p style={parStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iure,
            rerum doloremque magnam perferendis itaque consequatur vero quasi
            eveniet alias!
        </p>

        <p style={parStyle}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            dolorum?
        </p>

        <img
            src="https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_1280.jpg"
            alt="owl"
            style={imgStyle}
        />

        <img
            src="https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_640.jpg"
            alt="macaw"
            style={imgStyle}
        />

        <img src={bird} alt="humming" style={imgStyle} />

        {/* images in public folder can be reached directly, showed a path to recah it */}
        <img src="./images/bird2.jpg" alt="bird2" style={imgStyle} />

    </main>

  )
}
