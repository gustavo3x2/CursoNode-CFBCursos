const mongodb = require('mongodb').MongoClient
const url = "mongodb+srv://capexoto:96962606@cluster0.dbnts.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongodb.connect(url,(erro,banco)=>{
  if(erro)throw erro
  const dbo =  banco.db("cfbcursos")
  const obj = {curso:"Curso de HTML",canal:"CFB Cursos"}
  const colecao = "cursos"

  //inserir no banco
  /*dbo.collection(colecao).insertOne(obj,(erro,resultado)=>{
    if(erro)throw erro
    console.log("1 novo cuso inserido")
    //banco.close()
  })*/

  //Encontrar conteudo
 /* dbo.collection(colecao).find({canal: 'CFB Cursos'},{projection:{_id:0}}).toArray((erro,resultado)=>{
    if(erro)throw erro
    console.log(resultado[0].curso)
    banco.close()
  })*/

  //Encontrar conteudo usando Query
  /*const query = {}
  dbo.collection(colecao).find(query,{projection:{_id:0}}).toArray((erro,resultado)=>{
    if(erro)throw erro
    console.log(resultado)
    banco.close()
  })*/

  //Sort ordena em ordem alfabetica 
  const ordenacao = {curso:1}
  const query = {}
  dbo.collection(colecao).find(query).sort(ordenacao).toArray((erro,resultado)=>{
    if(erro)throw erro
    console.log(resultado)
    banco.close()
  })
})