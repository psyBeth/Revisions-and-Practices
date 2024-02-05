import { useState } from "react"

const UseStateObject = () => {
    
    // const [name, setName] = useState("Baho")
    // const [job, setJob] = useState("developer")
    // const [age, setAge] = useState(21)

    const [person, setPerson] = useState({
        name: "Baho",
        job: "developer",
        age: 21,
    })

    const { name, job, age } = person    //? state dest
    console.log(person);

  return (
    <div>
        <h1>Employee Form</h1>
        <h2>Name: {person.name}</h2>
        <h3>Occupation: {person.job}</h3>
        <h3>Age: {person.age}</h3>

        <button onClick={() => setPerson({...person, name :"Betul", job: "tester", age: "22" })}>
            update person
        </button>
        {/* might also use different buttons for every key-value, like the previous method*/}

        {/* <button onClick={() => setJob("tester")}>update occupation</button>
        <button onClick={() => setAge(age + 1)}>update age</button> */}
    </div>
  )
}

export default UseStateObject