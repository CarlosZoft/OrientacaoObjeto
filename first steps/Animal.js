class Animal {

    constructor(name, age, price){

        this.name = name;
        this.age = age;
        this.price = price;
    }

    ChecarEstoque(){
        return 10;
    }
}

class Cachorro extends Animal{
    constructor(name,age,price, raca, peso){
        super(name,age,price);
        this.raca = raca;
        this.peso = peso;
    }
     Latir(){
         console.log("AU AU AU!");
     }
}
class Pato extends Animal {

}

var cachorro = new Cachorro("Bob", 3 , 300, "vira-lata", 20);
console.log(cachorro);
