const toggleModeButton = document.getElementById('toggle-mode');

toggleModeButton.addEventListener('click', () => {
    const bodyElement = document.body;
    bodyElement.classList.toggle('dark-mode');
});