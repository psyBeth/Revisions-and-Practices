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
  //! 1-) Bir componentin olusturulmasinda cagrilir
  constructor(props) {
    console.log("Constructor running")
    super(props)
    this.state = {
      count: 10,
    }
}

  //! 3-) Bir component DOM agacina eklendiginde calistirilir.
  //! (İlk render sonrasi).
  //! Her yasam dongusu icin bir kere calisir.
  componentDidMount() {
    //? Subscription (Fetch, timer kurulumu, initiliaztion islemleri (local storage))
    console.log("componentDidMount")
  }

  //! 4-) Bu metot ilk render haric diger tüm render'lardan sonra cagrilir.
  componentDidUpdate() {
    //? Bir componentin state'i veya propu değiştikten sonra bir işlemi tetiklemek istersek didUpdate metodu kullanilailir. Örneğin, API'den çekilen parite bilgisine göre alım veya satim isleminin kontorülünün yapılmasi gibi.
    console.log("componentDidUpdate")
  }

  componentWillUnmount() {
    //? Tüm üyeliklerin (Fetch, timer, silme) iptalinin yapilabileceği method
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
  //! 2-) Her bir state yada prop degistiginde (render) yeniden cagrilir
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