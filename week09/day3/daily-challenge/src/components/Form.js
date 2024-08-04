import { useState } from "react";
import FormInformation from "./FormInformation.js";

function Form() {
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
      lactoseFree: lactose ? "on" : "off",
    }).toString();

    const url = `http://localhost:3000/?${queryParams}`;

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

  function handleInputs(e) {
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
          onChange={handleInputs}
          placeholder="First Name"
        />

        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleInputs}
          placeholder="Last Name"
        />

        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={handleInputs}
          placeholder="Age"
        />
        <br/>

        <label>
          <input
            type="radio"
            name="selectedGender"
            value="male"
            checked={selectedGender === "male"}
            onChange={handleInputs}
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
            onChange={handleInputs}
          />
          Female
        </label>
        <br/>

        <label htmlFor="destination">Select your destination:</label>
        <select
          id="destination"
          name="destination"
          value={destination}
          onChange={handleInputs}
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
            onChange={handleInputs}
          />
          Nuts
        </label>

        <label>
          <input
            type="checkbox"
            name="lactose"
            checked={lactose}
            onChange={handleInputs}
          />
          Lactose
        </label>

        <label>
          <input
            type="checkbox"
            name="vegan"
            checked={vegan}
            onChange={handleInputs}
          />
          Vegan
        </label>

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

export default Form;