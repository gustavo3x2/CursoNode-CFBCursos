const http = require('http')
const fs = require('fs')
const porta = process.env.PORTA 

const server = http.createServer((req,res)=>{
  fs.appendFile('text.txt','Curso de Node - CFB Cursos',(err)=>{
    if(err)throw err
    console.log('Arquivo criado')
    res.end()
  })
})

server.listen(porta || 3000,()=>{console.log('✔ Servidor Rodando')})