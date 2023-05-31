function getEventCard(id) {
    if (id === "cerulean" || id === "vermilion") {
        alert("Desafio?");
    } else if (id === "") {
        alert("Pegou carta");
    } else {
        alert("pegou duas cartas");
        if (id === "cinnabar") {
            alert("tem 20 pontos?");
        }
    }
}

function turnPoke(id) {
    console.log(id);
}

export { getEventCard, turnPoke }