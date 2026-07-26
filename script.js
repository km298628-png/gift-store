// ===============================
// Gift Store Script - Part 1
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

        if (name.includes(value)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

});// ===============================
// Chat Support
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

    let msg = chatMessage.value.trim();

    if (msg === "") return;

    // User Message
    chatMessages.innerHTML += `
        <div class="user-msg">${msg}</div>
    `;

    let text = msg.toLowerCase();
    let reply = "😊 Thanks for contacting Gift Store.";

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hyy") ||
        text.includes("hey")
    ) {
        reply = "👋 Hello! Welcome to Gift Store. How can I help you?";
    }

    else if (
        text.includes("price") ||
        text.includes("rate")
    ) {
        reply = "💰 Har product ka price uske niche diya gaya hai.";
    }

    else if (
        text.includes("delivery") ||
        text.includes("parcel") ||
        text.includes("kab") ||
        text.includes("ayega")
    ) {
        reply = "🚚 Delivery 3-7 working days me ho jayegi.";
    }

    else if (
        text.includes("payment") ||
        text.includes("upi") ||
        text.includes("qr")
    ) {
        reply = "💳 Aap QR Code ya UPI se payment kar sakte hain.";
    }

    else if (
        text.includes("order")
    ) {
        reply = "📦 Buy Now button par click karke order place karein.";
    }

    else if (
        text.includes("contact") ||
        text.includes("phone") ||
        text.includes("number")
    ) {
        reply = "📞 Support: +91 7300617677";
    }

    // Bot Reply
    setTimeout(() => {

        chatMessages.innerHTML += `
            <div class="bot-msg">${reply}</div>
        `;

        chatMessages.scrollTop = chatMessages.scrollHeight;

    }, 700);

    chatMessage.value = "";

});

// Press Enter to Send
chatMessage.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        e.preventDefault();
        sendMessage.click();
    }

});