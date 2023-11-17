import React from "react"
import ToolBar from "../components/Toolbar"
import { Link } from "react-router-dom"


export default class Homepage extends React.Component{
    render() {
        return(
        <div>
            <ToolBar/>

            <h1>Welcome to Costco I love you!</h1>
            <h2>
                <Link to="../fruits">Take me to the fruits!</Link>
            </h2>
            
        </div>
        )}
}