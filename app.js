const hamButton = document.getElementById('nav-toggle');
const closeButton = document.getElementById('nav-close');
const navLinks = document.getElementById('nav-links');

hamButton.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
    hamButton.style.display = 'none'; // Hide hamburger icon
    closeButton.style.display = 'block'; // Show close icon
});

closeButton.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
    hamButton.style.display = 'block'; // Show hamburger icon
    closeButton.style.display = 'none'; // Hide close icon
});