const http = require('http')
const eventos = require('events')
const EventoEmissor = new eventos.EventEmitter()

const final = ()=>{console.log('fim do processo')}


EventoEmissor.on('msg',()=>{console.log('Curso de node')})
EventoEmissor.on('fim',final)


const porta = process.env.PORT || 3000
const retorno = ()=>{console.log('Servidor iniciado em http://localhost:3000')}
const servidor = http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/plain'})
  EventoEmissor.emit('msg')
  res.write('CFB Cursos')
  EventoEmissor.emit('fim')
  res.end()
})
servidor.listen(porta, retorno)