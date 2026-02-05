document.addEventListener('DOMContentLoaded', () => {
  const generateButton = document.getElementById('generateButton');
  const resultDiv = document.getElementById('result');
  const themeToggle = document.getElementById('themeToggle');
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');
  const currencyNotesContainer = document.getElementById('currency-notes-container');
  const zodiacAnimalSelect = document.getElementById('zodiacAnimal');

  const chineseZodiacLuckyNumbers = {
    "Rat": [2, 3],
    "Ox": [1, 4, 9],
    "Tiger": [1, 3, 4],
    "Rabbit": [3, 4, 6, 9],
    "Dragon": [1, 6, 7],
    "Snake": [2, 8, 9],
    "Horse": [2, 3, 7],
    "Goat": [2, 3, 4, 7, 9], // Also known as Sheep
    "Monkey": [1, 4, 7, 8, 9],
    "Rooster": [5, 7, 8],
    "Dog": [3, 4, 9],
    "Pig": [2, 5, 8]
  };

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function generateTotoNumbers() {
    const selectedAnimal = zodiacAnimalSelect.value;
    let luckyNumbersForAnimal = [];

    if (selectedAnimal && chineseZodiacLuckyNumbers[selectedAnimal]) {
      // Filter lucky numbers to be within Toto range (1-49) and remove duplicates if any
      luckyNumbersForAnimal = chineseZodiacLuckyNumbers[selectedAnimal].filter(num => num >= 1 && num <= 49);
    }

    const generatedNumbers = new Set();

    // Try to include up to 3 lucky numbers
    const numLuckyToInclude = Math.min(luckyNumbersForAnimal.length, 3);
    for (let i = 0; i < numLuckyToInclude; i++) {
      const randomIndex = Math.floor(Math.random() * luckyNumbersForAnimal.length);
      generatedNumbers.add(luckyNumbersForAnimal[randomIndex]);
      luckyNumbersForAnimal.splice(randomIndex, 1); // Remove to prevent re-selection
    }

    // Fill the rest with random unique numbers
    while (generatedNumbers.size < 6) {
      const randomNumber = Math.floor(Math.random() * 49) + 1;
      generatedNumbers.add(randomNumber);
    }

    return Array.from(generatedNumbers).sort((a, b) => a - b);
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