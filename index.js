let nome = "Wesley"
let QuantidadeDeXP = 1267

switch(true){

      case (QuantidadeDeXP <= 1000):
    console.log("O Herói de nome " + nome + " está no nível de Ferro!")
    break;

      case (QuantidadeDeXP >= 1001 && QuantidadeDeXP <= 2000 ):
    console.log("O Herói de nome " + nome + " está no nível de Bronze!")
    break;    

      case (QuantidadeDeXP >= 2001 && QuantidadeDeXP <= 5000 ):
    console.log("O Herói de nome " + nome + " está no nível de Prata!")
    break;    

      case (QuantidadeDeXP >= 5001 && QuantidadeDeXP <= 7000 ):
    console.log("O Herói de nome " + nome + " está no nível de Ouro!")
    break;    

      case (QuantidadeDeXP >= 7001 && QuantidadeDeXP <= 8000 ):
    console.log("O Herói de nome " + nome + " está no nível de Platina!")
    break;    

      case (QuantidadeDeXP >= 8001 && QuantidadeDeXP <= 9000 ):
    console.log("O Herói de nome " + nome + " está no nível de Ascendente!")
    break;
    
      case (QuantidadeDeXP >= 9001 && QuantidadeDeXP <= 10000 ):
    console.log("O Herói de nome " + nome + " está no nível de Imortal!")
    break;

      case (QuantidadeDeXP >= 10001):
    console.log("O Herói de nome " + nome + " está no nível Radiante!")
    break;

    default:
        console.log("ERRO: O número informado " + QuantidadeDeXP + " não se encaixa em nenhum dos tiers, tente novamente mais tarde")

}

















