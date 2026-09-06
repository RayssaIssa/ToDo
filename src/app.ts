import express from "express";
import type {Request, Response, NextFunction} from "express";      // Importando o express e os tipos Resquest, Response e NextFunction do express, que são tipos de dados que representam a requisição, a resposta e a função de próximo middleware, respectivamente.
import morgan from "morgan";       // Importando o morgan, que é um middleware de logging para o express.
import helmet from "helmet";        // Importando o helmet, que é um middleware de segurança para o express.

const app = express();      

app.use(morgan("tiny"))     // Usando o morgan com o formato "tiny" para logar as requisições HTTP no console.

app.use(helmet())       // Usando o helmet para adicionar cabeçalhos de segurança às respostas HTTP.

app.use(express.json())    

/* Modelo de rota
   app.use("caminho", (req, res, next) => {res.send("resposta")})
   as funções de rota são funções que recebem três parâmetros: req, res e next. O req é o objeto de requisição, o res é o objeto de resposta e o next é uma função que chama o próximo middleware na cadeia de execução. As funções de rota podem ser usadas para manipular as requisições e respostas HTTP, como por exemplo, enviar uma resposta JSON ou redirecionar para outra rota.
   Exemplo de rota
   app.use("/test", (req: Request, res: Response, next: NextFunction) => {
      res.send("rota de teste")})
*/

app.use((req: Request, res: Response, next: NextFunction) => {
    res.send("Primeira rota")
})

// Função para tratamento de erros
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message)      // Envia uma resposta com status 500 e a mensagem de erro
})

export default app;