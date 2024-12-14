const fieldEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

fieldEl.addEventListener("input", () => {
  const fieldValue = fieldEl.value;
  if (fieldValue == "") {
    outputEl.textContent = fieldValue.trim() || "Anonymous";
    return;
  }
  outputEl.textContent = fieldValue.trim();
});
