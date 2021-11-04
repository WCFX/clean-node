# Changelog

All notable changes to this project will be documented in this file.

## [0.0.03] - 04/11/2021

### Updated

-

### Updated

- Refatoração do test unitário onde passamos o tratamento de erro para o missing params.
- Criação do helper onde irá demonstrar o erro de uma forma mais clara, ao invés de lidar
  com os statusCode diretamente.
- Refatoramos as validações por um código mais limpo e simples.
- Criando cenários de testes de do SignUp para:
  {
  - Name,
  - Email,
  - Password,
  - PasswordConfirm
    }

## [0.0.02] - 03/11/2021

### Updated

- Criamos no Whimsical a arquitetura do projeto. [Link](https://whimsical.com/clean-node-WE8HA5pYr69WVuzq6vEe5d)
- Criamos um teste para o projeto iniciar com TDD.
- Criamos um teste com objetivo de falha e fomos arrumando ao longo do tempo.
- Foi criado uma interface para o http receber os parametros corretos.
- Foi criado config do husky e commitlint.
- Foi adicionado novas ocnfigs dentro do readme e reduzido o huskyrc.json e lintstaged.json
  da raiz do projeto.

## [0.0.01] - 02/11/2021

### Updated

- Foi adicionado Prettier e Eslint com o baseconfig airbnb.
- Foi criado uma config de Husky e Linstaged para manter a padronização de commits.
- Foi adicionado o Jest devido ao projeto iniciar com TDD.
- Foi adicionado configuração no jest para mantermos os testes unitários trabalhando corretamente.
- Foi adicionado as configurações iniciais no tsconfig.
