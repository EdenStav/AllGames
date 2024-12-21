const gamesData = [
    { id: 1, title: "Best Fiends", img: "best-fiends.png", content: "משחק פאזל ממכר בו תצטרכו להתאים צבעים ולגבור על אויבים, תוך שאתם משדרגים את הדמויות המקסימות שלכם.", link: "https://play.google.com/store/apps/details?id=com.Seriously.BestFiends&hl=en" },
    { id: 2, title: "Bingo Blitz", img: "bingoBlitz.png", content: "משחק בינגו ייחודי המציע חוויית בינגו מסביב לעולם, כולל תחרויות מרגשות, פרסים מיוחדים ודמויות חמודות שמוסיפות להנאה.", link: "https://play.google.com/store/apps/details?id=air.com.buffalo_studios.newflashbingo" },
    { id: 3, title: "Caesars Slots", img: "ceasers.png", content: "חווית קזינו וירטואלי יוקרתית עם מכונות מזל במגוון רחב של סגנונות ונושאים מרתקים.", link: "https://play.google.com/store/apps/details?id=com.playtika.caesarscasino" },
    { id: 4, title: "Dice Dreams", img: "DiceDreams.png", content: "הרפתקה קסומה על לוח משחק עם קוביות. גלגלו את הקוביות, בנו ממלכה ותקפו יריבים בדרך ליצירת ממלכה אפית.", link: "https://play.google.com/store/apps/details?id=com.superplaystudios.dicedreams" },
    { id: 5, title: "Domino Dreams", img: "DominoDreams.png", content: "צאו להרפתקה מלכותית במשחק דומינו מרתק, מלא אתגרים ודמויות צבעוניות.", link: "https://play.google.com/store/apps/details?id=com.screenshake.dominodreams" },
    { id: 6, title: "House Of Fun", img: "house-of-fun.png", content: "היכנסו לעולם מכונות המזל עם חוויית משחק של מעל 200 מכונות שיקחו אתכם למסע קזינו בלתי נשכח.", link: "https://play.google.com/store/apps/details?id=com.pacificinteractive.HouseOfFun" },
    { id: 7, title: "June's Journey", img: "junes.png", content: "משחק חפצים נסתרים מלא מסתורין ורומנטיקה. עזרו לג'ון לחשוף את האמת מאחורי סיפור מרתק דרך רמזים וחקירות.", link: "https://wooga-junes-journey.onelink.me/M4rK/wmuwlpxi" },
    { id: 8, title: "Slotomania", img: "slotomania.png", content: "משחק מכונות מזל חברתי שמביא את עולם הקזינו אליך לנייד, עם מאות מכונות ייחודיות והרבה פרסים מרתקים.", link: "https://play.google.com/store/apps/details?id=air.com.playtika.slotomania" },
    { id: 9, title: "Solitaire Grand Harvest", img: "solitaire.png", content: "משחק סוליטר חוויתי שמוסיף נגיעות של טבע וחווה. שלבו קלפים וצברו פרסים תוך שאתם משדרגים את החווה שלכם.", link: "https://play.google.com/store/apps/details?id=net.supertreat.solitaire" },
    { id: 10, title: "World Series of Poker", img: "wsop.png", content: "משחק פוקר חברתי שמביא את חוויית הפוקר האמיתית לנייד. שחקו נגד שחקנים מכל העולם וצברו כישורים וניצחונות.", link: "https://play.google.com/store/apps/details?id=com.playtika.wsop.gp" }
];

document.addEventListener("DOMContentLoaded", function () {
    const itemsContainer = document.getElementById("itemsContainer");
    const searchInput = document.getElementById("searchInput");
    const suggestionsContainer = document.getElementById("suggestions");

    // פונקציה להוספת אפקט hover
    function addHoverEffect() {
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            card.addEventListener("mouseenter", function () {
                card.style.transform = "scale(1.05)";
                card.style.transition = "transform 0.2s ease-in-out";
            });
            card.addEventListener("mouseleave", function () {
                card.style.transform = "scale(1)";
            });
        });
    }

    // פונקציה ליצירת כרטיסיות המשחקים
    function renderGames(filteredGames) {
        itemsContainer.innerHTML = '';
        filteredGames.forEach(game => {
            const card = document.createElement("div");
            card.className = "col-sm-12 col-md-3 col-lg-3";
            card.innerHTML = `
                <div class="card">
                    <img src="img/${game.img}" class="card-img-top" alt="${game.title}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-center">${game.title}</h5>
                        <p class="card-text">${game.content}</p>
                        <button class="btn btn-primary w-100 download-btn mt-auto" data-link="${game.link}">להורדה</button>
                    </div>
                </div>
            `;
            itemsContainer.appendChild(card);
        });
        addHoverEffect(); // הוספת אפקט hover 
        addDownloadListeners(); // הוספת קישורים לכפתורי ההורדה
    }

    // פונקציה להוספת קישורים לכפתורי ההורדה
    function addDownloadListeners() {
        const downloadButtons = document.querySelectorAll(".download-btn");
        downloadButtons.forEach(button => {
            button.addEventListener("click", function () {
                const link = button.getAttribute("data-link");
                window.open(link, "_blank"); // פתיחת הקישור בחלונית חדשה
            });
        });
    }

    //  חיפוש עם הצגת השלמות
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();

        // חיפוש משחקים תואמים תוך כדי הקלדה
        const filteredGames = gamesData.filter(game =>
            game.title.toLowerCase().includes(query)
        );
        renderGames(filteredGames);

        //  הצגת השלמות אוטומטיות בתפריט אקורדיון יורד מטה
        if (query) {
            const suggestions = gamesData
                .filter(game => game.title.toLowerCase().includes(query))
                .map(game => game.title);

            suggestionsContainer.innerHTML = suggestions
                .map(title => `<button class="list-group-item list-group-item-action">${title}</button>`)
                .join('');

            // מאזין ללחיצה על השלמה
            const suggestionButtons = document.querySelectorAll("#suggestions button");
            suggestionButtons.forEach(button => {
                button.addEventListener("click", function () {
                    searchInput.value = button.textContent;
                    suggestionsContainer.innerHTML = ''; // ניקוי ההשלמות
                    const filteredGames = gamesData.filter(game =>
                        game.title.toLowerCase().includes(searchInput.value.toLowerCase())
                    );
                    renderGames(filteredGames);
                });
            });
        } else {
            suggestionsContainer.innerHTML = ''; // הסתרת ההשלמות במקרה של חיפוש ריק
        }
    });

    // אתחול של כל המשחקים
    renderGames(gamesData);
});
