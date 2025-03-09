export function getTexts() {
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

  let assemblerCodeText = assemblerCodeTextElement?.innerHTML ?? "";
  let simulationConfigText = simulationConfigTextElement?.innerHTML ?? "";
  let commentText = commentTextElement?.innerHTML ?? "";
  let dumpText = dumpTextElement?.innerHTML ?? "";
  let testCasesResultText = testCasesResultTextElement?.innerHTML ?? "";
  let simulationLogText = simulationLogTextElement?.innerHTML ?? "";

  return {
    assemblerCodeText,
    simulationConfigText,
    commentText,
    dumpText,
    testCasesResultText,
    simulationLogText,
  };
}
