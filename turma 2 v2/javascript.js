var canvas = document.getElementById("meucanvas");
var ctx = canvas.getContext("2d");

// jogador 
var x = 20;
var y = 20;

var parede = [
    { x: 0, y: 0, largura: canvas.width, altura: 10 },
    { x: 0, y: canvas.height - 10, largura: canvas.width, altura: 10 },
    { x: 0, y: 0, largura: 10, altura: canvas.height },
    { x: canvas.width - 10, y: 0, largura: 10, altura: canvas.height },
]

var varChegada = {
    x: canvas.width - 80 - 20,
    y: canvas.height - 80 - 20,
    lado: 80,
    cor: "#e2ee00"
}

var chegada = new Entidade(varChegada.x, varChegada.y,varChegada.lado, varChegada.lado, varChegada.cor)

var obstaculos = [
    ...parede,
    chegada,
    { x: 150, y: 0, largura: 50, altura: 300 },
    { x: 400, y: 90, largura: 50, altura: 300 },
]

function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of obstaculos) {
        ctx.fillStyle = "black";
        ctx.fillRect(p.x, p.y, p.largura, p.altura);
    }
    ctx.fillStyle = "#8b1919";
    ctx.fillRect(parede.x, parede.y, parede.lado, parede.lado);
    ctx.fillStyle = "#72f804";
    ctx.fillRect(x, y, 80, 80);
    chegada.desenhar();
}

document.addEventListener("keydown", function (event) {
    // console.log(event.key == "a");
    let vel = 5;
    if (event.key === "a") {
        if (!colisao((x - vel), y)) {
            x -= vel;
        }
    }
    if (event.key === "d") {
        if (!colisao((x + vel), y)) {
            x += vel;
        }
    }
    if (event.key === "w") {
        if (!colisao(x, (y - vel))) {
            y -= vel;
        }
    }
    if (event.key === "s") {
        if (!colisao(x, (y + vel))) {
            y += vel;
        }
    }
    desenhar();
    mudarFase();
});

function colisao(nx, ny) {
    for (let obj of obstaculos) {
        if (nx < obj.x + obj.largura && nx + 80 > obj.x &&
            ny < obj.y + obj.altura && ny + 80 > obj.y
        ) {
            return true
        }
    }
    return false;
}

function mudarFase() {
    if (x < chegada.x + chegada.largura && x + 80 > chegada.x &&
        y < chegada.y + chegada.altura && y + 80 > chegada.y
    ) {
        console.log("mudar fase");
        alert("mudar fase");
    }
}