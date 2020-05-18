import React from "react"

const Button = ({ title = "Just for fun" }) => (
    <div>
        <button class="button">{title}</button>
    </div>
)

export default Button