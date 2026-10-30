# DS Delivery

[![Licença](https://img.shields.io/github/license/santosediego/dsdeliver-sds2?style=for-the-badge)](https://github.com/santosediego/dsdeliver-sds2/blob/main/LICENSE)

![Java](https://img.shields.io/badge/java_11-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/spring_boot_2.4-%236DB33F.svg?style=for-the-badge&logo=springboot&logoColor=white)
![Maven](https://img.shields.io/badge/maven-%23C71A36.svg?style=for-the-badge&logo=apachemaven&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/postgresql-%234169E1.svg?style=for-the-badge&logo=postgresql&logoColor=white)

![React](https://img.shields.io/badge/react_17-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Expo](https://img.shields.io/badge/expo_sdk_40-%23000020.svg?style=for-the-badge&logo=expo&logoColor=white)

## Sobre o projeto

DS Delivery é uma aplicação full stack web e mobile construída durante a 2ª edição da **Semana DevSuperior** (#sds2), evento de uma semana organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em um sistema de pedido e entrega de restaurante. Os dados da solicitação do pedido são coletados via web e, posteriormente, os pedidos são entregues e confirmados no app mobile.

O back-end não está mais publicado online. Para ver o sistema funcionando, execute-o localmente (veja [Como executar o projeto](#como-executar-o-projeto)).

## Além do curso

Além do que foi passado nas aulas, adicionei validações no envio do pedido (tela web):

- Impede o envio sem ao menos um produto selecionado.
- Impede o envio sem o endereço de entrega informado.
- Nos dois casos, o usuário recebe um aviso, em vez de o front enviar uma requisição incompleta ao back-end.

## Telas

### Mobile
![Mobile 1](https://github.com/santosediego/assets/blob/main/dsdeliver-sds2/dsdelivery_mobile_001.jpg) ![Mobile 2](https://github.com/santosediego/assets/blob/main/dsdeliver-sds2/dsdelivery_mobile_002.jpg) ![Mobile 3](https://github.com/santosediego/assets/blob/main/dsdeliver-sds2/dsdelivery_mobile_003.jpg)

### Web
![Web 1](https://github.com/santosediego/assets/blob/main/dsdeliver-sds2/sds2diegosantos001.png)

![Web 2](https://github.com/santosediego/assets/blob/main/dsdeliver-sds2/sds2diegosantos002.png)

![Web 3](https://github.com/santosediego/assets/blob/main/dsdeliver-sds2/sds2diegosantos003.png)

### Modelo conceitual
![Modelo Conceitual](https://github.com/santosediego/assets/blob/main/dsdeliver-sds2/sds2diegosantos_modelo-conceitual.png)

## Tecnologias utilizadas
### Back-end
- Java 11
- Spring Boot 2.4
- Spring Data JPA / Hibernate
- Spring Security (configuração de CORS)
- Bean Validation
- Maven
- PostgreSQL (e H2 para execução local)
### Front-end web
- HTML, CSS, JS, TypeScript
- ReactJS 17
- Axios
- React Router
- React Select
- React Toastify
- Leaflet (React Leaflet)
### Front-end mobile
- React Native
- Expo (SDK 40)
- React Navigation
- Axios
- Day.js
### Serviços externos
- Mapbox Geocoding API (busca de endereço do pedido)

## Como executar o projeto

### Back-end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/santosediego/dsdeliver-sds2.git

# entrar na pasta do projeto back end
cd dsdeliver-sds2/backend

# executar o projeto (perfil test, com H2)
./mvnw spring-boot:run
```

O back-end tem três perfis. O padrão é o `test`, definido no `application.properties`:

| Perfil | Banco | Uso |
|--------|-------|-----|
| `test` (padrão) | H2 em memória, já populado pelo `data.sql` | Experimentar o sistema localmente, sem instalar nada além do Java |
| `dev` | PostgreSQL local (`dsdeliver`) | Desenvolvimento com banco real |
| `prod` | Definido pela variável de ambiente `DATABASE_URL` | Produção |

No perfil padrão, o console do H2 fica disponível em `/h2-console` (JDBC URL `jdbc:h2:mem:testdb`, usuário `sa`, sem senha).

#### Usando o PostgreSQL (perfil dev)

O projeto não traz o script de criação das tabelas (`ddl-auto=none`), então é preciso gerá-lo:

1. Crie o banco `dsdeliver` no PostgreSQL local (usuário e senha `postgres`, conforme o `application-dev.properties`).
2. No `application-dev.properties`, descomente as quatro linhas `schema-generation` / `hbm2ddl.delimiter` e execute o projeto uma vez com o perfil `dev`. Ele gera o arquivo `create.sql`.
3. Execute o `create.sql` no banco e depois o `data.sql` do projeto para popular os dados. Em seguida, comente as linhas novamente.
4. Execute com o perfil `dev`:

```bash
./mvnw spring-boot:run -Dspring-boot.run.profiles=dev
```

### Front-end web
Pré-requisitos: Node 16, npm e um token gratuito do [Mapbox](https://account.mapbox.com) (usado na busca de endereço do pedido)

```bash
# clonar repositório (se ainda não clonou)
git clone https://github.com/santosediego/dsdeliver-sds2.git

# entrar na pasta do projeto front end web
cd dsdeliver-sds2/front-web

# instalar dependências
npm install
```

Crie um arquivo `.env` dentro de `front-web` com o endereço do back-end e o seu token do Mapbox:

```
REACT_APP_URL=http://localhost:8080
REACT_APP_ACCESS_TOKEN_MAP_BOX=seu_token_do_mapbox
```

Depois, execute o projeto:

```bash
npm start
```

> O projeto usa `react-scripts` 4, que não roda em Node 17 ou superior sem ajuste. Se for o seu caso, use `NODE_OPTIONS=--openssl-legacy-provider npm start`.

### Front-end mobile
Pré-requisitos: Node 16, npm e Expo CLI

> O app foi feito com **Expo SDK 40** (2021). O Expo Go atual não suporta essa versão, então o app mobile fica aqui como registro e dificilmente abrirá sem um ambiente da época.

```bash
# entrar na pasta do projeto front end mobile
cd dsdeliver-sds2/front-mobile

# instalar dependências
npm install

# executar o projeto
npm start
```

## Autor

[Diego Santos](https://www.linkedin.com/in/santosediego/ "Perfil Linkedin Diego Santos")
