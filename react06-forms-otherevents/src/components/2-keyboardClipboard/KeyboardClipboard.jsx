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
        <p>{content.toLocaleLowerCase()}</p>
      </div>

    </div>
  )
}

export default KeyboardClipboard