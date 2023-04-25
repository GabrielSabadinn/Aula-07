const { resolveSoa } = require('dns');
const http = require('http');

const hostname = "127.0.0.1";
const port = 3000;
var mysql = require("mysql");

var conn = mysql.createConnection({
    host: "localhost" ,
    user: "root" ,
    password: "" ,
    database: "loja"
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');
    //res.end('Hello World');
    connect.connect(function (erro) {
        if(!erro){
            connect.query("SELECT * FROM tbl_produtos", function (err, result, fields) {
                if (!err){
                   // console.log(result);
                   res.end(result);
                }else{
                    //console.log(err);
                    resolveSoa.end( err );
                }
            })
        }
    })
});


server.listen(port, hostname, () => {
    console.log(`Servidor executado em: hhtp://${hostname}:${port}`)
})