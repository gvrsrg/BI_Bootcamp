import { connect } from "react-redux"
import { increment, decrement } from "../redux/actions"

function Counter(props) {

  
  return (
    <>
        <h2>Redux Counter</h2>
        <button onClick={() => props.increment()}>+</button>
        {props.count}
        <button onClick={() => props.decrement()}>-</button>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)