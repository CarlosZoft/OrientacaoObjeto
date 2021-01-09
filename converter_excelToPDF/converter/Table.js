class Table{

    constructor(data_processor){
        this.title = data_processor[0];
        data_processor.shift();
        this.rows = data_processor;
    }
    get RowCount(){
        return this.rows.length;
    }
    get ColumnCount(){
        return this.title.length;
    }
}

module.exports = Table;