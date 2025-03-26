const frases = ["Em caso de dúvida, deixe o Vini decidir por você. Ele nunca erra… ou quase nunca 😅",
  "Quando a dúvida bater, o Vini entra em ação. Ele é especialista em sorteios aleatórios e decisões impulsivas!",
  "Você pensa, o Vini decide. Responsabilidade zero, diversão garantida!",
  "Entre duas opções? Deixa com o Vini. Ele escolhe com o coração (ou com pura aleatoriedade).",
  "Decidir é difícil... então deixa com o Vini. Ele é imparcial (na maioria das vezes).",
  "Cansado de decidir? Passe a bola pro Vini. Ele adora palpitar na sua vida!",
  "Quando as escolhas pesam, deixe a decisão nas patas certas.",
  "Às vezes, tudo que você precisa é uma ajudinha para escolher com leveza.",
  "Porque tomar decisões não precisa ser difícil nem solitário.",
  "Uma ferramenta simples para te ajudar a seguir em frente com confiança.",
  "Toda escolha carrega um destino. Deixe o acaso te mostrar o caminho.",
  "Entre o querer e o fazer, há o decidir. Que Vini seja o seu equilíbrio.",
  "Não saber o que fazer também é parte da jornada. O Vini te guia por ela.",
  "Decidir é se mover. Mesmo quando o destino vem por sorte.",
  "Você até poderia decidir sozinho... mas o Vini claramente é mais sábio.",
  "Por que confiar no seu bom senso, se o Vini pode decidir por impulso?",
  "Responsabilidade? Nunca ouvi falar. Deixa que o Vini escolhe.",
  "Decisões importantes exigem critério. Ou um clique. O Vini vai no clique."];

function randomFrase() {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById("frase").textContent = frase;
}

function sortear() {
  const opcao1 = document.getElementById('opcao1').value.trim();
  const opcao2 = document.getElementById('opcao2').value.trim();
  const resultadoEl = document.getElementById('resultado');

  if (!opcao1 || !opcao2) {
    resultadoEl.textContent = '⚠️ Preencha as duas opções para sortear.';
    return;
  }

  const escolhido = Math.random() < 0.5 ? opcao1 : opcao2;
  resultadoEl.textContent = `✨ A escolha do Vini foi: ${escolhido}`;

  randomFrase(); // atualizar frase após sorteio
}

window.onload = randomFrase; // mostrar frase ao abrir site
