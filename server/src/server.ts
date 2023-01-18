//backend ApiRest || RESTfull
//Vamos usar o Fastify pois o mesmo é mais performatico que o express

import Fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

//aqui criamos o fastify e o prisma
const app = Fastify();
const prisma = new PrismaClient();

//registrando o cors para o front acessar a api
app.register(cors, {
    origin: ['http://localhost:3000'],
});

//rota http
app.get('/', async () => {
    //Aqui eu pego a tabela que foi criada no prisma e retorno ela na rota.
    const habitos = await prisma.habitos.findMany({});
    return habitos;
});

//porta para rodar a aplicação
app.listen({
    port: 3333,
}).then(() => {
    console.log('Backend iniciado!');
});
