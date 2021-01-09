const fs = require('fs');
const util = require('util');

class Writer{
    constructor(){
        this.writer = util.promisify(fs.writeFile)
    }

    async Write(filename, about){
        try{
            return await this.writer(filename,about);
        }    
        catch(err){
            return false;
        }
        
    }
}

module.exports = Writer;