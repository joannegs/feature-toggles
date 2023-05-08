# prove of concept: toggle features

O projeto foi desenvolvido como uma Prova de Conceito para demonstrar o funcionamento das chamadas *toggle features*, uma técnica de desenvolvimento de software que permite ativar ou desativar funcionalidades em um sistema sem a necessidade de uma nova implantação ou atualização de software. Essa técnica ajuda a reduzir o risco de falhas e permite que os desenvolvedores testem novos recursos em um ambiente controlado antes de torná-los disponíveis para todos os usuários. 

Esse projeto demonstração também conta com outra técnica muito utilizada atualmente: o *dark launch*, uma maneira de lançar novas funcionalidades sem que elas sejam expostas a todos os usuários, até que sejam testadas e aprovadas para serem lançadas oficialmente.

Ambas as técnicas são de grande importância em projeto que têm entrega contínua e permitem que desenvolvedores possam implementar novas funcionalidades de forma mais segura e com menor impacto no usuário final.


## sobre o projeto 
O backend foi desenvolvido em Node.js e TypeScript, e é responsável por enviar o estado das *toggles* para o front-end, desenvolvido em Angular. Quando o usuário acessa o front-end, o estado das *toggles* é carregado e as funcionalidades são exibidas ou ocultadas de acordo com o estado atual das toggles.

A funcionalidade "Find your shade" só está disponível para usuários cujo e-mail termina com "@gmail.com" graças ao recurso de *dark launch*. Isso significa que, embora a funcionalidade esteja disponível no back-end, ela não será exibida para todos os usuários. A verificação do e-mail do usuário é feita no back-end, e essa informação é enviada ao front quando solicitada, de forma que apenas um grupo dos usuários totais terá acesso. 



