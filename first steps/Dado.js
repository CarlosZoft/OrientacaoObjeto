class Dado {
    constructor(){
        this.face = 0;

    }
    Rolar(){
        //min = Math.ceil(min);
        this.face = Math.floor(this.face);
        return (Math.floor(Math.random() * (this.face - 1 + 1)) + 1);

    }
    
}
var dado = new Dado();

dado.face = 6;
console.log(dado.Rolar());