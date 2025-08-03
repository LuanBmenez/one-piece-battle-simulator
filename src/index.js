import chalk from "chalk";
import readline from "readline";

const Players = {
  LUFFY: {
    NOME: "Luffy",
    VELOCIDADE: 4,
    FORÇA: 3,
    HAKI: 3,
    PONTOS: 0,
  },
  KUMA: {
    NOME: "Kuma",
    VELOCIDADE: 3,
    FORÇA: 4,
    HAKI: 2,
    PONTOS: 0,
  },
  AKAINU: {
    NOME: "Akainu",
    VELOCIDADE: 2,
    FORÇA: 4,
    HAKI: 3,
    PONTOS: 0,
  },
  SOGEKING: {
    NOME: "Sogeking",
    VELOCIDADE: 5,
    FORÇA: 2,
    HAKI: 5,
    PONTOS: 0,
  },
  KAIDO: {
    NOME: "Kaido",
    VELOCIDADE: 3,
    FORÇA: 4,
    HAKI: 4,
    PONTOS: 0,
  },
  SHANKS: {
    NOME: "Shanks",
    VELOCIDADE: 2,
    FORÇA: 2,
    HAKI: 5,
    PONTOS: 0,
  },
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomFight() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "DESVIA";
      break;
    case random < 0.66:
      result = "LUTA";
      break;
    default:
      result = "AURA";
  }
  return result;
}

function mostrarPlayers() {
  console.log(chalk.cyan.bold("\n🏴‍☠️ PERSONAGENS DISPONÍVEIS 🏴‍☠️"));
  console.log("=".repeat(50));

  Object.keys(Players).forEach((key, index) => {
    const char = Players[key];
    console.log(`${chalk.yellow(index + 1)}. ${chalk.cyan.bold(char.NOME)}`);
    console.log(
      `   ⚡ Velocidade: ${chalk.green(
        char.VELOCIDADE
      )} | 💪 Força: ${chalk.red(char.FORÇA)} | 🌟 Haki: ${chalk.magenta(
        char.HAKI
      )}`
    );
    console.log("");
  });
}

function escolherPersonagem(playerNumber) {
  return new Promise((resolve) => {
    mostrarPlayers();
    rl.question(
      chalk.yellow.bold(`Escolha o ${playerNumber}º jogador (1-6): `),
      (response) => {
        const escolha = parseInt(response) - 1;
        const chaves = Object.keys(Players);

        if (escolha >= 0 && escolha < chaves.length) {
          const personagemEscolhido = { ...Players[chaves[escolha]] };
          console.log(
            chalk.green(`✅ ${personagemEscolhido.NOME} selecionado!\n`)
          );
          resolve(personagemEscolhido);
        } else {
          console.log(chalk.red("❌ Escolha inválida! Tente novamente.\n"));
          resolve(escolherPersonagem(playerNumber));
        }
      }
    );
  });
}

async function LogRollResult(characterName, fight, diceResult, attribute) {
  console.log(
    `${chalk.cyan(characterName)} 🎲 rolou um dado de ${chalk.yellow(
      fight
    )}: ${diceResult} + ${attribute} = ${chalk.green(diceResult + attribute)}`
  );
}

async function playFightEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🥊 rodada ${round}`);

    // Style of fight
    let fight = await getRandomFight();

    const fightEmojis = {
      DESVIA: "🏃‍♂️💨",
      LUTA: "👊💥",
      AURA: "⚡🌟",
    };

    console.log(
      `${fightEmojis[fight]} Estilo sorteado: ${chalk.magenta(fight)}`
    );

    //roll dice
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;
    if (fight === "DESVIA") {
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

      if (auraResult1 > auraResult2 && character2.PONTOS > 0) {
        console.log(
          `${chalk.green(character1.NOME)} venceu o confronto! ${chalk.red(
            character2.NOME
          )} perdeu 1 ponto 🐢`
        );
        character2.PONTOS--;
      } else if (auraResult1 > auraResult2 && character2.PONTOS === 0) {
        console.log(
          `${chalk.green(character1.NOME)} venceu, mas ${chalk.gray(
            character2.NOME
          )} não tem pontos a perder🐢`
        );
      }

      if (auraResult2 > auraResult1 && character1.PONTOS > 0) {
        console.log(
          `${chalk.green(character2.NOME)} venceu o confronto! ${chalk.red(
            character1.NOME
          )} perdeu 1 ponto 🐢`
        );
        character1.PONTOS--;
      } else if (auraResult2 > auraResult1 && character1.PONTOS === 0) {
        console.log(
          `${chalk.green(character2.NOME)} venceu, mas ${chalk.gray(
            character1.NOME
          )} não tem pontos a perder🐢`
        );
      }

      if (auraResult2 === auraResult1) {
        console.log(
          chalk.yellow("Confronto empatado! Nenhum ponto foi perdido")
        );
      }

      continue;
    }

    if (totalTestSkill1 > totalTestSkill2) {
      console.log(chalk.green(`${character1.NOME} marcou um ponto!`));
      character1.PONTOS++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(chalk.green(`${character2.NOME} marcou um ponto!`));
      character2.PONTOS++;
    } else {
      console.log(
        chalk.yellow("Confronto empatado! Nenhum ponto foi marcado!")
      );
    }

    console.log("-----------------------------");
  }
}

async function declareWinner(character1, character2) {
  console.log("\n" + "=".repeat(50));
  console.log(chalk.cyan.bold("🏆 RESULTADO FINAL 🏆"));
  console.log("=".repeat(50));
  console.log(
    `${chalk.yellow(character1.NOME)}: ${character1.PONTOS} ponto(s)`
  );
  console.log(
    `${chalk.yellow(character2.NOME)}: ${character2.PONTOS} ponto(s)`
  );
  console.log("=".repeat(50));

  if (character1.PONTOS > character2.PONTOS)
    console.log(
      `\n${chalk.green.bold(
        `🎉 ${character1.NOME} venceu a luta! Parabéns! 🏆`
      )}`
    );
  else if (character2.PONTOS > character1.PONTOS)
    console.log(
      `\n${chalk.green.bold(
        `🎉 ${character2.NOME} venceu a luta! Parabéns! 🏆`
      )}`
    );
  else console.log(`\n${chalk.yellow.bold("🤝 A luta terminou em empate!")}`);
}

(async function main() {
  console.log(
    chalk.bgMagenta.white.bold("🏴‍☠️ SIMULADOR DE LUTAS ONE PIECE 🏴‍☠️\n")
  );

  const player1 = await escolherPersonagem("1");
  const player2 = await escolherPersonagem("2");

  rl.close();

  console.log(
    chalk.bgMagenta.white.bold(
      `🥊🚨 Luta entre ${player1.NOME} e ${player2.NOME} começando... 🚨🥊\n`
    )
  );

  await playFightEngine(player1, player2);
  await declareWinner(player1, player2);
})();
