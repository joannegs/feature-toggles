# prove of concept: toggle features

O projeto foi desenvolvido como uma Prova de Conceito para demonstrar o funcionamento das chamadas *toggle features*, uma técnica de desenvolvimento de software que permite ativar ou desativar funcionalidades em um sistema sem a necessidade de uma nova implantação ou atualização de software. Essa técnica ajuda a reduzir o risco de falhas e permite que os desenvolvedores testem novos recursos em um ambiente controlado antes de torná-los disponíveis para todos os usuários. 

Esse projeto demonstração também conta com outra técnica muito utilizada atualmente: o *dark launch*, uma maneira de lançar novas funcionalidades sem que elas sejam expostas a todos os usuários, até que sejam testadas e aprovadas para serem lançadas oficialmente.

Ambas as técnicas são de grande importância em projeto que têm entrega contínua e permitem que desenvolvedores possam implementar novas funcionalidades de forma mais segura e com menor impacto no usuário final.


## sobre o projeto 
O backend foi desenvolvido em Node.js e TypeScript, e é responsável por enviar o estado das *toggles* para o front-end, desenvolvido em Angular. Quando o usuário acessa o front-end, o estado das *toggles* é carregado e as funcionalidades são exibidas ou ocultadas de acordo com o estado atual das toggles.

A funcionalidade "Find your shade" só está disponível para usuários cujo e-mail termina com "@gmail.com" graças ao recurso de *dark launch*. Isso significa que, embora a funcionalidade esteja disponível no back-end, ela não será exibida para todos os usuários. A verificação do e-mail do usuário é feita no back-end, e essa informação é enviada ao front quando solicitada, de forma que apenas um grupo dos usuários totais terá acesso. 

O design utilizado foi encontrado no Figma Comunity: [Beauty E-commerce web design – Figma](https://www.figma.com/community/file/1109103056378384650)

![image](https://user-images.githubusercontent.com/36765523/236732054-437e2795-0264-46f0-a22b-26ccfa0e9494.png)

## configuração e execução
1. Após clonar o repositório, crie um arquivo *.env* na pasta *server*, com as seguintes variáveis:
```
    PORT = 3000
    TYPEORM_MIGRATIONS_DIR = /src/database/migrations/*.{js,ts}
    TYPEORM_ENTITIES_DIR = /src/database/entities/*.{js,ts}
```
2. Instale as dependências tanto do fornt quanto do back com o *npm install*.
3. Inicie o back-end com o comando *npm run start* e logo depois faça o mesmo com o front-end. 

## uso

1.  Acesse o endereço `http://localhost:4200` em seu navegador.
2.  Você verá uma tela de login. Insira um dos [emails pré-cadastrados](https://github.com/joannegs/feature-toggles/blob/master/server/src/database/migrations/1677735705328-SeedUsers.ts) no banco de dados e faça login. A senha de qualquer usuário é *password*.
3.  Dependendo dos *toggle features* que estão configurados, você verá diferentes funcionalidades na aplicação. 
   
 ##

[Joanne Silva | LinkedIn](https://www.linkedin.com/in/joanne-silva-485077160/)

