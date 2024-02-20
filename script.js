const container = document.querySelector(".container");
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

// button.addEventListener('click', function() {
//     const humanText = document.querySelector(".human");
//     const catText = document.querySelector(".meow");
//     if (button.innerHTML = "Translate Into Cat") {
//         humanText.style.display = "none";
//         catText.style.display = "block";
//         button.innerHTML = "Translate Into Human";
//     } else {
//         humanText.style.display = "block";
//         catText.style.display = "none";
//         button.innerHTML = "Translate Into Cat";
//     }
// })

// function changeLanguages() {
//     if (button.innerHTML = "Translate Into Cat") {
//         button.addEventListener('click', function () {
//             const humanText = document.querySelector(".human"); 
//             humanText.style.display = "none";
//             const catText = document.querySelector(".meow");
//             catText.style.display = "block";
//             button.innerHTML = "Translate to Human";
//         });
//     }
//     else if (button.innerHTML = "Translate to Human") {
//         button.addEventListener('click', function () {
//             const humanText = document.querySelector(".human"); 
//             humanText.style.display = "block";
//             const catText = document.querySelector(".meow");
//             catText.style.display = "none";
//             button.innerHTML = "Translate to Cat";
//     });
    
// }};
