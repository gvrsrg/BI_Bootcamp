let correctAnswer;
let score = 0;
let timeoutId;
let playerName = "";
let difficulty = "";
const leaderBoard = {}
const divLeaderBoard = document.getElementById("leader-board")


async function createGame(e) {
  e.preventDefault();

  playerName = e.target.name.value;
  difficulty = e.target.difficulty.value;

  try {
    const res = await fetch("/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: playerName, difficulty }),
    });

    if (!res.ok) {
      throw new Error("Error creating user!");
    }

    const { userName, difficulty: userDifficulty } = await res.json();

    welcomeUserMessage(userName);
    fetchNewEmoji(userDifficulty);
  } catch (error) {
    console.error("Error:", error);
    alert("Error creating user");
  }

  document.getElementById("start-up-section").style.display = "none";
  document.getElementById("game-section").style.display = "flex";
}

function welcomeUserMessage(userName) {
  document.getElementById(
    "welcome-message"
  ).textContent = `Welcome ${userName}`;
}

async function fetchNewEmoji(difficulty) {
  try {
    const res = await fetch("/emojis");

    if (!res.ok) {
      throw new Error("Error fetching Emoji.");
    }

    const data = await res.json();
    const randomEmoji = getRandomEmoji(data);

    printEmojiOnHtml(randomEmoji);
    displayOptionsOnHtml(data, difficulty);
    startTimer(difficulty);
  } catch (err) {
    console.error(err);
  }
}

function getRandomEmoji(emojis) {
  const randomNumber = Math.floor(Math.random() * emojis.length);
  correctAnswer = emojis[randomNumber];
  return correctAnswer;
}

function printEmojiOnHtml(randomEmoji) {
  document.getElementById("emojis-display").innerHTML = `
      <P>${randomEmoji.emoji}</P>
      `;
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function displayOptionsOnHtml(emojis, difficulty) {
  document.getElementById("options-display").innerHTML = "";

  const allOptions = [correctAnswer.name];
  const shuffledEmojis = shuffleArray(
    emojis.filter((e) => e.name !== correctAnswer.name)
  );

  let amountOfOptions =
    difficulty === "easy" ? 4 : difficulty === "medium" ? 6 : 8;

  for (let i = 0; i < amountOfOptions - 1; i++) {
    allOptions.push(shuffledEmojis[i].name);
  }

  const shuffledOptions = shuffleArray(allOptions);

  shuffledOptions.forEach(
    (option) =>
      (document.getElementById("options-display").innerHTML += `
    <label>
        <input type="radio" name="option" value=${option} required>
        ${option}
    </label>
    `)
  );
}

async function submitAnswer(e) {
  e.preventDefault();

  const choice = document.querySelector('input[name="option"]:checked').value;

  try {
    const res = await fetch("/emojis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ choice, correctAnswer }),
    });

    if (!res.ok) {
      throw new Error("Error adding task!");
    }
    const { message, score: updatedScore } = await res.json();

    document.getElementById("answer-info").innerHTML = message;
    score = updatedScore;
    document.getElementById("score").innerHTML = score;

    fetchNewEmoji(difficulty);
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to submit guess.");
  }
}

function startTimer(difficulty) {
  let timeBasedOnDifficulty =
    difficulty === "easy" ? 15000 : difficulty === "medium" ? 10000 : 5000;

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    alert("Your time has run out.");
    fetchNewEmoji(difficulty);
  }, timeBasedOnDifficulty);
}

function showLeaderBoard() {
    divLeaderBoard.innerHTML = JSON.stringify(leaderBoard, null, 2)
}



function finishGame() {
  clearTimeout(timeoutId);
  alert(`Game over! Your score: ${score}`);
  leaderBoard[playerName] = score
  location.reload();
//   showLeaderBoard()
}