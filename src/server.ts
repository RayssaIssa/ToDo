import dotenv from "dotenv"
dotenv.config()      // Carrega variáveis de ambiente do arquivo .env

const PORT : number = parseInt(`${process.env.PORT}`)     

import app from "./app.js"      // Importando o app do arquivo app.ts

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))  