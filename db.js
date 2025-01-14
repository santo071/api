// "Banco de dados" em memória
const produto = [
    { id: 1, nome: 'Produto 1', quantidade: 10, preco: 100.00 },
    { id: 2, nome: 'Produto 2', quantidade: 5, preco: 50.00 },
];

//Criando uma função .  padrão básico: function nome_da_funcao(){ return dado_a_ser_retornado}
function listaProduto(){
    return produto;
}

//Criando uma função .  padrão básico: function nome_da_funcao(){ return dado_a_ser_retornado}
function listaProduto(id){
return produto.find(c => c.id == id);
}
//função para inserir um cliente novo
function insereProduto(produtos){
produto.push(produtos);
}

function alteraProduto(id,dadosproduto){
const produtonovo =  produto.find(c => c.id == id);
if (produtonovo){
produtonovo.nome =  dadosproduto.nome;
produtonovo.quantidade = dadosproduto.quantidade;
} else {
    return("Deu ruim!");
}    
}

function removeProduto(id){
const indice = produto.findIndex(c => c.id == id);
produto.splice(indice,1);
}

//comando para que a função seja acessivel de fora do arquivo db.js
module.exports = {
listaProduto,
listaProduto,
insereProduto,
alteraProduto,
removeProduto
}
