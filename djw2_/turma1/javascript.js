var canvas = document.getElementById("meucanvas");
var ctx = canvas.getContext("2d");


var x = 50;
var y = 50;
var varJogador = {
    x: 10,
    y: 10,
    lado: 80,
    cor: "green"
}
var varCasa = {
    x: 50,
    y: 50,
    lado: 80,
    cor: "#8b1919"
}
var varChegada = {
    x: 320,
    y: 320,
    lado: 80,
    cor: "#eef60c"
}

var jogador = new Entidade(varJogador.x, varJogador.y, varJogador.lado, varJogador.cor);
var casa = new Entidade(varCasa.x, varCasa.y, varCasa.lado, varCasa.cor);
var chegada = new Entidade(varChegada.x, varChegada.y, varChegada.lado, varChegada.cor);
var casa2 = new Entidade(550, 50, 30, "#ee4806");


document.addEventListener("keydown", function (event) {
    let vel = 5;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (event.key === "w") {
        let ny = y - vel;
        if (!colisao(x, ny))
            jogador.mover(x,ny);
        
    }
    if (event.key === "s") {
        let ny = y + vel;
        y += 2;
    }
    if (event.key === "a") {
        let nx = x - vel;
        x -= 2;
    }
    if (event.key === "d") {
        let nx = x + vel;
        x += 2;
    }


    // jogador 
    jogador.desenhar();
    // inimigo, casa ou parede 
    casa.desenhar();
    casa2.desenhar();
    //chegada
    chegada.desenhar();
});

function colisao(nx, ny) {
    for (let obj of objetos) {
        if (nx < obj.x + obj.lado &&
            nx + varJogador.lado > obj.x &&
            ny < obj.y + obj.lado &&
            ny + varJogador.lado > obj.y
        ) {
            return true;
        }
    }
    return false;
}