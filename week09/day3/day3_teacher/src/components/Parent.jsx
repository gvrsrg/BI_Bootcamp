const Parent = (props) => {
  console.log(props);
  //   return <h2>Parent Component</h2>;
  if (props.auth === "admin") return props.children;

  return <h2>Not authorized to see child</h2>;
};
export default Parent;
