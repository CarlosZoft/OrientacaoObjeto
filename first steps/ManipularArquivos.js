class Leitor{
    Ler(caminho){
        return "Conteudo do Arquivo!"
    }
}

class Escritor{
    Escrever(arquivo, conteudo){
        console.log("Conteudo escrito!");
    }
}

class Criador{
    Criar(){
        console.log("Arquivo Criado!")
    }
}

class Destruidor{

    Deletar(){
        console.log("Deletando Arquivo!")
    }
}
class ManipularArquivo {

    constructor(nome){
        this.arquivo =nome;
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador  = new Criador();
        this.destruidor = new Destruidor();
    }
    
}
class GerenciadorDeUsuarios{
    constructor(){
        this.criador = new Criador();
        this.escritor = new Escritor();
    }
    SalvarListaDeUsuarios(lista){
        this.criador.Criar("Carlos.txt");
        this.escritor.Escrever("Carlos.txt", lista);
    }
}

var manipulador = new ManipularArquivo("meuarquivo.txt")

manipulador.leitor.Ler();
manipulador.escritor.Escrever();
manipulador.criador.Criar();
manipulador.destruidor.Deletar();

var usuarios = new GerenciadorDeUsuarios();

usuarios.SalvarListaDeUsuarios(["Carlos", "Zoft", "brasilia", "2021"])