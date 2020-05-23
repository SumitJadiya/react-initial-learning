import React, { useState } from "react"

const GrandChild = props => {
    return (
        <div>
            <Child brand={props.brand} />
            <h3>Grand Child: </h3>
        </div>
    )
}


const Child = props => {
    return (
        <div>
            <h2>Child: {props.brand}</h2>
        </div>
    )
}

const App = () => {
    const [brandName] = useState("Amazon")
    return (
        <div>
            <h1>Hello</h1>

            <GrandChild brand={brandName} />
        </div>
    )
}

export default App