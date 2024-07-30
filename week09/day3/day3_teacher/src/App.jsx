import { useState } from "react";
import "./App.css";

function App() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [num, setNum] = useState("");
  // const [yesno, setYesNo] = useState(true);
  // const [text, setText] = useState("");

  const [inputs, setInputs] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.name.value);
    // console.log(name, email, num, yesno, text);
    // console.log(inputs);
    // setInputs({ ...inputs, name: "", email: "" });
  };

  const handleInputs = (e) => {
    // console.log(e.target.type, e.target.value, e.target.name, e.target.checked);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setInputs({ ...inputs, [e.target.name]: value });
    console.log(inputs);
  };

  return (
    <>
      <h2>Form</h2> {inputs?.name}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder='Name'
          name='name'
          onChange={(e) => handleInputs(e)}
          // value={inputs?.name}
        />
        <br />
        <input
          placeholder='Email'
          name='email'
          onChange={(e) => handleInputs(e)}
        />
        <br />
        <select name='num' onChange={(e) => handleInputs(e)}>
          <option value={-1}>Please select a number</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
        <br />
        Yes/No:
        <input
          type='checkbox'
          name='yesno'
          // checked={yesno}
          onChange={(e) => handleInputs(e)}
        />
        <br />
        <textarea name='text' onChange={(e) => handleInputs(e)}></textarea>
        <br />
        <input type='submit' value='Submit' />
      </form>
    </>
  );
}

export default App;
