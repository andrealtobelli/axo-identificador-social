const http = require('http');

// Criando o servidor
const server = http.createServer((req, res) => {
    // Definindo cabeçalhos de resposta
  res.writeHead(200, { 'Content-Type': 'text/json' });
  res.end(JSON.stringify(dados))
});

const dados = {
    "nome": "André Antunes",
    "idade": 18,
    "descrição": "Sou uma pessoa extrovertida, gosto de fazer amizades, praticar esportes e viajar.",
    "gênero": "Masculino",
    "país": "Brasil"
}

server.listen(3000, () => {
    console.log('Servidor rodando em <http://localhost:3000/>')
})


