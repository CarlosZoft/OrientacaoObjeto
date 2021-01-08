class Filme {
     constructor(titulo, ano, genero, diretor,duracao,...atores){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.duracao = duracao;
        this.atores = atores;
     }

     Reproduzir(){
        console.log("Reproduzindo");
     }
     Pausar(){
        console.log("Pause")
     }
     Avancar(){
         console.log("Avança")
     }
     Fechar(){
         console.log("Fechando")
     }


}

var vingadores = new Filme("Vingadores",2014,"ação");
var logan = new Filme("logan", 2017, "ação");
var harryPotter = new Filme("Harry potter e a Criança Amaldiçoada", 2016, "ficção/fantasia");
console.log(vingadores)
console.log(logan)
console.log(harryPotter)