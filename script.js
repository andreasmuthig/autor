const contentBox = document.getElementById("contentBox");
const texts = ['Ich bin Andreas, Technikliebhaber und Buchautor. Ich stelle die richtigen Fragen – auch an KI.', 'Vorlagen, Tools und Ideen, um ChatGPT besser zu nutzen.', 'Updates zu Projekten, Veröffentlichungen und Entwicklungen.', 'Kreative Prompt-Beispiele und interaktive Experimente mit GPT.', 'Live-Workshops zu KI, Fragen, Texten und Tools.', 'Blog-Artikel über kluge Fragen, moderne Tools und Strategien.', 'Leserstimmen und Rezensionen zu meinem Buch und Projekten.', 'Antworten auf häufige Fragen zur Technik der klugen Frage.'];

function showContent(index) {
  contentBox.classList.remove("visible");
  setTimeout(() => {
    contentBox.innerHTML = `<p>${texts[index]}</p>`;
    contentBox.classList.add("visible");
  }, 100);
}
