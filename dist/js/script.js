


document.addEventListener('DOMContentLoaded', () => {
    console.log('Ahmed')
    const selectDiv = document.querySelector('.custom-select');
    const selectedDiv = selectDiv.querySelector('.select-selected');
    const itemsDiv = selectDiv.querySelector('.select-items');

    // Check the current theme from localStorage or default to device-based
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.body.classList.add(`${currentTheme}-mode`);

    // Set the initial icon based on the current theme
    const icons = {
        light: '<i class="fas fa-sun"></i>',
        dark: '<i class="fas fa-moon"></i>',
        device: '<i class="fas fa-desktop"></i>'
    };
    selectedDiv.innerHTML = icons[currentTheme];

    // Toggle the dropdown
    selectedDiv.addEventListener('click', () => {
        itemsDiv.classList.toggle('select-hide');
        console.log('s')
    });

    // Handle item selection
    itemsDiv.querySelectorAll('div').forEach(item => {
        item.addEventListener('click', function () {
            const newTheme = this.getAttribute('data-value');
            selectedDiv.innerHTML = icons[newTheme]; // Update the selected icon
            itemsDiv.classList.add('select-hide');
            document.body.classList.remove('light-mode', 'dark-mode');

            if (newTheme === 'device') {
                document.body.classList.remove('light-mode', 'dark-mode');
            } else {
                document.body.classList.add(`${newTheme}-mode`);
            }

            localStorage.setItem('theme', newTheme);
        });
    });
});












const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const menuBranding = document.querySelector('.menu-branding')
const navItems = document.querySelectorAll('.nav-item')

// Set Initial State Of Menu 

let showMenu = false;

const toggleMenu = () => {
    if (!showMenu) {
        // if it is not show,show it 
        menuBtn.classList.add('close')
        menu.classList.add('show')
        menuNav.classList.add('show')
        menuBranding.classList.add('show')
        navItems.forEach((item) => { item.classList.add('show') })
        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close')
        menu.classList.remove('show')
        menuNav.classList.remove('show')
        menuBranding.classList.remove('show')
        navItems.forEach((item) => { item.classList.remove('show') })
        // Set Menu State
        showMenu = false;

    }
}

menuBtn.addEventListener('click', toggleMenu)


// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************
// ***************************************************



// Close the dropdown if clicked outside
document.addEventListener('click', (e) => {
    const selectDiv = document.querySelector('.custom-select');
    if (!selectDiv.contains(e.target)) {
        const itemsDiv = selectDiv.querySelector('.select-items');
        itemsDiv.classList.add('select-hide');
    }
});
