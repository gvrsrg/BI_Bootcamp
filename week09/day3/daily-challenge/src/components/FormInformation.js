function FormInformation({
    firstName,
    lastName,
    age,
    gender,
    destination,
    nuts,
    lactose,
    vegan,
  }) {
    return (
      <div>
        <section>
          <h2>Entered information:</h2>
          <p>
            Your name: {firstName} {lastName}
          </p>
          <p>Your age: {age}</p>
          <p>Your gender: {gender}</p>
          <p>Your destination: {destination}</p>
        </section>
  
        <section>
          <h4>Your dietary restrictions:</h4>
          <p>**Nuts free : {nuts ? "Yes" : "No"}</p>
          <p>**Lactose free : {lactose ? "Yes" : "No"}</p>
          <p>**Vegan meal : {vegan ? "Yes" : "No"}</p>
        </section>
      </div>
    );
  }
  
  export default FormInformation;