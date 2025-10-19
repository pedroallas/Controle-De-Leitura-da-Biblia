# Documentação da Refatoração

## Introdução

Este documento detalha as mudanças realizadas durante a refatoração do projeto "Controle de Leitura da Bíblia". O objetivo principal foi aplicar práticas de Clean Code, Clean Architecture e outros padrões de engenharia de software para melhorar a manutenibilidade, legibilidade e escalabilidade do código.

## Arquitetura

O projeto foi reestruturado em uma arquitetura de camadas para separar as responsabilidades, seguindo o Princípio da Responsabilidade Única (SRP). A nova estrutura de diretórios é a seguinte:

```
.
├── src/
│   ├── data/
│   │   └── books.js
│   ├── domain/
│   │   └── progress.js
│   ├── presentation/
│   │   └── ui.js
│   └── services/
│       └── storageService.js
├── index.html
└── main.js
```

### Camadas

- **`src/data` (Camada de Dados):**
  - `books.js`: Contém o array com os dados dos livros da Bíblia. Centraliza os dados em um único local, eliminando a duplicação que existia anteriormente.

- **`src/domain` (Camada de Domínio):**
  - `progress.js`: Contém a lógica de negócio pura, sem acoplamento com o DOM ou armazenamento. É responsável por calcular os totais de capítulos/versículos e por atualizar o estado do progresso.

- **`src/services` (Camada de Serviços):**
  - `storageService.js`: Abstrai a interação com o `localStorage`. Fornece uma API simples para salvar e carregar o progresso, facilitando futuras mudanças no mecanismo de persistência.

- **`src/presentation` (Camada de Apresentação):**
  - `ui.js`: Responsável por toda a manipulação do DOM. Renderiza a tabela de livros, atualiza os contadores na tela e lida com os eventos de interação do usuário.

- **`main.js` (Ponto de Entrada):**
  - Orquestra a inicialização da aplicação, importando e conectando os diferentes módulos.

## Principais Mudanças e Benefícios

1.  **Separação de Responsabilidades (SRP):** Cada módulo agora tem uma única responsabilidade, tornando o código mais fácil de entender e manter.
2.  **Eliminação de Código Duplicado:** A lista de livros, que estava duplicada no `index.html` e no `script.js`, agora existe apenas em `src/data/books.js`.
3.  **Remoção de JavaScript Inline:** Todo o código JavaScript foi movido de dentro do `index.html` para arquivos `.js` externos, melhorando a organização e o cache do navegador.
4.  **Modularização (ES6 Modules):** O código foi dividido em módulos que se comunicam através de `import` e `export`, evitando o uso de variáveis globais e melhorando o encapsulamento.
5.  **Inversão de Dependência:** A camada de apresentação (`ui.js`) agora depende de abstrações (funções em `progress.js` e `storageService.js`) em vez de implementações concretas, o que torna o sistema mais flexível.
6.  **Legibilidade e Manutenibilidade:** Com nomes de variáveis e funções mais descritivos e uma estrutura clara, o código se tornou muito mais fácil de ler e modificar.

## Fluxo da Aplicação

1.  O navegador carrega o `index.html`.
2.  O `index.html` carrega o `main.js` como um módulo (`type="module"`).
3.  `main.js` espera o evento `DOMContentLoaded` e então chama a função `initializeUI()` do módulo `ui.js`.
4.  `initializeUI()`:
    a. Importa os dados dos livros de `books.js` e os utiliza para renderizar dinamicamente a tabela na tela.
    b. Adiciona os *event listeners* aos checkboxes e aos botões de salvar/carregar.
    c. Tenta carregar o progresso salvo do `storageService.js` e, se houver, atualiza a UI.
5.  Quando um checkbox é marcado/desmarcado:
    a. O *event listener* em `ui.js` é acionado.
    b. A função `updateProgress()` de `progress.js` é chamada para recalcular os totais.
    c. A UI é atualizada com os novos valores.
    d. O `storageService.js` é chamado para salvar o novo estado do progresso no `localStorage`.
