# Tela de Carregamento

Este projeto é uma tela de carregamento simples desenvolvida com HTML e CSS. A tela exibe uma logo, uma mensagem de boas-vindas e uma mensagem de carregamento, utilizando um fundo em degradê. 

## Tecnologias Utilizadas

- **HTML5**: Para a estrutura da página.
- **CSS3**: Para o estilo e layout da tela de carregamento.
- **Google Fonts**: Utilizado para as fontes "Manrope" na tela.

## Estrutura do Projeto

O projeto consiste em dois arquivos principais:

1. **index.html**: O arquivo HTML que contém a estrutura da tela de carregamento.
2. **style.css**: O arquivo CSS que define o estilo da página, incluindo cores, fontes, layout e animações.

### index.html

O arquivo `index.html` contém:

- **Contêiner Principal**: Um `<div>` com a classe `container`, que centraliza todos os elementos na tela.
- **Logo**: Um `<div>` que contém uma imagem da logo. A imagem deve ter fundo transparente para se integrar ao fundo degradê.
- **Mensagens**: Dois elementos de texto (`<h1>` e `<div>`) para exibir a mensagem de boas-vindas e a mensagem de carregamento.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela de Carregamento</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="./img/logo-liz.png" alt="logo-liz">
        </div>
        <h1 class="welcome">Seja bem-vindo</h1>
        <div class="message">Estamos te conectando</div>
    </div>
</body>
</html>
```

### style.css

O arquivo style.css contém:

- Reset de Estilo: Remove margens e preenchimentos padrão para evitar linhas indesejadas.
- Estilos do Body e HTML: Define um fundo em degradê e centraliza o conteúdo na tela.
- Contêiner Centralizado: Utiliza Flexbox para centralizar os elementos vertical e horizontalmente.
- Estilo da Logo: Define o tamanho da logo.
- Estilos para Título e Mensagem: Configura as fontes, tamanhos e margens para os textos.

### Instruções:
1. Salve o conteúdo acima em um arquivo chamado `README.md`.
2. Ajuste as instruções e informações conforme necessário para atender às suas necessidades específicas.
3. Certifique-se de incluir um link para o seu repositório no GitHub, se aplicável.
