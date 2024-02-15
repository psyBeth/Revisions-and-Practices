//?=============================================================
//?                 LIFECYCLE METHODS
//?      https://reactjs.org/docs/react-component.html
//?=============================================================

//* Lifecycle methods apply to components while they exist in the DOM.
//* These are special React methods that allow us to perform operations on them.
//* For example, when a component is created and the DOM is pressed,
//* to do something when updated or removed from the DOM
//* lifecycle methods can be used.
//* The most well-known lifecycle method is the render() method.

//! Creating a component (constructor) REQUIRED
//! Immediately after a component is added to the DOM tree (componentDidMount)
//! Rendering a component to the DOM -- render()
//! (Optional) Immediately after a component is updated (componentDidUpdate)
//! After removing a component from the DOM tree (componentWillUnmount)

import React from "react"

class LifeCycleMethods extends React.Component {
  //! 1-) Called when creating a component
  constructor(props) {
    console.log("Constructor running")
    super(props)
    this.state = {
      count: 10,
    }
}

  //! 3-) It is executed when a component is added to the DOM tree.
  //! (After first render).
  //! It runs once per life cycle.
  componentDidMount() {
    //? Subscription (Fetch, timer, initiliaztion (local storage))
    console.log("componentDidMount")
  }

  //! 4-) This method is called after all renders except the first render.
  componentDidUpdate() {
    //? If we want to trigger an action after the state or prop of a component changes, the didUpdate method can be used. For example, controlling the purchase or sale transaction according to the parity information retrieved from the API.
    console.log("componentDidUpdate")
  }

  componentWillUnmount() {
    //? Method to cancel all memberships (Fetch, timer, delete)
    console.log("componentWillUnmount")
  }

  handleDec = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  //! It is called again every time a state or prop changes (render).
  render() {
    console.log("****************")
    console.log("Render running")
    return (
      <div className="container text-center">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
        <button className="btn btn-danger" onClick={this.handleDec}>
          DEC
        </button>
      </div>
    )
  }
}
export default LifeCycleMethods