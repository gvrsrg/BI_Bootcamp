import {useState} from 'react'
import Button from './Button.js'

function Counter() {
    const [count, setCount] = useState(0)

    if (count>5){
        throw new Error("AAAAAAAAAAAAAA!!!!!!!!")
    }

    return (
    <div>Counter: {count} <Button setCount={setCount}/>
    </div>
    )
}
export default Counter;