
document.querySelectorAll('.kachel').forEach(kachel => {
  kachel.addEventListener('click', () => {
    const contentId = kachel.dataset.content;
    document.getElementById('kachel-content').innerHTML = `<p>Inhalt für <strong>${kachel.textContent}</strong> wird hier angezeigt …</p>`;
  });
});
