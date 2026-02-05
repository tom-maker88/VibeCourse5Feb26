document.addEventListener('DOMContentLoaded', () => {
  const generateButton = document.getElementById('generateButton');
  const resultDiv = document.getElementById('result');
  const themeToggle = document.getElementById('themeToggle');

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
      resultDiv.appendChild(numberCircle);
    });
  });

  // Day/Night mode functionality
  function applyTheme(isDarkMode) {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
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
});