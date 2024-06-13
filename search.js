const searchIcon = document.getElementById('searchIcon');
const searchContainer = document.getElementById('searchContainer');
const closeButton = document.getElementById('closeButton');

searchIcon.addEventListener('click', () => {
    searchContainer.style.display = 'flex';
});

// Function to handle search and scroll
function handleSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    // Determine which product to scroll to based on search input
    let productId;
    if (searchInput.includes('shirt')) {
        productId = 'product1';
    } else if (searchInput.includes('jeans')) {
        productId = 'product2';
    } else if (searchInput.includes('t-shirt')) {
        productId = 'product3';
    } else {
        alert('Product not found!');
        return;
    }

    // Scroll to the selected product
    const element = document.getElementById(productId);
    if (element) {
        // Add glowing effect for 3 seconds
        element.classList.add('glow');
        setTimeout(() => {
            element.classList.remove('glow');
        }, 3000);

        // Scroll to the element
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('Product not found!');
    }
}

// Function to close search bar
function closeSearch() {
    searchContainer.style.display = 'none';
}