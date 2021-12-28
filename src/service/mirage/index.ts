import { createServer, Model, Factory } from "miragejs";
import faker from "faker";


type User = {
  name: string;
  email: string;
  created_at: string;
}

export const makeServer = () => {
  const server = createServer({
    //models armazena dados no banco ficticio do mirage, cada propriedade equivale a uma tabela no banco
    models: {
      user: Model.extend<Partial<User>>({}) //Partial permite que user nao precise receber todos os tipos listados
    },
    //factories: gera dados em massa
    factories: {
      user: Factory.extend({
        name(index: number) {
          return `User ${index + 1}`
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        }
      })
    },
    //seeds: cria dados em menor quantidade que as factories
    seeds(server) {
      server.createList('user', 200);
    },
    routes(){
      this.namespace = 'api';
      this.timing = 750; //750 miliseg de delay para testar spiners e loadings.
      this.get('/users'); //retorna lista de usuarios dentro de models.user
      this.post('/users'); //cria a estrutura para criar um usuario

      this.namespace = '';
      this.passthrough()
    }
  })

  return server;
}