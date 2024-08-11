const submitBtn = document.getElementById("loginBtn");
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

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const { username, password } = e.target;

  const loginData = {
    username: username.value,
    password: password.value,
  };

  [username, password].forEach((input) => (input.value = ""));

  try {
    document.getElementById("resultDisplay").innerHTML = loadingSpinner;

    const response = await fetch("/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const result = await response.json();
    console.log("result: ", result);

    document.getElementById("resultDisplay").innerHTML = result.user
      ? `<p>Welcome back ${result.user.username}!</p>`
      : `${result.message}`;
  } catch (error) {
    console.error("Error:", error);
  }
});