const mysql = require('mysql2');



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'treinamento'
});

connection.connect( function (err){
    console.log("conexão feita")
});

connection.query("select id, nome, email from teste", function(err, rows, fields){
    if(!err){
        console.log("Resultado", rows);

    }else
        console.log('Erro: Consulta não realizada com sucesso');
});

