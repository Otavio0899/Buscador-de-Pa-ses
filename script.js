function pesquisar(){ // função para pesquisa após o clique.
    
let section = document.getElementById("resultados-pesquisa"); // pega o id do elemento em questão para saber onde incluir os códigos.

let campoPesquisa = document.getElementById("campo-pesquisa").value; // campo onde será filtrados os resultados a partir da digitação.

if(!campoPesquisa){
    section.innerHTML = "<p>Nenhum resultado encontrado!</p>";
    return;
}

campoPesquisa = campoPesquisa.toLowerCase();

let resultados = "" // inicia uma variavel para armazenar dados.
// let nome  = ""
// let sobre  = ""
// let localizacao = ""

for (let infos of paises){ //iteração de dados, para exibir todos os dados contidos na base de dados.
    let localizacao = infos.localizacao.toLowerCase();
    let nome = infos.nome.toLowerCase();
    let sobre = infos.sobre.toLowerCase();
    let tags = infos.tags.toLowerCase();
    
    if(nome.includes(campoPesquisa) || sobre.includes(campoPesquisa) || localizacao.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
            <h2>
                <a>País: ${infos.nome}</a>
            </h2>
            <p class="descricao-meta">Localização: ${infos.localizacao}</p>
            </p>
            <p class="descricao-meta">População: ${infos.populacao}</p>
            </p>
            <p class="descricao-meta">Sobre o ${infos.nome}: ${infos.sobre}</p>
            </p>
            <a href="${infos.link}" target="_blank">Mais informações, clique aqui</a>
        </div>
        `
    }
};

if(!resultados) {
    resultados = "<p>Nada foi encontrado !</p>"
}
section.innerHTML = resultados; // seção onde será inclusos os resultados dentro do inner, onde será exibido os resultados na tela.
};




