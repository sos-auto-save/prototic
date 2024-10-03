# Regras do Projeto - SOS Auto Serviços

## Uso do Repositório

### Regras Git

1. **Main**: Somente para clone inicial do projeto.
2. **Branches**: Cada branch será dedicada a uma "seção do código" (ex: header, main, footer, páginas).

### Fluxo de Trabalho

1. `git clone` (apenas na primeira vez)
2. `git pull` antes de começar a trabalhar (para atualizar)
3. `git commit -m 'mensagem'`
4. `git push` na branch específica
5. `git checkout` para mudar de branch
6. Merge será realizado ao final do desenvolvimento de cada feature

> [Documentação official Git](https://git-scm.com/docs/git/pt_BR)

### Exemplo:

```bash
# Clonar o repositório (primeira vez)
git clone https://github.com/sos-auto-save/prototic

# Antes de começar a trabalhar
git pull origin main

# Criar e mudar para uma nova branch
git checkout -b feature/header

# Após fazer alterações
git add .
git commit -m 'feat: adiciona logo no header'
git push origin feature/header
```

### Regras de Uso de Branch

- Avise no grupo qual branch você está trabalhando.
- Informe quando terminar o trabalho na branch.

Exemplo de mensagem no grupo:
"Pessoal, estou começando a trabalhar na branch 'feature/header'. Avisarei quando terminar."

## Regras do Miro

O quadro Miro terá 4 colunas:

1. **Backlog**: Features a serem adicionadas
2. **Em Progresso**: Features em desenvolvimento
3. **Análise**: Features pendentes de revisão
4. **Finalizado**: Features implementadas com sucesso


### Fluxo de Trabalho no Miro

1. Qualquer um pode adicionar novas features no Backlog.
2. Ao começar a trabalhar em uma feature, mova o card para "Em Progresso".
3. Após finalizar, mova o card para "Análise" e avise o grupo.
4. Qualquer membro pode analisar e aprovar ou sugerir correções.
5. Após aprovação, mova o card para "Finalizado".

Exemplo:
"Finalizei a implementação do header. Movi o card 'Criar header responsivo' para a coluna 'Análise'. Alguém poderia revisar, por favor?"

### Observações:
- Features em "Finalizado" podem voltar para "Backlog" se precisarem de manutenção ou melhorias.
- Priorização de features no Backlog será decidida em conjunto pela equipe.

## Regras para Trabalhar com React

1. Instale Node.js e npm (ou yarn) em sua máquina.
2. Clone o repositório.
3. No diretório do projeto, instale as dependências:

```bash
npm install
# ou
yarn install ## Linux
```

4. Para rodar o projeto localmente:

```bash
npm start
# ou
yarn start ## Linux
```

5. O projeto estará disponível em `http://localhost:3000`


>> [Documentação official React](https://react.dev/)

## Objetivo Final

- Prazo: 4 semanas (final do super módulo)
- Entrega: Protótipo funcional (foco no frontend)
- Prioridade: Implementar as principais funcionalidades da interface do usuário

Lembre-se: O objetivo é ter um produto demonstrável ao final do prazo, mesmo que nem todas as funcionalidades estejam completas.