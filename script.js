// script.js
const btn = document.getElementById('animateBtn');
const toggle = document.getElementById('darkModeToggle');
const body = document.body;

// Load user preference from localStorage
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark');
  toggle.checked = true;
}

// Save preference when toggled
toggle.addEventListener('change', () => {
  body.classList.toggle('dark', toggle.checked);
  localStorage.setItem('darkMode', toggle.checked);
});

// Animate button on click
btn.addEventListener('click', () => {
  btn.classList.add('animated');
  setTimeout(() => btn.classList.remove('animated'), 500);
});