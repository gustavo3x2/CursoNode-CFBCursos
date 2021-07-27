const conectar = async () => {
  if (global.conexao && global.conexao.state != 'disconected')
    return global.conexao
  const mysql =  require('mysql2/promise')
  const con = mysql.createConnection("mysql://root:96962606@localhost:3306/cfbcursos")
  console.log('Conectado ao Banco')
  global.conexao = con
  return con
}

const todosClientes = async()=>{
  const con = await conectar()
  const [tables] = await con.query('SELECT * FROM cliente_node')
  return await tables
}

const insertClientes = async(cliente)=>{
  const con = await conectar()
  const sql ='INSERT INTO cliente_node (nome, idade) VALUES (?,?)'
  const valores = [cliente.nome, cliente.idade]
  await con.query(sql,valores)
}
const atualizaClientes = async(id,cliente)=>{
  const con = await conectar()
  const sql ='UPDATE cliente_node SET nome=?, idade=? WHERE id=?'
  const valores = [cliente.nome, cliente.idade,id]
  await con.query(sql,valores)
}
const deletarClientes = async(id)=>{
  const con = await conectar()
  const sql ='DELETE FROM cliente_node WHERE id=?'
  const valores = [id]
  await con.query(sql,valores)
}

module.exports = {todosClientes,insertClientes,atualizaClientes,deletarClientes}