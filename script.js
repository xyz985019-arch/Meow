const button = document.getElementById("rsvpBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "🎉 Thank you for your RSVP! We can't wait to celebrate with you.";
    button.disabled = true;
    button.textContent = "RSVP Submitted";
});
