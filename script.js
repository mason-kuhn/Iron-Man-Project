const element = document.getElementById("chaos-text");
const text = element.textContent;
element.textContent = ""; // clear original text

text.split("").forEach(char => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.display = "inline-block"; // keeps letters on the same line
    span.style.position = "relative";     // allows vertical offset
    // random Y offset, e.g., +/- 10px
    span.style.top = (Math.random() - 0.5) * 10 + "px";
    element.appendChild(span);
});
