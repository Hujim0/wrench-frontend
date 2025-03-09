let assemblerCodeText: string;
let simulationConfigText: string;
let commentText: string;
let dumpText: string;
let testCasesResultText: string;
let simulationLogText: string;

const assemblerCodeTextElement = document.getElementById(
  "assembler-code-text-element",
);
const simulationConfigTextElement = document.getElementById(
  "simulation-config-text-element",
);
const dumpTextElement = document.getElementById("dump-text-element");
const commentTextElement = document.getElementById("comment-text-element");
const testCasesResultTextElement = document.getElementById(
  "test_cases_result-text-element",
);
const simulationLogTextElement = document.getElementById(
  "simulation-log-text-element",
);

assemblerCodeText = assemblerCodeTextElement?.innerHTML ?? "";
simulationConfigText = simulationConfigTextElement?.innerHTML ?? "";
commentText = commentTextElement?.innerHTML ?? "";
dumpText = dumpTextElement?.innerHTML ?? "";
testCasesResultText = testCasesResultTextElement?.innerHTML ?? "";
simulationLogText = simulationLogTextElement?.innerHTML ?? "";

if (commentText.trim() === "") {
  document.getElementById("comment-header")?.classList.add("hidden");
  document.getElementById("empty-comment-header")?.classList.remove("hidden");
}

if (dumpText.trim() === "") {
  document.getElementById("accordion-collapse-dump")?.classList.add("hidden");
  document.getElementById("dump-empty-tag")?.classList.remove("hidden");
}

if (testCasesResultText.trim() === "") {
  document
    .getElementById("accordion-collapse-test-cases-result")
    ?.classList.add("hidden");
  document
    .getElementById("test-cases-result-empty-tag")
    ?.classList.remove("hidden");
}

if (simulationLogText.trim() === "") {
  document
    .getElementById("accordion-collapse-simulation-log")
    ?.classList.add("hidden");
  document
    .getElementById("simulation-log-empty-tag")
    ?.classList.remove("hidden");
}

const statusTextElement = document.getElementById("status-text-element");
if (statusTextElement?.innerText === "") {
  statusTextElement.innerHTML =
    'status = "" <span class="grey">/* nothing returned */</span>';
}

const testCasesStatusElement = document.getElementById(
  "test-cases-status-element",
);
if (testCasesStatusElement?.innerText === "") {
  testCasesStatusElement.innerHTML =
    'test_cases_status = "" <span class="grey">/* nothing returned */</span>';
}

var copyCountAssembler = 0;
async function copyAssembler() {
  await navigator.clipboard.writeText(assemblerCodeText);
  const button = document.getElementById("copy-assembler-button");
  let buttonText = "";
  copyCountAssembler++;
  if (copyCountAssembler === 1) {
    buttonText = "[copied!]";
    button.classList.remove("white");
    button.classList.add("green");
  } else {
    buttonText = `[copied ${copyCountAssembler} times!]`;
  }

  button.innerText = buttonText;
}

var copyCountSimulationConfig = 0;
async function copySimulationConfig() {
  await navigator.clipboard.writeText(simulationConfigText);
  const button = document.getElementById("copy-simulation-config-button");
  let buttonText = "";
  copyCountSimulationConfig++;
  if (copyCountSimulationConfig === 1) {
    buttonText = "[copied!]";
    button.classList.remove("white");
    button.classList.add("green");
  } else {
    buttonText = `[copied ${copyCountSimulationConfig} times!]`;
  }

  button.innerText = buttonText;
}

var copiedLinkCount = 0;
async function copyLink() {
  await navigator.clipboard.writeText(window.location.href);
  copiedLinkCount++;
  let button = document.getElementById("copy-link-button");
  button.classList.remove("white");
  button.classList.add("green");
  let button_text = "";
  if (copiedLinkCount === 1) {
    button_text = "[copied!]";
  } else {
    button_text = `[copied ${copiedLinkCount} times!]`;
  }
  button.innerText = button_text;
}

async function copyTextAndChangeButtonText(
  button: HTMLButtonElement,
  text: string,
) {
  await navigator.clipboard.writeText(text);
  let count = 0;
  if (button.innerText == "[copied!]") {
    count = 1;
  } else if (button.innerText.startsWith("[copied ")) {
    let count_text = button.innerText
      .substring("[copied ".length)
      .split(" ")[0];

    count = Number(count_text);
  }
  count++;

  let buttonText = "";
  if (count === 1) {
    buttonText = "[copied!]";
    button.classList.remove("white");
    button.classList.add("green");
  } else {
    buttonText = `[copied ${count} times!]`;
  }

  button.innerText = buttonText;
}
