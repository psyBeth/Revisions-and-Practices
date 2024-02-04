import React from "react"

class Counter extends React.Component {
  constructor(props) {
    super(props)

    //!  starting value of the state
    this.state = {
      count: 0,
    }

    //? increment method to counter class (bind)
    //  this.increment = this.increment.bind(this)
  }

  //! These methods are not attached to classes by default.
  //! But, React built-in functions are attached to it.

  //* To do this, we must either bind our methods within the constructor or use arrow functions that provide automatic binding.

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }
  render() {
    return (
      <div>
        <h2>Class Components</h2>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.increment}>INC</button>
        <button onClick={() => this.setState({ count: 0 })}>CLR</button>
        <button onClick={this.decrement}>DEC</button>
      </div>
    )
  }
}

export default Counter
