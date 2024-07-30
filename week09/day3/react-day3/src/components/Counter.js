import React from 'react'
import Button from './Button'

export default function Counter() {
    const [count, setCount] = React.useState(0)

    if (count>5){
        throw new Error("AAAAAAAAAAAAAA!!!!!!!!")
    }

    return (
    <div>Counter: {count} <Button setCount={setCount}/>
    </div>
    )
}
