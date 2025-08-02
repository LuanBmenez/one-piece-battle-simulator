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
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "CORRIDA";
      break;
    case random < 0.66:
      result = "LUTA";
      break;
    default:
      result = "AURA";
  }
  return result;
}

async function LogRollResult(characterName, fight, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${fight}: ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceFight(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🥊 rodada ${round}`);

    // Style of fight
    let fight = await getRandomFight();
    console.log(` Estilo sorteada: ${fight}`);

    //roll dice
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;
    if (fight === "CORRIDA") {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

      await LogRollResult(
        character1.NOME,
        "VELOCIDADE",
        diceResult1,
        character1.VELOCIDADE
      );
      await LogRollResult(
        character2.NOME,
        "VELOCIDADE",
        diceResult2,
        character2.VELOCIDADE
      );
    }
    if (fight === "LUTA") {
      totalTestSkill1 = diceResult1 + character1.FORÇA;
      totalTestSkill2 = diceResult2 + character2.FORÇA;

      await LogRollResult(
        character1.NOME,
        "FORÇA",
        diceResult1,
        character1.FORÇA
      );

      await LogRollResult(
        character2.NOME,
        "FORÇA",
        diceResult2,
        character2.FORÇA
      );
    }
    if (fight === "AURA") {
      let auraResult1 = diceResult1 + character1.HAKI;
      let auraResult2 = diceResult2 + character2.HAKI;

      console.log(`${character1.NOME} confrontou com ${character2.NOME}!🥊`);

      await LogRollResult(
        character1.NOME,
        "HAKI",
        diceResult1,
        character1.HAKI
      );
      await LogRollResult(
        character2.NOME,
        "HAKI",
        diceResult2,
        character2.HAKI
      );

      character2.PONTOS -=
        auraResult1 > auraResult2 && character2.PONTOS > 0 ? 1 : 0;

      character1.PONTOS -=
        auraResult2 > auraResult1 && character1.PONTOS > 0 ? 1 : 0;

      console.log(
        auraResult2 === auraResult1
          ? "confronto empatado! nenhum ponto foi perdido!"
          : ""
      );
    }

    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.NOME} marcou um ponto`);
      character1.PONTOS++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.NOME} marcou um ponto`);
      character2.PONTOS++;
    }
    console.log("_____________________________________");
  }
}

(async function main() {
  console.log(
    `🥊🚨Luta entre ${player1.NOME} e ${player2.NOME} começando ...\n`
  );
  await playRaceFight(player1, player2);
})();
