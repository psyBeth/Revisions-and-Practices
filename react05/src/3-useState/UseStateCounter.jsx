import { useState } from "react"

const UseStateCounter = () => {
  // let sayac = 0
  //? declared a state named sayac with useState hook
  const [sayac, setSayac] = useState(0)

  console.log(sayac)

  const handleSayac = () => {
    // sayac = sayac + 1
    setSayac(sayac + 1)
  }

  const handleAzalt = () => {
    if (sayac > 0) {
      setSayac(sayac - 1)
    } else {
      alert("Sayac negatif deger olamaz")
    }
  }

  return (
    <div>
      <h1>UseState Sayac</h1>
      <h2>Sayac:{sayac}</h2>

      <button onClick={handleSayac}>Arttir</button>
      {/* If we do not write the setCounter method with a callback, this method will be called directly from the first start. In this case, the counter updates its state. As the state is updated, the component is re-rendered. Re-render causes the state to be updated via the re-setCounter and enters an infinite loop. */}

      {/* <button onClick={() => sayac > 0 && setSayac(sayac - 1)}>Azalt</button> */}

      {/* <button
        onClick={() => {
          if (sayac > 0) {
            setSayac(sayac - 1)
          } else {
            alert("Sayac negatif deger olamaz")
          }
        }}
      >
        Azalt
      </button> */}

      {/* Alternative method */}

      <button onClick={handleAzalt}>Azalt</button>

      <button onClick={() => setSayac(0)}>Sil</button>
    </div>
  )
}

export default UseStateCounter
