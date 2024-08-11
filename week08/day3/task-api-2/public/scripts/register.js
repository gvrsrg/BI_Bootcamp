const submitBtn = document.getElementById("registerBtn");
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    const allFilled = Array.from(inputs).every(
      (input) => input.value.trim() !== ""
    );
    submitBtn.disabled = !allFilled;
  });
});

const loadingSpinner = `
<div class="fa-3x">
<i class="fa-solid fa-spinner fa-spin-pulse"></i>
</div>
`;

document
  .getElementById("registerForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const { name, lastName, email, username, password } = e.target;

    const newUser = {
      email: email.value,
      username: username.value,
      first_name: name.value,
      last_name: lastName.value,
      password: password.value,
    };

    [name, lastName, email, username, password].forEach(
      (input) => (input.value = "")
    );

    try {
      document.getElementById("resultDisplay").innerHTML = loadingSpinner;

      const response = await fetch("/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const result = await response.json();

      document.getElementById(
        "resultDisplay"
      ).innerHTML = `<p>${result.message}</p>`;
    } catch (error) {
      console.error("Error:", error);
    }
  });