const envelope = document.getElementById("envelope");
const message = document.getElementById("message");
const hint = document.getElementById("hint");

envelope.addEventListener("click", function () {
    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {
        hint.style.display = "none";
        setTimeout(() => {
            message.style.display = "block";
        }, 800);
    }
});

function showMemories() {
    document.getElementById("memories").style.display = "block";

    document.getElementById("memories").scrollIntoView({
        behavior: "smooth"
    });
}
function unlockSite() {
    const password = document.getElementById("passwordInput").value;
    const error = document.getElementById("errorMessage");

    if (password === "1610") {
        document.getElementById("lockScreen").style.display = "none";
        document.querySelector(".container").style.display = "block";
        document.querySelector(".hearts").style.display = "block";
    } else {
        error.textContent = "كلمة السر غلط يا رضوى ❤️";
    }
}