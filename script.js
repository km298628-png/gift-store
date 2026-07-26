// ===============================
// Gift Store Script
// ===============================

// Order Popup
const popup = document.getElementById("orderPopup");
const paymentPopup = document.getElementById("paymentPopup");

// Buy Now
document.querySelectorAll(".cart-btn").forEach(button => {
    button.addEventListener("click", () => {
        popup.style.display = "flex";
    });
});

// Close Order Popup
document.querySelector(".close").addEventListener("click", () => {
    popup.style.display = "none";
});

// Continue to Payment
document.getElementById("continueBtn").addEventListener("click", () => {
    popup.style.display = "none";
    paymentPopup.style.display = "flex";
});

// Close Payment Popup
document.getElementById("closePayment").addEventListener("click", () => {
    paymentPopup.style.display = "none";
});

// Paid Button
document.getElementById("paidBtn").addEventListener("click", () => {
    window.open(
        "https://wa.me/917300617677?text=Hello%20I%20have%20completed%20the%20payment.",
        "_blank"
    );
});

// Search Products
document.getElementById("searchInput").addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    document.querySelectorAll(".product").forEach(product => {

        const name = product.querySelector("h3").textContent.toLowerCase();

        product.style.display = name.includes(value) ? "block" : "none";

    });

});// ===============================
// Chat System
// ===============================

const chatBtn = document.getElementById("chatBtn");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");

const sendMessage = document.getElementById("sendMessage");
const chatMessage = document.getElementById("chatMessage");
const chatMessages = document.getElementById("chatMessages");

// Open Chat
chatBtn.addEventListener("click", () => {
    chatBox.style.display = "block";
});

// Close Chat
closeChat.addEventListener("click", () => {
    chatBox.style.display = "none";
});

// Send Message
sendMessage.addEventListener("click", () => {

    const msg = chatMessage.value.trim();

    if (msg === "") return;

    // Show User Message
    chatMessages.innerHTML += `
        <div class="user-msg">${msg}</div>
    `;

    chatMessage.value = "";// Send Message to WhatsApp
    const phone = "917300617677";

    const whatsappText = encodeURIComponent(
`🛍️ New Customer Message

Message:
${msg}

Sent from Gift Store Website`
    );

    window.open(
        `https://wa.me/${phone}?text=${whatsappText}`,
        "_blank"
    );

    // Auto Reply
    setTimeout(() => {

        chatMessages.innerHTML += `
            <div class="bot-msg">
                ✅ Your message has been sent to our WhatsApp.
            </div>
        `;

        chatMessages.scrollTop = chatMessages.scrollHeight;

    }, 500);

});// Send on Enter Key
chatMessage.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {
        e.preventDefault();
        sendMessage.click();
    }

});

// Auto Scroll
const observer = new MutationObserver(() => {
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

observer.observe(chatMessages, {
    childList: true
});

// Chat Closed by Default
chatBox.style.display = "none";