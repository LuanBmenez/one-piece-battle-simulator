const player1 = {
  NOME: "Luffy",
  VELOCIDADE: 4,
  FORÇA: 3,
  HAKI: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Kuma",
  VELOCIDADE: 3,
  FORÇA: 4,
  HAKI: 4,
  PONTOS: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomFight() {
  let random= Math.random()
  let result 

  switch(true){
    case random < 0.33:
      result = "CORRIDA"
      break;
    case random < 0.66:
      result = "LUTA"
      break;
    default:
      result = "AURA";
  }
  return result;
}

async function playRaceFight(character1, character2){
for(let round = 1; round <=5; round++) {
  console.log(`🥊rodada ${round}`);

  // Style of fight
  let fight = await getRandomFight();
  console.log(` Luta sorteada: ${fight}`);

  //roll dice
  let diceResult1 = await rollDice();
  let diceResult2 = await rollDice();

  let totalTestSkill1 = 0;
  let totalTestSkill2 = 0;
if(fight === "CORRIDA"){
  totalTestSkill1 = diceResult1 +character1.VELOCIDADE;
  totalTestSkill2 = diceResult2 +character2.VELOCIDADE;

  console.log(`${player1.NOME} rolou um dado de ${fight}: ${diceResult1}`)
  console.log(`${player2.NOME} rolou um dado de ${fight}: ${diceResult2}`)
}
if(fight === "LUTA"){
  totalTestSkill1 = diceResult1 +character1.FORÇA;
  totalTestSkill2 = diceResult2 +character2.FORÇA;
}
if(fight === "AURA"){
  totalTestSkill1 = diceResult1 +character1.HAKI;
  totalTestSkill2 = diceResult2 +character2.HAKI;
}
}

}

(async function main() {
  console.log(`🥊🚨Luta entre ${player1.NOME} e ${player2.NOME} começando ...\n`);
  await playRaceFight(player1, player2);
})();
