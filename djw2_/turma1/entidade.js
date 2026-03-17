class Entidade {
    constructor(x, y, lado, cor) {
        this.x = x;
        this.y = y;
        this.lado = lado;
        this.cor = cor;
    }

    desenhar() {
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.lado, this.lado);
    }

    mover(_x, _y) {
        this.x += _x;
        this.y += _y;
        console.log("moveu");        
    }
}