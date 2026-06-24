const games = [
    {
        name: "Top Down Tennis",
        description: "Play tennis against an AI in a fast top-down match.",
        link: "games/game1/index.html"
    },
    

const grid = document.getElementById("gamesGrid");

// Render game cards
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

// Launch game
function launchGame(link) {
    window.open(link, "_blank");
}
