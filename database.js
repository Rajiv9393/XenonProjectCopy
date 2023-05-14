const mysql = require('mysql');

const pool=mysql.createPool({
    host: 'localhost',
    user: 'Rajiv',
    password: 'rajiv20',
    port :3306,
    database: "projectxenon",
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})
module.exports=pool
