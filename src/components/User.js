import { useState } from "react"

const User = () => {

    const [count, setCount] = useState(0)

    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h2>Chandrashekher Prasad</h2>
            <h3>New Delhi</h3>
            <h4>Contact: @Cpsaw999041@gmail.com</h4>
        </div>
    )
}

export default User