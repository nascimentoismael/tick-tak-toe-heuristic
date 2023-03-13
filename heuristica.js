module.exports = class heuristica {
  avaliaJogada(tabuleiro, jogador){
    var peso = 0;

    //analisa linha a linha
    for (let i = 0; i < 3; i++) {
      peso += avaliaLinha(tabuleiro[i][0], tabuleiro[i][1], tabuleiro[i][2]);
    }

    //analisa as colunas
    for (let j = 0; j < 3; j++) {
      peso += avaliaColuna(tabuleiro[0][j], tabuleiro[1][j], tabuleiro[2][j]);
    }

    //diagonais
    peso += avaliaLinha(tabuleiro[0][0], tabuleiro[1][1], tabuleiro[2][2]);
    peso += avaliaLinha(tabuleiro[0][2], tabuleiro[1][1], tabuleiro[2][0]);

    return peso;
  }

  avaliaLinha(casa1, casa2, casa3, jogador){
    let peso = 0

    casa1===jogador?peso=1:peso=0;

    if (casa2===jogador) {
      if (peso === 1)
        peso = 10
      else if (peso === -1)
        peso = 0
      else
        peso = 1
    }else if(casa2!=jogador){
      if (peso <= -1) {
        peso = -10
      } else if (peso === 1){
        peso = 0
      }else
        peso = -1
    }

    if (casa3===jogador) {
      if (peso > 0)
        peso *= 10
      else if (peso < 0)
        peso = 0
      else
        peso = 1
    }else if(casa3!=jogador){
      if (peso <= 0) {
        peso *= 10
      } else if (peso > 1){
        peso = 0
      }else
        peso = -1
    }

    return peso;
  }
}