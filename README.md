#Hello JS - Room Management System

Este projeto consiste em um backend bem simples para um serviço de reservas de salas em uma organização.

## Requisitos

- [NodeJS e NPM (>= 7.2.1)](https://nodejs.org/en/) instalados em sua máquina.

## Configuração

Instale o [knex](http://knexjs.org)
> $ npm install -g knex

Instale as dependências do projeto
> $ npm install

Rode as migrações
> $ knex migrate:latest

Popule o banco com informações de teste (opcional)
> $ knex seed:run --env development
