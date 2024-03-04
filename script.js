const catButton = document.getElementById("translate-cat");
const humanButton = document.getElementById("translate-human");

catButton.addEventListener('click', function() {
    const humanText = document.querySelector(".human");
    const catText = document.querySelector(".meow");
    humanText.style.display = "none";
    catText.style.display = "block";
    catButton.style.display = "none";
    humanButton.style.display = "block";
});

humanButton.addEventListener('click', function() {
    const humanText = document.querySelector(".human");
    const catText = document.querySelector(".meow");
    humanText.style.display = "block";
    catText.style.display = "none";
    catButton.style.display = "block";
    humanButton.style.display = "none";
});