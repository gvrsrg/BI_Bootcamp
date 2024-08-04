import { useState } from "react";
import FormInformation from "./FormInformation.js";

export default function FormComponent() {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    age: "",
    selectedGender: "",
    destination: "",
    nuts: false,
    lactose: false,
    vegan: false,
  });

  const {
    firstName,
    lastName,
    age,
    selectedGender,
    destination,
    nuts,
    lactose,
    vegan,
  } = inputs;

  async function handleSubmit(e) {
    e.preventDefault();

    const queryParams = new URLSearchParams({
      firstName,
      lastName,
      age,
      gender: selectedGender,
      destination,
    })
    const options = {'nutsFree':nuts,
      'lactoseFree': lactose,
      'vegan': vegan}
    Object.keys(options).forEach((key) => {if (options[key]){
        queryParams.append(key, 'on')
    } })
    const stringParams = queryParams.toString();

    const url = `http://localhost:3000/?${stringParams}`;

    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        console.error("Error fetching data");
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      //   const data = await res.json();
      //   console.log(data);
      window.location.href = res.url;
    } catch (err) {
      console.error(err);
    }
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === "radio") {
      setInputs({ ...inputs, [name]: value });
    } else if (type === "checkbox") {
      setInputs({ ...inputs, [name]: checked });
    } else {
      setInputs({ ...inputs, [name]: value });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <br/>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <br/>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={handleChange}
          placeholder="Age"
        />
        <br/>

        <label>
          <input
            type="radio"
            name="selectedGender"
            value="male"
            checked={selectedGender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <br/>
        <label>
          <input
            type="radio"
            name="selectedGender"
            value="female"
            checked={selectedGender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
        <br/>

        <label htmlFor="destination">Select your destination:</label>
        <select
          id="destination"
          name="destination"
          value={destination}
          onChange={handleChange}
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="thailand">Thailand</option>
          <option value="japan">Japan</option>
          <option value="brazil">Brazil</option>
        </select>
        <br/>

        <label>
          <input
            type="checkbox"
            name="nuts"
            checked={nuts}
            onChange={handleChange}
          />
          Nuts
        </label>
        <br/>
        <label>
          <input
            type="checkbox"
            name="lactose"
            checked={lactose}
            onChange={handleChange}
          />
          Lactose
        </label>
        <br/>
        <label>
          <input
            type="checkbox"
            name="vegan"
            checked={vegan}
            onChange={handleChange}
          />
          Vegan
        </label>
        <br/>
        <button type="submit">Submit</button>
      </form>

      <FormInformation
        firstName={firstName}
        lastName={lastName}
        age={age}
        gender={selectedGender}
        destination={destination}
        nuts={nuts}
        lactose={lactose}
        vegan={vegan}
      />
    </>
  );
}

