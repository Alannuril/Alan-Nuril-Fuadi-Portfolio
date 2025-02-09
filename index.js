// Get the theme toggle button and icons
const themeToggle = document.querySelector('.icon-mode button');
const sunIcon = themeToggle.querySelector('svg:first-child');
const moonIcon = themeToggle.querySelector('svg:last-child');

// Function to set the initial theme based on user preference
function setInitialTheme() {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme based on saved preference or system preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        document.body.classList.remove('dark-mode');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}

// Function to toggle theme and icons
function toggleTheme() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    
    // Toggle icon visibility
    sunIcon.style.display = isDarkMode ? 'none' : 'block';
    moonIcon.style.display = isDarkMode ? 'block' : 'none';
    
    // Save user preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Add click event listener to theme toggle button
themeToggle.addEventListener('click', toggleTheme);

// Set initial theme when page loads
document.addEventListener('DOMContentLoaded', setInitialTheme);