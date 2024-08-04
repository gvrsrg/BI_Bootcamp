import Input from './Input'
import ShowCounter from './ShowCounter'

export default function Display(props) {
    const { count } = props
  return (
    <>
      <h1>Counter</h1>
      <ShowCounter count={count}/>
      <Input />
    </>
  )
}
