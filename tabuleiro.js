module.exports = class tabuleiro {
  constructor(){
    this.casa = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }

  getValorCasa(linha,coluna){
    return this.casa[linha][coluna]
  }

  setValorCasa(linha,coluna,jogador){
    this.casa[linha][coluna]=jogador;
  }

  casaPreenchida(){
    for (let linha = 0; linha < 3; linha++) {
      for (let coluna = 0; coluna < 3; coluna++) {
        this.casa[linha][coluna]==null?false:true
      }
    }
  }

  
}