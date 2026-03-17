var canvas = document.getElementById("meucanvas");
var ctx = canvas.getContext("2d");

// jogador 
var x = 170;
var y = 170;

var parede = [
    { x: 0, y: 0, largura: canvas.width, altura: 10 },
    { x: 0, y: canvas.height - 10, largura: canvas.width, altura: 10 },
    { x: 0, y: 0, largura: 10, altura: canvas.height },
    { x: canvas.width-10, y: 0, largura: 10, altura: canvas.height },
]

var varChegada = {
    x: canvas.width - 80 - 20,
    y: canvas.height - 80 - 20,
    lado: 80,
    cor: "#e2ee00"
}

var chegada = new Entidade(varChegada.x, varChegada.y, varChegada.lado, varChegada.lado, varChegada.cor)

var obstaculos = {

}

document.addEventListener("keydown", function (event) {
    // console.log(event.key == "a");
    let vel = 5;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (event.key === "a") {
        x -= 1;
        // console.log(x);
    }
    if (event.key === "w") {
        y -= 1;
        // console.log(x);
    }
    if (event.key === "d") {
        x += 1;
        // console.log(x);
    }
    if (event.key === "s") {
        y += 1;
        console.log(x);
    }




    ctx.fillStyle = "#8b1919";
    ctx.fillRect(parede.x, parede.y, parede.lado, parede.lado);

    ctx.fillStyle = "#72f804";
    ctx.fillRect(x, y, 80, 80);

    chegada.desenhar();
});

function colisao(nx, ny) {
    for (let obj of obstaculos) {
        if (nx < obj.x + obj.l && nx + 80 > obj.x &&
            ny < obj.y + obj.l && ny + 80 > obj.y
        ) {
            return true
        }
    }
    return false;
}

function mudarFase() {
    if (x < chegada.x + chegada.l &&
        x + 80 > chegada.x &&
        y < chegada.y + chegada.l &&
        y + 80 > chegada.y
    ) {
        console.log("mudar fase");
    }
}