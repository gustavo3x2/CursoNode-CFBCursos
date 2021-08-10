const mongodb = require('mongodb').MongoClient
const url = "mongodb+srv://capexoto:96962606@cluster0.dbnts.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongodb.connect(url,(erro,banco)=>{
  if(erro)throw erro
  const dbo =  banco.db("cfbcursos")
  //const obj = {curso:"Curso de HTML",canal:"CFB Cursos"}
  const colecao = "cursos"

  //inserir no banco
  /*dbo.collection(colecao).insertOne(obj,(erro,resultado)=>{
    if(erro)throw erro
    console.log("1 novo cuso inserido")
    //banco.close()
  })*/

  /*const obj = [
    {curso:"Curso de Javascript 2021",canal:"CFB Cursos"},
    {curso:"Curso de Javascript 2021",canal:"CFB Cursos"},
    {curso:"Curso de Javascript 2021",canal:"CFB Cursos"}
  ]
  dbo.collection(colecao).insertMany(obj,async(erro,resultado)=>{
    if(erro)throw erro
    await console.log(resultado.insertedCount +" novo(s) cuso(s) inserido(s)")
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
  /*const ordenacao = {curso:1}
  const query = {}
  dbo.collection(colecao).find(query).sort(ordenacao).toArray((erro,resultado)=>{
    if(erro)throw erro
    console.log(resultado)
    banco.close()
  })*/

  // Deletar objeto da coleção
  //let query = {curso: 'Curso de HTML'}

  /*dbo.collection(colecao).deleteOne(query, (erro,resultado)=>{
    if(erro)throw erro
    console.log('1 curso deletado')
  })*/

  // Delettar varios objetos da coleção
  /*let query = {curso:/.t/}

  dbo.collection(colecao).deleteMany(query,async (erro,resultado)=>{
    if(erro)throw erro
    await console.log(resultado.deletedCount + ' curso(s) deletado(s)')
  })*/

  // Mostrar a coleção
  /*query = {}
  dbo.collection(colecao).find(query,{projection:{_id:0}}).toArray((erro,resultado)=>{
    if(erro)throw erro
    console.log(resultado)
    banco.close()
  })*/

  // Atualização de um objetos

  //let query = {curso: 'Curso de Javascript'}
  //let novoObj = {$set:{curso:'Curso de Javascript 2021'}}
  /*dbo.collection(colecao).updateOne(query, novoObj, (erro,resultado)=>{
    if(erro)throw erro
    console.log('1 Curso atualizados')
    //banco.close()
  })*/

  // Atualizar varios objetos
  /*dbo.collection(colecao).updateMany(query, novoObj,async (erro,resultado)=>{
    if(erro)throw erro
    await console.log(resultado.modifiedCount +' Curso(s) atualizado(s)')
    //banco.close()
  })*/

  //Exibe colection limitado
  const query = {curso:/.t/}
  const limite = 5
  //query = {}
  dbo.collection(colecao).find(query,{projection:{_id:0}}).limit(limite).toArray((erro,resultado)=>{
    if(erro)throw erro
    console.log(resultado)
    banco.close()
  })


})