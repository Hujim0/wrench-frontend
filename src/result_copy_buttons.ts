import { getTexts } from "./result_rendered_texts.ts";

const {
  assemblerCodeText,
  simulationConfigText,
  commentText,
  dumpText,
  testCasesResultText,
  simulationLogText,
} = getTexts();

const copyAssemblerButton = document.getElementById("copy-assembler-button");
const copySimulationConfigButton = document.getElementById(
  "copy-simulation-config-button",
);
const copyLinkButton = document.getElementById("copy-link-button");

copyAssemblerButton?.addEventListener("click", () => {
  copyTextAndChangeButtonText(copyAssemblerButton, assemblerCodeText);
});
copySimulationConfigButton?.addEventListener("click", () => {
  copyTextAndChangeButtonText(copySimulationConfigButton, simulationConfigText);
});
copyLinkButton?.addEventListener("click", () => {
  copyTextAndChangeButtonText(copyLinkButton, window.location.href);
});

async function copyTextAndChangeButtonText(button: HTMLElement, text: string) {
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
