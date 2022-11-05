import React, { useState } from 'react'

const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = () =>{
        setCurrentCount(currentCount + props.incrementBy)
        console.log(currentCount)
    }

    return <div>
        <div>{currentCount}</div>
    <button onClick={handleClick}>+{props.incrementBy}</button>
    </div>
}

export default CountButton