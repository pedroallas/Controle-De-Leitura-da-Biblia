# Controle de Leitura da Bíblia

Este é um projeto de frontend simples para auxiliar no acompanhamento da leitura da Bíblia. A aplicação permite que o usuário marque os livros que já leu, acompanhe o progresso em termos de capítulos e versículos, e veja o percentual total da leitura concluída.

## Funcionalidades

-   **Visualização Completa:** Lista todos os 66 livros da Bíblia com seus respectivos totais de capítulos e versículos.
-   **Acompanhamento de Progresso:** Marque livros como lidos e veja as estatísticas de leitura serem atualizadas em tempo real.
-   **Cálculo Percentual:** Acompanhe o percentual da sua jornada de leitura.
-   **Persistência de Dados:** Seu progresso é salvo automaticamente no navegador (`localStorage`), permitindo que você feche a página e continue de onde parou.

## Instalação e Uso

Como este é um projeto de frontend puro (HTML, CSS e JavaScript), não há necessidade de um processo de *build* complexo. No entanto, para garantir que os módulos JavaScript (ES6 Modules) funcionem corretamente, você precisa servir os arquivos através de um servidor web local.

### Pré-requisitos

-   [Python 3](https://www.python.org/downloads/) (já vem instalado na maioria dos sistemas Linux e macOS).

### Passos para Executar

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/Controle-De-Leitura-da-Biblia.git
    cd Controle-De-Leitura-da-Biblia
    ```

2.  **Inicie um servidor web local:**
    O Python possui um módulo nativo para criar um servidor HTTP simples, o que é perfeito para este projeto. Execute o seguinte comando no diretório raiz do projeto:
    ```bash
    python3 -m http.server 8000
    ```
    *Se você estiver usando Python 2, o comando é `python -m SimpleHTTPServer 8000`.*

3.  **Acesse a aplicação:**
    Abra seu navegador e acesse a seguinte URL:
    [http://localhost:8000](http://localhost:8000)

A aplicação estará pronta para uso.

## Estrutura do Projeto

O projeto segue uma **Arquitetura em Camadas** para separar as responsabilidades e garantir um código mais limpo e manutenível. Para mais detalhes, consulte o arquivo `DOCUMENTATION.md`.
