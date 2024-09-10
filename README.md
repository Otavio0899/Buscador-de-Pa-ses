# Buscador-de-Países
Projeto desenvolvido com base na imersão dev Alura + Gemini

# Buscador de Países

Este é um projeto simples de um **Buscador de Países**, onde o usuário pode digitar o nome de um país, parte de sua descrição ou sua localização para pesquisar por informações relacionadas a ele. O projeto foi desenvolvido utilizando **HTML**, **CSS**, e **JavaScript** puro.

## Funcionalidades

- O usuário pode digitar no campo de pesquisa o nome de um país, sua localização ou uma palavra que esteja presente na descrição.
- Ao clicar no botão "Pesquisar", os resultados são exibidos diretamente na página.
- Para cada país encontrado, são exibidos o nome, localização, população, uma breve descrição e um link para mais informações na Wikipédia.

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

### 1. `index.html`

Este arquivo define a estrutura do site, incluindo o campo de pesquisa e a área onde os resultados são exibidos.

- **Campo de pesquisa:** Um campo de texto onde o usuário pode digitar o termo de pesquisa.
- **Botão de pesquisa:** Um botão que, ao ser clicado, dispara a função de busca.
- **Seção de resultados:** Uma área onde os países correspondentes à pesquisa são exibidos.

```html
<input type="text" placeholder="Digite o país desejado" id="campo-pesquisa">
<button onclick="pesquisar()">Pesquisar</button>
<section id="resultados-pesquisa"></section>
```

### 2. informations.js 
Este arquivo contém os dados dos países, que são armazenados em um array de objetos JavaScript. Cada objeto representa um país com suas respectivas informações (nome, localização, população, descrição e um link para mais detalhes).

Exemplo de um país no array:

```
let paises = [
    {
        nome: "Brasil",
        localizacao: "América do Sul",
        populacao: "220 milhões",
        sobre: "O Brasil é um país continental na América do Sul, conhecido por sua rica biodiversidade...",
        link: "https://pt.wikipedia.org/wiki/Brasil"
    },
    // Outros países...
];
```

### 3. script.js
Este arquivo contém a função pesquisar(), que é responsável por filtrar os países com base no termo inserido no campo de pesquisa.

Captura do termo de pesquisa: O valor digitado pelo usuário é capturado e convertido para letras minúsculas para facilitar a comparação.

Filtro dos resultados: A função percorre o array de países e verifica se o termo digitado está presente no nome do país, na sua descrição ou na sua localização.

Exibição dos resultados: Caso haja correspondência, os dados do país são exibidos na seção de resultados. Se não houver, uma mensagem informando que nada foi encontrado é exibida.

```
function pesquisar(){
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();
    let resultados = "";
    
    for (let infos of paises){
        if (infos.nome.toLowerCase().includes(campoPesquisa) ||
            infos.sobre.toLowerCase().includes(campoPesquisa) ||
            infos.localizacao.toLowerCase().includes(campoPesquisa)) {
            resultados += `<div>País: ${infos.nome}</div>`;
        }
    }

    if (!resultados) {
        resultados = "<p>Nenhum resultado encontrado!</p>";
    }

    document.getElementById("resultados-pesquisa").innerHTML = resultados;
}
```

### Tecnologias Utilizadas
HTML5: Para a estrutura da página.
CSS3: Para o design básico.
JavaScript: Para a lógica da pesquisa e exibição dos resultados.
GitHub e Vercel: versionamento do código.

### Agradecimentos
Obrigado por usar este site! Sinta-se à vontade para sugerir melhorias ou relatar problemas.

