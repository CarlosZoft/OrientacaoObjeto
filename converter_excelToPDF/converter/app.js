var Reader = require('./Reader')
var Processor = require('./Processor')
var Table = require('./Table')
var HtmlParser = require('./HtmlParser')
var Writer = require('./Writer')
var WriterPDF = require('./WriterPDF')

var leitor = new Reader();
var escritor = new Writer();

async function main (){
    var data = await leitor.Read("./planilha.csv");
    var dataProcessor = Processor.Process(data);
    var users = new Table(dataProcessor);
    console.log(users.rows)

    var html = await HtmlParser.Parse(users)

    escritor.Write(Date.now() + ".html",html)
    WriterPDF.Write(Date.now() + ".PDF",html)
    
}

main();

