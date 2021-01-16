# DS Delivery 
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/santosediego/dsdeliver-sds2/blob/main/LICENSE) 
[![Netlify Status](https://api.netlify.com/api/v1/badges/ab15e182-74db-4bed-acb2-23907fc2ed26/deploy-status)](https://app.netlify.com/sites/sds2diegosantos/deploys)

# Sobre o projeto

https://sds2diegosantos.netlify.app/

DS Delivery é uma aplicação full stack web e mobile construída durante a 2ª edição da **Semana DevSuperior** (#sds2), evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em um sistema de pedido e entrega de restaurante. Os dados da solicitação do pedido são coletados via web e posteriormente os pedidos são entregues e confirmados no app mobile.

## Layout mobile
![Mobile 1](https://github.com/santosediego/assets/blob/main/dsdeliver-sds2/dsdelivery_mobile_001.jpg) ![Mobile 2](https://github.com/santosediego/assets/blob/main/dsdeliver-sds2/dsdelivery_mobile_002.jpg) ![Mobile 3](https://github.com/santosediego/assets/blob/main/dsdeliver-sds2/dsdelivery_mobile_003.jpg)

## Layout web
![Web 1](https://github.com/santosediego/assets/blob/main/dsdeliver-sds2/sds2diegosantos001.png)

![Web 2](https://github.com/santosediego/assets/blob/main/dsdeliver-sds2/sds2diegosantos002.png)

![Web 3](https://github.com/santosediego/assets/blob/main/dsdeliver-sds2/sds2diegosantos003.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/santosediego/assets/blob/main/dsdeliver-sds2/sds2diegosantos_modelo-conceitual.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
- Apex Charts
- Expo
## API
- Mapbox
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/santosediego/dsdeliver-sds2.git

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/santosediego/dsdeliver-sds2.git

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
npm install

# executar o projeto
npm start
```

## Front end mobile
Pré-requisitos: npm / expo

```bash
# clonar repositório
git clone https://github.com/santosediego/dsdeliver-sds2.git

# entrar na pasta do projeto front end web
cd front-mobile

# instalar dependências
expo install @react-navigation/stack @react-native-community/masked-view react-native-screens react-native-gesture-handler @react-navigation/native expo-app-loading @expo-google-fonts/open-sans expo-font

# executar o projeto
npm start
```

# Autor

[Diego Santos](https://www.linkedin.com/in/santosediego/ "Perfil Linkedin Diego Santos")
