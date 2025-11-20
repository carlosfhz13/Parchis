// Example board state (8x8 grid for now)
let boardState = Array.from({ length: 68 }, (_, i) => ({
    piece: null
}));

// Example: put some pieces on the board
boardState[0].piece = { color: "red" };
boardState[5].piece = { color: "blue" };
boardState[10].piece = { color: "green" };

function renderPieces() {
    const board = document.getElementById("board");
    board.innerHTML = "";

    // For now, just render pieces absolutely positioned.
    // Example: one test piece in the center.
    const piece = document.createElement("div");
    piece.classList.add("piece");
    piece.style.background = "red";

    // position in percentage (center)
    piece.style.position = "absolute";
    piece.style.left = "50%";
    piece.style.top = "50%";
    piece.style.transform = "translate(-50%, -50%)";

    board.appendChild(piece);
}

// After page loads
renderPieces();


// ---- Future: send board to backend ----
// Example function template for when AI move is ready
async function getAiMove() {
    const res = await fetch("/ai-move", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            board: boardState,
            player: "AI"
        })
    });

    const data = await res.json();
    console.log(data.move);

    // Example: apply AI move to boardState…
    // renderBoard();
}
