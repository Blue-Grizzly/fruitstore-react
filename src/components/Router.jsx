import {Routes, Route} from "react-router-dom"
import HomePage from "../pages/Homepage"
import React from "react"
import Fruits from "../pages/Fruits"
import Checkout from "../pages/Checkout"

export default class Router extends React.Component{
  render(){
    document.getElementById("root").dataset.cartContent = []
    return (
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/fruits" element={<Fruits/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    )
  }
}

