var meuCanvas = document.getElementById("canvas");
var ctx = meuCanvas.getContext("2d");

var x = 20;
var y = 20;
var tamanho = 50;
var posx = (meuCanvas.width - tamanho - 20);
var posy = (meuCanvas.height - tamanho - 20);

var parede = [
    // parede superior
    { x: 0, y: 0, largura: meuCanvas.width, altura: 10 },

    // parede inferior
    { x: 0, y: meuCanvas.height - 10, largura: meuCanvas.width, altura: 10 },

    // parede esquerda
    { x: 0, y: 0, largura: 10, altura: meuCanvas.height },

    // parede direita
    { x: meuCanvas.width - 10, y: 0, largura: 10, altura: meuCanvas.height }
];

var obstaculos = [
    ...parede,
    { x: 150, y: 0, largura: 50, altura: 300 },
    { x: 400, y: 90, largura: 50, altura: 300 },
];

function desenha() {
    ctx.clearRect(0, 0, meuCanvas.width, meuCanvas.height);
    //jogador
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, tamanho, tamanho);

    //chegada
    ctx.fillStyle = "yellow";
    ctx.fillRect(posx, posy, tamanho, tamanho);

    for (let p of obstaculos) {

        ctx.fillStyle = "black";
        ctx.fillRect(p.x, p.y, p.largura, p.altura);

    }
}

window.addEventListener("keydown", function (event) {

    let vel = 5;

    if (event.key === "ArrowRight") {
        let nx = x + vel;
        if (!colisao(nx, y)) {
            x = nx;
        }
    }
    if (event.key === "ArrowLeft") {
        let nx = x - vel;
        if (!colisao(nx, y)) {
            x = nx;
        }
    }
    if (event.key === "ArrowUp") {
        let ny = y - vel;
        if (!colisao(x, ny)) {
            y = ny;
        }
    }
    if (event.key === "ArrowDown") {
        let ny = y + vel;
        if (!colisao(x, ny)) {
            y = ny;
        }
    }

    desenha();
    mudarFase();
    // colisao();
})

window.onload = function () {
    desenha();
}

function mudarFase() {
    if (x < posx + tamanho &&
        x + tamanho > posx &&
        y < posy + tamanho &&
        y + tamanho > posy) {
        alert("completou a fase");
        x = 0;
        y = 0;
        desenha();
        // window.location.href = "fase1.html";
    }
}

function colisao(nx, ny) {

    for (let obs of obstaculos) {
        if (nx < obs.x + obs.largura &&
            nx + tamanho > obs.x &&
            ny < obs.y + obs.altura &&
            ny + tamanho > obs.y) {

            return true;
        }
    }

    return false;
}