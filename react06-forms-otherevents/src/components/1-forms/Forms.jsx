import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import { useState } from 'react';


const Forms = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handleFormSubmit = (e) => {
    // console.log(e.target);
    e.preventDefault()
    alert(`
      username: ${username},
      email: ${email},
      password: ${password}
    `)

    //* It has been added to show how data can be posted as a result of a submit operation in the future.
    // const res = axios.post("url", {username, password, email})
    //? no need to put method="POST" on Form tag
    //* or alternate method
    // fetch("url", {method:"POST", data:{username, password, email}})
    // .then()
  }


  return (
    <Container className="mt-4">
    <Form onSubmit={handleFormSubmit}>
      <h1 className='text-danger'>FORMS</h1>
      <Form.Group className="mb-3">
        //! The OnChange event is triggered whenever the input value changes. We can update the State via the event handler we wrote.
        <Form.Label>
          {username && <span className='fw-bold'>Hello {username}</span>}
        </Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Username" 
        onChange={handleUsername} 
        value={username} 
        id="username" 
        required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>
          Email: <span className='fw-bold'>{email}</span>
        </Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        id="email" 
        required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        id='password' 
        required/>
      </Form.Group>
      
      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default Forms