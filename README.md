 SOS Auto Serviços

## 1. Visão Geral

A arquitetura proposta utiliza React para o frontend, tanto na versão web quanto na versão móvel (via React Native). O backend será uma API RESTful, e utilizaremos uma arquitetura de microsserviços para maior escalabilidade e manutenibilidade.

**LEIA AS REGRAS PARA TRABALHAR COM ESSE PROJETO:**

> [**Regras Commit**](https://git-scm.com/docs/git/pt_BR)

> [**Regras do projeto**](https://github.com/sos-auto-save/prototic/blob/main/REGRAS.MD)


## 2. Componentes Principais

### 2.1 Frontend Web (React)

- **Tecnologias:** React, Redux, React Router
- **Estrutura de Diretórios:**

  ```
  src/
  ├── components/
  │   ├── common/
  │   ├── layout/
  │   └── specific/
  ├── pages/
  ├── redux/
  │   ├── actions/
  │   ├── reducers/
  │   └── store.js
  ├── services/
  ├── utils/
  └── App.js
  ```

<details>
  <summary>
    <b>
      Explicação detalhada:
    </b>
  </summary>

  # Detalhamento dos Componentes e Pastas - SOS Auto Serviços

  ## Estrutura de Diretórios do Frontend (Web e Mobile)

  ```
  src/
  ├── components/
  │   ├── common/
  │   ├── layout/
  │   └── specific/
  ├── pages/
  ├── redux/
  │   ├── actions/
  │   ├── reducers/
  │   └── store.js
  ├── services/
  ├── utils/
  └── App.js
  ```

  ### 1. components/

  Esta pasta contém todos os componentes React reutilizáveis.

  #### 1.1 common/
  Componentes genéricos usados em várias partes da aplicação.

  - `Button.js`: Botão customizado e reutilizável.
  - `Input.js`: Campo de entrada padronizado.
  - `Modal.js`: Componente de modal reutilizável.
  - `Loader.js`: Indicador de carregamento.

  #### 1.2 layout/
  Componentes relacionados à estrutura da aplicação.

  - `Header.js`: Cabeçalho da aplicação, incluindo navegação e logo.
  - `Footer.js`: Rodapé com links e informações de copyright.
  - `Sidebar.js`: Barra lateral para navegação (mais relevante para o dashboard de parceiros).

  #### 1.3 specific/
  Componentes específicos para o SOS - Auto Serviços.

  - `ServiceCard.js`: Card para exibir informações de um serviço.
  - `Map.js`: Componente de mapa para mostrar localização de serviços.
  - `SearchBar.js`: Barra de pesquisa para buscar serviços.
  - `UserProfile.js`: Exibição e edição de perfil do usuário.
  - `ServiceRequestForm.js`: Formulário para solicitar um serviço.
  - `RatingComponent.js`: Componente para avaliar serviços.

  ### 2. pages/

  Contém componentes que representam páginas inteiras da aplicação.

  - `Home.js`: Página inicial.
  - `Search.js`: Página de resultados de pesquisa.
  - `ServiceDetails.js`: Página de detalhes de um serviço específico.
  - `UserDashboard.js`: Dashboard do usuário.
  - `PartnerDashboard.js`: Dashboard para parceiros.
  - `Login.js` e `Register.js`: Páginas de autenticação.

  ### 3. redux/ (backend)

  Gerenciamento de estado global usando Redux.

  #### 3.1 actions/
  - `authActions.js`: Ações relacionadas à autenticação.
  - `serviceActions.js`: Ações para busca e manipulação de serviços.
  - `userActions.js`: Ações relacionadas ao perfil do usuário.

  #### 3.2 reducers/
  - `authReducer.js`: Gerencia o estado de autenticação.
  - `serviceReducer.js`: Gerencia o estado dos serviços.
  - `userReducer.js`: Gerencia o estado do perfil do usuário.

  #### 3.3 store.js
  Configura e exporta a store do Redux.

  ### 4. services/

  Contém funções para interação com APIs e serviços externos.

  - `api.js`: Configuração base para requisições HTTP (usando Axios).
  - `authService.js`: Funções para login, registro e gerenciamento de tokens.
  - `serviceService.js`: Funções para buscar e manipular dados de serviços.
  - `geoService.js`: Integração com serviços de geolocalização.
  - `paymentService.js`: Integração com gateway de pagamento.

  ### 5. utils/

  Funções utilitárias e helpers.

  - `validation.js`: Funções de validação de formulários.
  - `formatters.js`: Funções para formatação de dados (ex: moeda, data).
  - `constants.js`: Constantes usadas em toda a aplicação.

  ### 6. App.js

  Componente raiz da aplicação, onde a estrutura principal e roteamento são definidos.

  ## Componentes Específicos

  ### ServiceCard.js
  - Exibe informações básicas de um serviço (nome, tipo, avaliação).
  - Permite ações rápidas como "Ver detalhes" ou "Solicitar".

  ### Map.js
  - Integra com a API de mapas para mostrar a localização de serviços.
  - Permite interatividade para selecionar serviços no mapa.

  ### SearchBar.js
  - Input para busca de serviços.
  - Pode incluir filtros avançados (tipo de serviço, distância, etc.).

  ### UserProfile.js
  - Exibe informações do usuário.
  - Permite edição de dados pessoais.

  ### ServiceRequestForm.js
  - Formulário para solicitar um serviço específico.
  - Inclui campos como descrição do problema, localização, etc.

  ### RatingComponent.js
  - Permite aos usuários avaliar serviços após a conclusão.
  - Exibe média de avaliações para um serviço.

  <!-- ## Considerações para React Native

  Para a versão mobile em React Native, a estrutura será similar, com algumas adaptações:

  - Uso de componentes nativos (`View`, `Text`, `TouchableOpacity`) em vez de elementos HTML.
  - Implementação de navegação usando `react-navigation`.
  - Adaptação de estilos para funcionar com o sistema de estilização do React Native.
  - Uso de `AsyncStorage` em vez de `localStorage` para armazenamento local.

  Esta estrutura fornece uma base organizada e escalável para o desenvolvimento do SOS - Auto Serviços, permitindo fácil manutenção e adição de novas features no futuro. -->
    
</details>

### 2.2 Frontend Mobile (React Native)

- **Tecnologias:** React Native, Redux, React Navigation
- **Estrutura de Diretórios:** Similar ao frontend web, com adições específicas para mobile

### 2.3 Backend (Node.js + Express)

- **Tecnologias:** Node.js, Express, MongoDB
- **Arquitetura:** Microsserviços

### 2.4 Serviços Externos

- Serviço de Geolocalização (ex: Google Maps API)
- Serviço de Pagamentos (ex: Stripe)
- Serviço de Notificações Push

## 3. Fluxo de Dados

1. O usuário interage com a interface React
2. As ações do usuário disparam actions do Redux
3. Os reducers atualizam o estado global da aplicação
4. Os componentes React são re-renderizados com base no novo estado
5. Requisições à API são feitas através de serviços encapsulados

## 4. Componentização

Dividiremos a aplicação em componentes reutilizáveis:

- `Header`
- `Footer`
- `ServiceCard`
- `Map`
- `SearchBar`
- `UserProfile`
- `ServiceRequestForm`
- `RatingComponent`

## 5. Gerenciamento de Estado

- Utilizaremos Redux para gerenciamento de estado global
- Context API do React para estados locais quando apropriado

## 6. Roteamento

- React Router para navegação no frontend web
- React Navigation para navegação no app mobile

## 7. Comunicação com o Backend

- Axios para requisições HTTP
- Implementação de interceptors para tratamento de erros e autenticação

## 8. Autenticação

- JWT (JSON Web Tokens) para autenticação
- Armazenamento seguro de tokens (localStorage para web, AsyncStorage para mobile)

## 9. Estilização

- Styled-components para estilização consistente entre web e mobile
- Design system próprio para manter consistência visual

## 10. Testes

- Jest para testes unitários
- React Testing Library para testes de integração
- Cypress para testes end-to-end no frontend web

## 11. CI/CD

- GitHub Actions para integração contínua
- Docker para containerização
- AWS ou Google Cloud Platform para deploy

## 12. Performance

- Code splitting com React.lazy e Suspense
- Memoização de componentes com React.memo
- Otimização de imagens e assets

## 13. Acessibilidade

- Implementação de WAI-ARIA para melhorar a acessibilidade
- Testes de acessibilidade com ferramentas como axe-core

## 14. Internacionalização

- React-intl para suporte a múltiplos idiomas

## 15. Segurança

- Implementação de CSP (Content Security Policy)
- Sanitização de inputs para prevenir XSS
- Proteção contra CSRF em formulários

Esta arquitetura fornece uma base sólida e escalável para o desenvolvimento do SOS - Auto Serviços, permitindo fácil manutenção e adição de novas features no futuro.

