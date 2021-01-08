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
     Ficha(){
        console.log("Titulo: " + this.titulo)
        console.log("Ano de lançamento: " + this.ano)
        console.log("Genero : " + this.genero)
        console.log("Diretor : " + this.diretor)
        console.log("duracao :" + this.duracao)
        console.log("Atores :" + this.atores)
     }

}

var vingadores = new Filme("Vingadores",2014,"ação");
var logan = new Filme("logan", 2017, "ação");
var harryPotter = new Filme("Harry potter e a Criança Amaldiçoada", 2016, "ficção/fantasia");
vingadores.Ficha();