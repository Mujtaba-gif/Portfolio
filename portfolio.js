// Get elements
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

// Function to open the mobile menu
function openMenu() {
    mobileMenu.classList.add('active'); // Add active class to show menu
}

// Function to close the mobile menu
function closeMenuFunction() {
    mobileMenu.classList.remove('active'); // Remove active class to hide menu
}

// Event listeners
menuButton.addEventListener('click', openMenu); // Open menu on hamburger button click
closeMenu.addEventListener('click', closeMenuFunction); // Close menu on close button click

// Close the mobile menu when an option is clicked
const menuOptions = mobileMenu.querySelectorAll('li'); // Select all menu options
menuOptions.forEach(option => {
    option.addEventListener('click', closeMenuFunction); // Close menu on option click
});
