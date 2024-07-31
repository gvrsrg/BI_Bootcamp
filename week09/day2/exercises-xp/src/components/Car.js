import { useState } from 'react'

export default function Car(props) {
    const {carInfo} = props
    const [color, setColor] = useState("red")



    return (<div>This is {color} {carInfo.name}</div>)
}
    