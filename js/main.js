document.addEventListener("DOMContentLoaded", () => {

    const darkModeBtn = document.getElementById("darkModeBtn");

    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }


  
    const cookieBanner = document.getElementById("cookieBanner");
    const acceptCookies = document.getElementById("acceptCookies");

    if (cookieBanner && acceptCookies) {
        acceptCookies.addEventListener("click", () => {
            cookieBanner.style.display = "none";
        });
    }


 
    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".city-card");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const value = e.target.value.toLowerCase();

            cards.forEach(card => {
                const text = card.innerText.toLowerCase();

                if (text.includes(value)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

});