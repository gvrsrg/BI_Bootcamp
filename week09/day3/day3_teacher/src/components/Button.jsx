const Button = (props) => {
  const { setCount } = props;
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}> + </button>
    </>
  );
};
export default Button;
