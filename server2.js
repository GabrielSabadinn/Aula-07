const { connect } = require("http2");
var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost" ,
    user: "root" ,
    password: "" ,
    database: "loja"
});

connect.connect(function (erro) {
    if(!erro){
        connect.query("SELECT * FROM tbl_produtos", function (err, result, fields) {
            if (!err){
                console.log(result)
            }else{
                console.log(err);
            }
        })
    }
})