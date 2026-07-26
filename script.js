const popup = document.getElementById("orderPopup");
const paymentPopup = document.getElementById("paymentPopup");

// Buy Now Buttons
document.querySelectorAll(".cart-btn").forEach(button => {
    button.addEventListener("click", function () {
        popup.style.display = "flex";
    });
});

// Close Order Popup
document.querySelector(".close").addEventListener("click", function () {
    popup.style.display = "none";
});

// Continue to Payment
document.getElementById("continueBtn").addEventListener("click", function () {
    popup.style.display = "none";
    paymentPopup.style.display = "flex";
});

// Close Payment Popup
document.getElementById("closePayment").addEventListener("click", function () {
    paymentPopup.style.display = "none";
});

// Paid Button
document.getElementById("paidBtn").addEventListener("click", function () {
    window.open(
        "https://wa.me/917300617677?text=Hello%20I%20have%20completed%20the%20payment.",
        "_blank"
    );
});

// Search
document.getElementById("searchInput").addEventListener("keyup", function () {
    let value = this.value.toLowerCase();

    document.querySelectorAll(".product").forEach(product => {
        let name = product.querySelector("h3").textContent.toLowerCase();
        product.style.display = name.includes(value) ? "block" : "none";
    });
});const chatBtn = document.getElementById("chatBtn");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");

chatBtn.addEventListener("click", () => {
    chatBox.style.display = "block";
});

closeChat.addEventListener("click", () => {
    chatBox.style.display = "none";
});// Send Message
const chatBody = document.querySelector(".chat-body");

const sendMessage = document.getElementById("sendMessage");
const chatMessage = document.getElementById("chatMessage");
const chatMessages = document.getElementById("chatMessages");

sendMessage.addEventListener("click", () => {
    const text = chatMessage.value.trim();

    if (text === "") return;

    chatMessages.innerHTML += `<div class="user-msg">${text}</div>`;

    chatMessage.value = "";

    setTimeout(() => {
        chatMessages.innerHTML += `<div class="bot-msg">✅ Thank you! Our team will contact you soon.</div>`;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
});
alert("Script Loaded");
// Chat Open / Close
const chatBtn = document.getElementById("chatBtn");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");
const sendMessage = document.getElementById("sendMessage");
const chatMessage = document.getElementById("chatMessage");
const chatMessages = document.getElementById("chatMessages");

chatBtn.onclick = () => {
    chatBox.style.display = "block";
};

closeChat.onclick = () => {
    chatBox.style.display = "none";
};

sendMessage.onclick = () => {
    let msg = chatMessage.value.trim();

    if(msg === "") return;

    chatMessages.innerHTML += `<div class="user-msg">${msg}</div>`;

    let reply = "😊 Thanks for contacting Gift Store.";

    let text = msg.toLowerCase();

    if(text.includes("price")){
        reply = "💰 Price har product ke niche likhi hui hai.";
    }
    else if(text.includes("delivery")){
        reply = "🚚 Delivery 3-7 din me ho jayegi.";
    }
    else if(text.includes("payment")){
        reply = "💳 QR Code ya UPI se payment kar sakte hain.";
    }
    else if(text.includes("hello") || text.includes("hi")){
        reply = "👋 Hello! Gift Store me aapka swagat hai.";
    }
    else if(text.includes("order")){
        reply = "📦 Buy Now par click karke order place karein.";
    }

    setTimeout(() => {
        chatMessages.innerHTML += `<div class="bot-msg">${reply}</div>`;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 700);

    chatMessage.value = "";
};