function frutas() {
    let fruta = "fruta";
    fruta = prompt("Nome da fruta")
    switch (fruta) {
        case "Maçã":
            alert("Não vendemos essa fruta aqui!");
            break;
        case "Kiwi":
            alert("Estamos com escassez de Kiwis!");
            break;
        case "Melancia":
            alert("Aqui está, são R$3,00 KG!");
            break;
        default:
            alert("Erro no console");
    }
}