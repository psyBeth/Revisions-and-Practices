import { useState } from "react"

const KeyboardClipboard = () => {

  const [content, setContent] = useState("")

  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    if(e.keyCode > 47 && e.keyCode < 58) {
      alert("Numbers are not allowed.")
      e.preventDefault() //? prevented the numbers to appear on input
    }
  }

  const handleCopy = (e) => {
    alert("Copying the material is forbidden.")
    e.preventDefault()
  }
  const handleCut = (e) => {
    alert("Cutting the keyboard is forbidden.")
    e.preventDefault()
  } 

  const handlePaste = (e) => {
    e.target.style.fontFamily = "Courier New"
    e.target.style.fontSize = "1.2rem"
    e.target.style.border = "1px solid red"
    alert("Pasting content is forbidden.")
    e.preventDefault()
  }
   

  return (
    <div className="container mt-4">

    <h2>Keyboard Events</h2>

      <input 
      type="text" 
      className="form-control" 
      onChange={(e) => setContent(e.target.value.toLocaleUpperCase())} 
      //?ALWAYS UPERCASE
      onKeyDown={handleKeyDown}
      value = {content} />

      <div className="mt-3">
        {/* always lowercase */}
        <p onCopy={handleCopy} onCut={handleCut}>{content.toLocaleLowerCase()}</p>
      </div>

      <div>
        <textarea 
        name="form-control" 
        id="area" 
        cols="30" 
        rows="10"
        onCut={handleCut}
        onPaste={handlePaste}
        ></textarea>
      </div>

    </div>
  )
}

export default KeyboardClipboard