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

// Search
document.getElementById("searchInput").addEventListener("keyup", function () {
    let value = this.value.toLowerCase();

    document.querySelectorAll(".product").forEach(product => {
        let name = product.querySelector("h3").textContent.toLowerCase();
        product.style.display = name.includes(value) ? "block" : "none";
    });
});

// Chat
const chatBtn = document.getElementById("chatBtn");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");

chatBtn.onclick = () => {
    chatBox.style.display = "block";
};

closeChat.onclick = () => {
    chatBox.style.display = "none";
};

const sendMessage = document.getElementById("sendMessage");
const chatMessage = document.getElementById("chatMessage");
const chatMessages = document.getElementById("chatMessages");

sendMessage.onclick = () => {

    let msg = chatMessage.value.trim();

    if(msg === "") return;

    chatMessages.innerHTML += `<div class="user-msg">${msg}</div>`;

    let reply = "😊 Thank you! Our team will contact you soon.";

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
    else if(text.includes("hi") || text.includes("hello")){
        reply = "👋 Hello! Welcome to Gift Store.";
    }
    else if(text.includes("order")){
        reply = "📦 Buy Now par click karke order place karein.";
    }

    setTimeout(() => {
        chatMessages.innerHTML += `<div class="bot-msg">${reply}</div>`;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    },700);

    chatMessage.value = "";
};