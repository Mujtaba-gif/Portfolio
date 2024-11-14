// Get elements
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.getElementById('close-menu'); // Updated selector to match HTML id

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

// Scroll to section and close the mobile menu when a menu item is clicked
const menuOptions = mobileMenu.querySelectorAll('.menu-item'); // Select all menu options

menuOptions.forEach(option => {
    option.addEventListener('click', () => {
        const targetId = option.getAttribute('data-target'); // Get target section id
        const targetSection = document.getElementById(targetId); // Find the target section

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
            closeMenuFunction(); // Close the mobile menu
        }
    });
});
