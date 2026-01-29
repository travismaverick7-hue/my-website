// Product Data
const inventory = [
    { id: 1, name: "Smartphone Display LCD", price: 4500, category: "Spares" },
    { id: 2, name: "Oraimo Fast Charger", price: 1200, category: "Accessories" },
    { id: 3, name: "Infinix Note 30", price: 22000, category: "Phones" },
    { id: 4, name: "Privacy Screen Guard", price: 500, category: "Accessories" }
];

let cartCount = 0;

function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

const repairForm = document.getElementById('repairForm');

if (repairForm) {
    repairForm.addEventListener('submit', function() {
        const submitBtn = this.querySelector('.btn-submit');
        submitBtn.disabled = true;
        submitBtn.innerText = "Sending Request...";
        submitBtn.style.background = "#ccc";
        
        // Formspree will handle the redirect to a "Thank You" page automatically.
    });
}

function sendToWhatsApp() {
    // 1. Get the form values
    const model = document.getElementById('phoneModel').value;
    const service = document.getElementById('serviceType').value;
    const name = document.getElementById('customerName').value;

    // 2. Validate that they filled the fields
    if (model === "" || name === "") {
        alert("Please fill in all details before sending.");
        return;
    }

    // 3. Set your phone number (International format without the +)
    const myNumber = "254793757451"; 

    // 4. Create the message template
    const message = `Hello VES Connections!%0A%0A` +
                    `*Repair Request*%0A` +
                    `------------------------%0A` +
                    `*Name:* ${name}%0A` +
                    `*Device:* ${model}%0A` +
                    `*Issue:* ${service}%0A%0A` +
                    `Please let me know the cost and how long it will take.`;

    // 5. Open the WhatsApp link
    const whatsappURL = `https://wa.me/${myNumber}?text=${message}`;
    
    window.open(whatsappURL, '_blank').focus();
}

window.addEventListener('load', () => {
    const video = document.querySelector('.bg-video');
    if (video) {
        video.play().catch(error => {
            console.log("Autoplay was prevented by browser. User interaction might be needed.");
        });
    }
});

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
}

function viewCart() {
    alert(`Items in cart: ${cartCount}\nProceeding to checkout...`);
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Handle Form
document.getElementById('repairForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Request Sent! VES Connections will contact you on the hotline.");
});



// Initialize
window.onload = loadProducts;