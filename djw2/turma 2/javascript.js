var canvas = document.getElementById("meucanvas");
var ctx = canvas.getContext("2d");

// jogador 
var x = 170;
var y = 170;

var parede = {
    x: 80,
    y: 80,
    lado: 80
}

var varChegada = {
    x: canvas.width - 80 - 20,
    y: canvas.height - 80 - 20,
    lado: 80,
    cor: "#e2ee00"
}

var chegada = new Entidade(varChegada.x, varChegada.y, varChegada.lado, varChegada.lado, varChegada.cor)


document.addEventListener("keydown", function (event) {
    // console.log(event.key == "a");
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

    if (x < parede.x + parede.l && x + 80 > parede.x &&
        y < parede.y + parede.l && y + 80 > parede.y
    ) {
        console.log("colidiu");
        x = parede.x + parede.lado;
        y = parede.y + parede.lado;
    }


    ctx.fillStyle = "#8b1919";
    ctx.fillRect(parede.x, parede.y, parede.lado, parede.lado);

    ctx.fillStyle = "#72f804";
    ctx.fillRect(x, y, 80, 80);

    chegada.desenhar();
});