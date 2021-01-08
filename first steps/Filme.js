class Filme {
     constructor(){
        this.titulo = '';
        this.ano = 2000;
        this.genero = ' ';
        this.diretor = ' ';
        this.atores = [];
        this.duracao = 0;
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

var vingadores = new filme ();
var logan = new filme();
var harryPotter = new filme();