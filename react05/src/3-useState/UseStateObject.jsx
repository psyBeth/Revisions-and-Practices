import { useState } from "react"

const UseStateObject = () => {
    
    const [name, setName] = useState("Baho")
    const [job, setJob] = useState("developer")
    const [age, setAge] = useState(21)

  return (
    <div>
        <h1>Employee Form</h1>
        <h2>Name: {name}</h2>
        <h3>Occupation: {job}</h3>
        <h3>Age: {age}</h3>

        <button onClick={() => setName("Betul")}>update name</button>
        <button onClick={() => setJob("tester")}>update occupation</button>
        <button onClick={() => setAge(age + 1)}>update age</button>
    </div>
  )
}

export default UseStateObject