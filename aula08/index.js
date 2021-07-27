(async () => {
  const db = require('./db')

  //Inserir Novo Cliente
  //console.log('Novo cliente inserido')
  //const nom = "Braztorgilsan"
  //const ida = 20
  //await db.insertClientes({nome:nom , idade:ida})

  //Atualizar cliente
  //const id = 3
  //const nom = "Brastorgilsan"
  //const ida = 38
  //await db.atualizaClientes(id,{nome:nom,idade:ida})
  //console.log('Cliente' + 'atualizado')

  const id = 3
  await db.deletarClientes(id)
  console.log('Cliente' + id + 'deletado')


  console.log('Obter todos os clientes')
  const clientes = await db.todosClientes()
  console.log(clientes)
})()