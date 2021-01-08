class Dado {
    constructor(face){
        this.face = face;

    }
    Rolar(){
        //min = Math.ceil(min);
        this.face = Math.floor(this.face);
        return (Math.floor(Math.random() * (this.face - 1 + 1)) + 1);

    }
    
}
var dado = new Dado(6);
console.log(dado.Rolar());