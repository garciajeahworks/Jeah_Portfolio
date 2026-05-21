// SIMPLE SCROLL ANIMATION

const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){
            card.style.transform = "translateY(0px)";
            card.style.opacity = "1";
        }

    });

});

cards.forEach(card => {
    card.style.transform = "translateY(80px)";
    card.style.opacity = "0";
    card.style.transition = "0.6s ease";
});