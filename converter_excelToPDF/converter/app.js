var Reader = require('./Reader')
var leitor = new Reader();

async function main (){
    var data = await leitor.Read("./planilha.csv");
}

main();