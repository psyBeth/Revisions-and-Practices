//?===============================================
//?                USEEFFECT HOOK
//?===============================================

//! Side effects of UseEffect Hook on functional components
//! It is used to realize (side effect).
//! componentDidMount, componentDidUpdate, and componentWillUnmount
//! It can be thought of as a combination of methods.

//! useEffect(() => {
//*   /* ComponentDidMount code */
//*      Kodlar
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [state1, state2]);

//! useEffect(() => {
//?   /* ComponentDidMount code */
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [state1, state2]); //? Dependency Array

import { useEffect, useState } from "react"

const UseEffectHook = () => {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   //? ComponentDidMount + componentDidUpdate
  //   console.log("Fetch started")

  //   return () => {
  //     //? DOM'Dan kaldirildiginda calisti
  //     console.log("Unmounting")
  //   }
  // }, [count]) //? count herdegistiginde

  useEffect(() => {
    //? ComponentDidMount
    console.log("Fetch started")

    return () => {
      //? DOM'Dan kaldirildiginda calisti
      console.log("Unmounting")
    }
  }, []) //? array bos

  console.log("render")
  return (
    <div className="container text-center">
      <h1 className="text-danger">USEEFFECT</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={() => setCount(count + 1)}>
        INC
      </button>
      <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
        DEC
      </button>
    </div>
  )
}

export default UseEffectHook