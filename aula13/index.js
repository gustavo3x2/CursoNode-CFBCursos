const mongodb = require('mongodb').MongoClient
const url = "mongodb+srv://capexoto:96962606@cluster0.dbnts.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongodb.connect(url,(erro,banco)=>{
  if(erro)throw erro
  const dbo =  banco.db("cfbcursos")
  const obj = {curso:"Curso de Javascript",canal:"CFB Cursos"}
  const colecao = "cursos"

  /*dbo.collection(colecao).insertOne(obj,(erro,resultado)=>{
    if(erro)throw erro
    console.log("1 novo cuso inserido")
    banco.close()
  })*/

  dbo.collection(colecao).find({canal: 'CFB Cursos'},{projection:{_id:0}}).toArray((erro,resultado)=>{
    if(erro)throw erro
    console.log(resultado[0])
    banco.close()
  })
})