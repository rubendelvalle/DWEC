const probabilidadError = 0.3;

const commitsEnviados = [];

function enviarCommit() {
  const probabilidad = Math.random();

  if (probabilidad < probabilidadError) {
    console.log("Commit erróneo");
    commitsEnviados.push(0);
  } else {
    console.log("Commit correcto");
    commitsEnviados.push(1);
  }
}

for (let i = 1; i <= 10; i++) {
  enviarCommit();
  console.log(`Enviando commit ${i}...`);
}

const totalCommits = commitsEnviados.length;
const totalCorrectos = commitsEnviados.filter(commit => commit === 1).length;
const totalErrores = commitsEnviados.filter(commit => commit === 0).length;

console.log(`Total commits enviados: ${totalCommits}`);
console.log(`Commits correctos: ${totalCorrectos}`);
console.log(`Commits erróneos: ${totalErrores}`);
