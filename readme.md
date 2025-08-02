# Entrega de projeto - Simulador de Lutas One Piece com Node.js

  <li> <label for="pistas-1-item">Os personagens irão lutar em uma batalha de 5 rodadas</label></li>
  <li> <label for="pistas-2-item">A cada rodada, será sorteado um tipo de confronto que pode ser Corrida, Luta ou Aura</label></li>esenvolvida uma Luta que considera as habilidades dos personagens piratas e as variáveis das pistas. O desenvolvimento foi realizado utilizando NodeJS.

<table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="One Piece Race" width="200">
            </td>
            <td>
                <b>Objetivo:</b>
                <p>One Piece é uma série de mangá e anime criada por Eiichiro Oda. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular Lutas entre piratas do universo One Piece, levando em consideração as regras e mecânicas abaixo.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luffy</p>
                <img src="./docs/Luffy.gif" alt="One Piece" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Força: 3</p>
                <p>Haki: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Kuma</p>
                <img src="./docs/Kuma.gif" alt="One Piece" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Força: 4</p>
                <p>Haki: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Akainu</p>
                <img src="./docs/Akainu.gif" alt="One Piece" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Força: 4</p>
                <p>Haki: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Sogeking</p>
                <img src="./docs/Sogeking.gif" alt="One Piece" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 5</p>
                <p>Força: 2</p>
                <p>Haki: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Kaido</p>
                <img src="./docs/Kaido.gif" alt="One Piece" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Força: 4</p>
                <p>Haki: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Shanks</p>
                <img src="./docs/shanks.gif" alt="One Piece" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Força: 2</p>
                <p>Haki: 5</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>🕹️ Regras & mecânicas:</h3>

<b>Jogadores:</b>

<label for="jogadores-item">O Computador deve receber dois personagens para disputar a Luta em um objeto cada</label>

<b>Batalhas:</b>

<ul>
  <li> <label for="pistas-1-item">Os personagens irão correr em uma pista aleatória de 5 rodadas</label></li>
  <li> <label for="pistas-2-item">A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto</label>
    <ul>
      <li><label for="pistas-2-1-item">Caso seja um confronto de **Corrida**, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto</label></li>
      <li><label for="pistas-2-2-item">Caso seja um confronto de **Luta**, o jogador deve jogar um dado de 6 lados e somar o atributo FORÇA, quem vencer ganha um ponto</label></li>
      <li><label for="pistas-2-3-item">Caso seja um confronto de **Aura**, o jogador deve jogar um dado de 6 lados e somar o atributo HAKI, quem perder, perde um ponto</label></li>
      <li><label for="pistas-2-3-item">Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)</label></li>
    </ul>
  </li>
</ul>

<b>Condição de vitória:</b>

<label for="vitoria-item">Ao final, vence quem acumulou mais pontos</label>

## Tecnologias Utilizadas

- JavaScript.
- NodeJs.

## Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/fabiocasadossites/desafio-nodejs-mariokart-dio.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-repositorio
   ```

3. Em seu terminal e na pasta do projeto

   ```bash
   node src/index.js
   ```
