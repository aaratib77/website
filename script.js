// Get the elements
const startBtn = document.getElementById("grid-start");
const restartBtn = document.getElementById("grid-restart");
const quitBtn = document.getElementById("grid-quit");
const abortBtn = document.getElementById("grid-abort");
const gridArea = document.getElementById("grid-area");
const timerDisplay = document.getElementById("grid-timer");
const resultDisplay = document.getElementById("grid-result");
const introMessage = document.getElementById("grid-intro");
const buttonsRow = document.getElementById("grid-buttons");

let nextNumber = 1;
let startTime;
let timerInterval;

// Listeners
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);

// START GAME
function startGame() {
  nextNumber = 1;
  resultDisplay.textContent = "";
  
  buttonsRow.style.display = "none";
  startBtn.style.display = "none";
  introMessage.style.display = "none";
  
  abortBtn.style.display = "inline-block";
  gridArea.style.display = "grid";
  timerDisplay.style.display = "block";

  timerDisplay.textContent = "Time: 0.00s";
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 10);

  const numbers = Array.from({ length: 16 }, (_, i) => i + 1)
    .sort(() => Math.random() - 0.5);

  gridArea.innerHTML = "";

  numbers.forEach(num => {
    const cell = document.createElement("div");
    cell.textContent = num;
    
    cell.style.padding = "1rem";
    cell.style.background = "#262626"; 
    cell.style.color = "#ffffff";      
    cell.style.borderRadius = "8px";
    cell.style.fontSize = "1.2rem";
    cell.style.fontWeight = "600";
    cell.style.cursor = "pointer";
    cell.style.userSelect = "none";
    cell.style.textAlign = "center";
    cell.style.transition = "background 0.2s, transform 0.1s";

    cell.addEventListener("click", () => handleClick(num, cell));

    gridArea.appendChild(cell);
  });
}

// HANDLE TAPS
function handleClick(num, cell) {
  if (num === nextNumber) {
    cell.style.background = "#059669"; 
    cell.style.color = "#ffffff";
    cell.style.pointerEvents = "none";
    nextNumber++;

    if (nextNumber > 16) endGame();
  } else {
    cell.classList.add("shake");
    cell.style.background = "#dc2626"; 
    cell.style.color = "#ffffff";

    setTimeout(() => {
      cell.classList.remove("shake");
      cell.style.background = "#262626"; 
    }, 300);
  }
}

function updateTimer() {
  const elapsed = (Date.now() - startTime) / 1000;
  timerDisplay.textContent = "Time: " + elapsed.toFixed(2) + "s";
}

// END GAME
function endGame() {
  clearInterval(timerInterval);
  const finalTime = timerDisplay.textContent.replace("Time: ", "");
  
  resultDisplay.textContent = "Nice work! You completed the challenge in " + finalTime + ".";
  resultDisplay.style.color = "#ededed"; 
  resultDisplay.style.marginBottom = "1rem";
  
  abortBtn.style.display = "none";
  buttonsRow.style.display = "flex";
}

// ABORT LOGIC
abortBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    gridArea.innerHTML = "";
    
    resultDisplay.innerText = "Game Aborted";
    resultDisplay.style.color = "#ef4444";
    resultDisplay.style.marginBottom = "1rem";
    
    abortBtn.style.display = "none";
    buttonsRow.style.display = "flex";
});

// QUIT BUTTON LOGIC
quitBtn.addEventListener("click", () => {
  gridArea.style.display = "none";
  timerDisplay.style.display = "none";
  buttonsRow.style.display = "none";
  abortBtn.style.display = "none";
  
  resultDisplay.textContent = "";
  
  startBtn.style.display = "inline-block";
  introMessage.style.display = "block";
});

// --- SECURE CONTACT INFO INJECTION ---
document.addEventListener("DOMContentLoaded", function() {
    
    // Obfuscated Data (Split into parts so bots can't read it)
    const eUser = "aaratibhandari95";
    const eDomain = "gmail.com";
    const email = eUser + "@" + eDomain;

    const p1 = "0424";
    const p2 = "835";
    const p3 = "017";
    const phone = `${p1} ${p2} ${p3}`;

    const linkedinBase = "https://linkedin.com/in/";
    const linkedinUser = "aaratibhandarii";
    const linkedinFull = linkedinBase + linkedinUser;

    const content = `
        <p style="margin-bottom: 0.5rem;">
            Email: <a href="mailto:${email}"><strong>${email}</strong></a>
        </p>
        <p style="margin-bottom: 0.5rem;">
            Phone: <strong>${phone}</strong>
        </p>
        <p style="margin-bottom: 1.5rem;">
            LinkedIn: <a href="${linkedinFull}" target="_blank">linkedin.com/in/${linkedinUser}</a>
        </p>
        <a href="Aarati_Resume.pdf" target="_blank" class="btn-cv">View CV</a>
    `;

    const container = document.getElementById('contact-container');
    if (container) {
        container.innerHTML = content;
    }
});
