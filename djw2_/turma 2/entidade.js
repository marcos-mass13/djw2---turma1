class Entidade {
    constructor(x, y, altura, largura, cor) {
        this.x = x;
        this.y = y;
        this.altura = altura;
        this.largura = largura;
        this.cor = cor;
    }

    desenhar() {
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.altura, this.largura);
    }
}