class Processor{
    static Process(about){
        var data = about.split("\r\n");
        var rows = [];
        data.forEach(row =>{
           var arr = row.split(',');
           rows.push(arr);
        });
        return rows;
    }
}

module.exports = Processor;