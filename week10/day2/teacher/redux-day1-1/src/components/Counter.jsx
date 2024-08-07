import { connect } from "react-redux";

import { increment, decrement, INCREMENT } from "../redux/actions";

const Counter = (props) => {
  console.log(props);
  return (
    <>
      <h2>Redux Counter</h2>
      <button
        onClick={() =>
          props.dispatch({
            type: INCREMENT,
            payload: 10,
          })
        }
      >
        {" "}
        +{" "}
      </button>
      {props.count}
      <button onClick={() => props.dispatch(decrement(5))}> - </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counterReducer.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: () =>
      dispatch({
        type: INCREMENT,
        payload: 10,
      }),
    minus: () => dispatch(decrement(5)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
