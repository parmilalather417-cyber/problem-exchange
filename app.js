let problems = JSON.parse(localStorage.getItem("problems")) || [];

function saveData() {
  localStorage.setItem("problems", JSON.stringify(problems));
}

function addProblem() {
  const input = document.getElementById("problemInput");
  const text = input.value.trim();
  const category = document.getElementById("category").value;

  if (!text) return;

  problems.push({
    text: text,
    category: category,
    solutions: []
  });

  input.value = "";

  saveData();
  showProblems();
}

function addSolution(problemIndex) {
  const text = prompt("Apna solution likho:");

  if (!text || text.trim() === "") return;

  problems[problemIndex].solutions.push({
    text: text.trim(),
    votes: 0
  });

  saveData();
  showProblems();
}

function voteSolution(problemIndex, solutionIndex) {
  problems[problemIndex].solutions[solutionIndex].votes++;

  problems[problemIndex].solutions.sort(
    (a, b) => b.votes - a.votes
  );

  saveData();
  showProblems();
}

function deleteProblem(problemIndex) {
  if (confirm("Delete this problem?")) {
    problems.splice(problemIndex, 1);

    saveData();
    showProblems();
  }
}

function deleteSolution(problemIndex, solutionIndex) {
  if (confirm("Delete this solution?")) {
    problems[problemIndex].solutions.splice(solutionIndex, 1);

    saveData();
    showProblems();
  }
}

function showProblems() {

  const search = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const filterCategory = document
    .getElementById("filterCategory")
    .value;

  const list = document.getElementById("problemList");
  list.innerHTML = "";

  problems.forEach((problem, problemIndex) => {

    if (!problem.text.toLowerCase().includes(search)) {
      return;
    }

    if (
      filterCategory !== "All" &&
      problem.category !== filterCategory
    ) {
      return;
    }

    let html = `
      <div class="problem">

        <p><b>Category:</b> ${problem.category}</p>

        <p><b>Problem:</b> ${problem.text}</p>

        <button onclick="addSolution(${problemIndex})">
          💡 Add Solution
        </button>

        <button onclick="deleteProblem(${problemIndex})">
          🗑 Delete Problem
        </button>

        <hr>
    `;

    problem.solutions.forEach((solution, solutionIndex) => {

      html += `
        <div class="solution">

          ✔ ${solution.text}

          <br><br>

          👍 ${solution.votes}

          <button onclick="voteSolution(${problemIndex}, ${solutionIndex})">
            Upvote
          </button>

          <button onclick="deleteSolution(${problemIndex}, ${solutionIndex})">
            🗑 Delete Solution
          </button>

        </div>
      `;

    });

    html += `
      </div>
    `;

    list.innerHTML += html;

  });

}

showProblems();