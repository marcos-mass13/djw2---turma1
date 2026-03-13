var canvas = document.getElementById("meucanvas");
var ctx = canvas.getContext("2d");




var x = 50;
var y = 50;


var casa = {
    x: 50,
    y: 50,
    l: 80,
    a: 80
}


document.addEventListener("keydown", function (event) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (event.key === "w") {
        y -= 2;
    }
    if (event.key === "s") {
        y += 2;
    }
    if (event.key === "a") {
        x -= 2;
    }
    if (event.key === "d") {
        x += 2;
    }
    console.log(casa.x + casa.l);
    

    if (
        x < 130 &&
        x + 80 > casa.x &&
        y < 130 &&
        y + 80 > casa.y
    ) {
        console.log("Teste");
    }

    // jogador 
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, 80, 80);

    // inimigo, casa ou parede 
    ctx.fillStyle = "#8b1919";
    ctx.fillRect(casa.x, casa.y, casa.a, casa.l);


});