document.addEventListener('DOMContentLoaded', () => {
  const generateButton = document.getElementById('generateButton');
  const resultDiv = document.getElementById('result');
  const themeToggle = document.getElementById('themeToggle');
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');
  const currencyNotesContainer = document.getElementById('currency-notes-container');

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function generateTotoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      const randomNumber = Math.floor(Math.random() * 49) + 1;
      numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }

  generateButton.addEventListener('click', () => {
    const generatedNumbers = generateTotoNumbers();
    resultDiv.innerHTML = ''; // Clear previous results
    generatedNumbers.forEach(number => {
      const numberCircle = document.createElement('div');
      numberCircle.classList.add('number-circle');
      numberCircle.textContent = number;
      numberCircle.style.backgroundColor = getRandomColor(); // Apply random color
      resultDiv.appendChild(numberCircle);
    });
  });

  // Day/Night mode functionality
  function applyTheme(isDarkMode) {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      if (sunIcon) sunIcon.style.opacity = '0';
      if (moonIcon) moonIcon.style.opacity = '1';
    } else {
      document.body.classList.remove('dark-mode');
      if (sunIcon) sunIcon.style.opacity = '1';
      if (moonIcon) moonIcon.style.opacity = '0';
    }
  }

  // Load theme from localStorage or default to light mode
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    applyTheme(true);
  } else {
    applyTheme(false); // Default to light if no preference or 'light'
  }

  themeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.contains('dark-mode');
    applyTheme(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  });

  // Currency notes animation
  function createCurrencyNote() {
    const note = document.createElement('div');
    note.classList.add('currency-note');
    
    // Randomize starting position (y-axis)
    note.style.top = Math.random() * 100 + '%';
    
    // Randomize animation duration and delay
    const animationDuration = Math.random() * 10 + 5; // 5 to 15 seconds
    const animationDelay = Math.random() * 5; // 0 to 5 seconds
    note.style.animationDuration = animationDuration + 's';
    note.style.animationDelay = animationDelay + 's';

    // Randomize size slightly
    const randomSize = Math.random() * 0.5 + 0.75; // 0.75 to 1.25 scale
    note.style.transform = `scale(${randomSize})`;
    
    // Randomize rotation
    const randomRotation = Math.random() * 360;
    note.style.setProperty('--initial-rotation', `${randomRotation}deg`);
    note.style.setProperty('--final-rotation', `${randomRotation + 720}deg`); // Ensure multiple rotations


    currencyNotesContainer.appendChild(note);

    // Remove note after animation to prevent DOM bloat
    note.addEventListener('animationend', () => {
      note.remove();
    });
  }

  // Generate a continuous stream of notes
  setInterval(createCurrencyNote, 1000); // Create a new note every second
});