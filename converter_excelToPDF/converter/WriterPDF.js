var pdf = require('html-pdf')

class WriterPDF {
    static Write(filename, html){
        pdf.create(html,{}).toFile(filename,(err)=>{

        })
    }
}

module.exports = WriterPDF;