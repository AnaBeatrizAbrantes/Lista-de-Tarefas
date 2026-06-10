# CheckList

Aplicativo de gerenciamento de tarefas desenvolvido em React, com suporte a troca de temas (Light e Dark Mode) e persistência de dados local.


## Funcionalidades

- Adicionar e remover tarefas: Permite a criação e exclusão de itens de forma direta.
- Marcar como concluída: Altera o status visual da tarefa ao ser finalizada.
- Filtros por status: Opções para visualizar todas as tarefas, apenas as ativas ou apenas as concluídas.
- Alternância de tema: Suporte a modo claro e modo escuro com transição de cores.
- Persistência de dados: O estado das tarefas e o tema selecionado são salvos no `localStorage` do navegador.

---

## Tecnologias Utilizadas

- React.js (Vite)
- Styled-Components
- JavaScript (ES6+)
- Git e GitHub

---

## Estrutura do Projeto

```text
src/
├── components/
│   ├── Header.jsx
│   ├── TarefaItem.jsx
│   ├── FormularioTarefa.jsx
│   └── Filtros.jsx
├── styles/
│   ├── GlobalStyle.js
│   ├── Themes.js
│   └── components/
│       ├── Header.styles.js
│       └── Tarefa.styles.js
├── App.jsx
└── main.jsx
```
## Como Executar

Siga os comandos abaixo no terminal para rodar o projeto em sua máquina:

1. Clone o repositório:
```bash
git clone https://github.com/AnaBeatrizAbrantes/Lista-de-Tarefas.git
```
Acesse o diretório do projeto:
```bash
cd Lista-de-Tarefas
```
Instale as dependências necessárias:
```Bash
npm install
```
Inicie o servidor de desenvolvimento:
```Bash
npm run dev
```

Acesse o endereço local indicado no terminal.
