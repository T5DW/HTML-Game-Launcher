const games = [
    {
        name: "Top Down Tennis",
        description: "Play tennis against an AI in a fast top-down match.",
        link: "games/tennis.html"
    },
    {
        name: "Flappy Circle",
        description: "A Flappy Bird style game where you control a circle.",
        link: "games/flappycircle.html"
    }
];

function launchGame(link) {
    try {
        window.open(link, "_blank");
    } catch (e) {
        alert("Game could not be opened. Check file path: " + link);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("gamesGrid");

    if (!grid) return;

    games.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";

        card.innerHTML = `
            <h2>${game.name}</h2>
            <p>${game.description}</p>
            <button onclick="launchGame('${game.link}')">Play</button>
        `;

        grid.appendChild(card);
    });
});