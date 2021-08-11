const mongodb = require('mongodb').MongoClient
const url = "mongodb+srv://capexoto:96962606@cluster0.dbnts.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongodb.connect(url,(erro,banco)=>{
  if(erro)throw erro
  const dbo =  banco.db("cfbcursos")
  const colecao1 = "cursos"
  const colecao2 = "detalhesCursos"

  //inserir no banco
  /*dbo.collection(colecao).insertOne(obj,(erro,resultado)=>{
    if(erro)throw erro
    console.log("1 novo cuso inserido")
    //banco.close()
  })*/

  /*let obj = [
    {idcurso:01,curso:"Curso de C++",canal:"CFB Cursos"},
    {idcurso:02,curso:"Curso de HTML",canal:"CFB Cursos"},
    {idcurso:03,curso:"Curso de CSS",canal:"CFB Cursos"},
    {idcurso:04,curso:"Curso de Javascript",canal:"CFB Cursos"},
    {idcurso:05,curso:"Curso de PHP",canal:"CFB Cursos"},
    {idcurso:06,curso:"Curso de Node",canal:"CFB Cursos"},
    {idcurso:07,curso:"Curso de React",canal:"CFB Cursos"},
    {idcurso:08,curso:"Curso de React-Native",canal:"CFB Cursos"},
    {idcurso:09,curso:"Curso de Arduino",canal:"CFB Cursos"},
    {idcurso:10,curso:"Curso de Photoshop",canal:"CFB Cursos"},
    {idcurso:11,curso:"Curso de AppInventor",canal:"CFB Cursos"},
    {idcurso:12,curso:"Curso de Flash",canal:"CFB Cursos"},
    {idcurso:13,curso:"Curso de Unity",canal:"CFB Cursos"},
    {idcurso:14,curso:"Curso de C#",canal:"CFB Cursos"},
    {idcurso:15,curso:"Curso de Java",canal:"CFB Cursos"},
    {idcurso:16,curso:"Curso de Qt Creator",canal:"CFB Cursos"},
    {idcurso:17,curso:"Curso de SQL",canal:"CFB Cursos"},
    {idcurso:18,curso:"Curso de Python",canal:"CFB Cursos"}
    
  ]
  dbo.collection(colecao1).insertMany(obj,async(erro,resultado)=>{
    if(erro)throw erro
    await console.log(resultado.insertedCount +" novo(s) cuso(s) inserido(s)")
    //banco.close()
  })

  obj=[
    {idcurso:01, aulas:192},
    {idcurso:02, aulas:264},
    {idcurso:03, aulas:77},
    {idcurso:04, aulas:122},
    {idcurso:05, aulas:50},
    {idcurso:06, aulas:21},
    {idcurso:07, aulas:45},
    {idcurso:08, aulas:46},
    {idcurso:09, aulas:75},
    {idcurso:10, aulas:30},
    {idcurso:11, aulas:48},
    {idcurso:12, aulas:60},
    {idcurso:13, aulas:44},
    {idcurso:14, aulas:132},
    {idcurso:15, aulas:51},
    {idcurso:16, aulas:89},
    {idcurso:17, aulas:42},
    {idcurso:18, aulas:86},
  
  ]
  dbo.collection(colecao2).insertMany(obj,async(erro,resultado)=>{
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
  /*let query = {curso:/c./}

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
  //const query = {curso:/.t/}
  //const limite = 5
  /*query = {}
  dbo.collection(colecao1).find(query,{projection:{_id:0}}).toArray((erro,resultado)=>{
    if(erro)throw erro
    console.log(resultado)
    //banco.close()
  })
  dbo.collection(colecao2).find(query,{projection:{_id:0}}).toArray((erro,resultado)=>{
    if(erro)throw erro
    console.log(resultado)
    banco.close()
  })*/
  // Juntar duas collections
  let query = {}
  dbo.collection(colecao1).aggregate([
    {
       $lookup:{
         from:'detalhesCursos',
         localField:'idcurso',
         foreignField:'idcurso',
         as:'Detalhes'
       }
    }
  ]).toArray((erro,resultado)=>{
    if(erro)throw erro
    console.log(JSON.stringify(resultado))
    banco.close()
  })

})