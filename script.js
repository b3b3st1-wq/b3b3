// Sample Products
const products = [
    { id: 1, name: "Product 1", price: 29.99, image: "https://via.placeholder.com/300" },
    { id: 2, name: "Product 2", price: 49.99, image: "https://via.placeholder.com/300" },
    { id: 3, name: "Product 3", price: 19.99, image: "https://via.placeholder.com/300" },
    { id: 4, name: "Product 4", price: 39.99, image: "https://via.placeholder.com/300" },
];

let cart = [];

// Render Products
function renderProducts() {
    const container = document.getElementById('products');
    container.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Initialize
renderProducts();
