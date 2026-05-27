const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question, validate) {
  return new Promise((resolve) => {
    const ask = () => {
      rl.question(question, (answer) => {
        if (answer.toLowerCase() === "exit") {
          console.log("Aplicação finalizada.");
          rl.close();
          process.exit(0);
        }

        const result = validate(answer);
        if (result.valid) {
          resolve(result.value);
        } else {
          console.log(
            "Valor inválido, tente novamente ou digite 'exit' para sair.",
          );
          ask();
        }
      });
    };
    ask();
  });
}

function drawPyramid(height, symbol, quantity, inverted) {
  const width = 2 * height - 1;
  let totalLines = 0;

  for (let i = 0; i < height; i++) {
    const offset = height - i - 1;
    const spaces = inverted ? i : offset;
    const symbols = (inverted ? offset : i) * 2 + 1;
    const line = (" ".repeat(spaces) + symbol.repeat(symbols)).padEnd(width, " ");
    console.log(line);
    totalLines++;
  }

  console.log(`\nTotal de linhas: ${totalLines * quantity}`);
}

(async () => {
  const height = await askQuestion(
    "Quantas linhas terá a pirâmide? ",
    (answer) => {
      const value = parseInt(answer);
      return { valid: !isNaN(value) && value > 0, value };
    },
  );

  const symbol = await askQuestion("Qual caractere será usado? ", (answer) => {
    return { valid: answer.length === 1, value: answer };
  });

  const quantity = await askQuestion(
    "Quantas pirâmides por linha (1, 2 ou 3)? ",
    (answer) => {
      const value = parseInt(answer);
      return { valid: [1, 2, 3].includes(value), value };
    },
  );

  const inverted = await askQuestion(
    "Normal ou invertida? (n / i) ",
    (answer) => {
      const value = answer.toLowerCase();
      return { valid: ["n", "i"].includes(value), value: value === "i" };
    },
  );

  drawPyramid(height, symbol, quantity, inverted);
  rl.close();
})();