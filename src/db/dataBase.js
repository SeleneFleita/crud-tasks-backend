const mysql2 = require('mysql2');

const connection = async () => {

    const connection = await mysql2.createConnection({
        host: "localhost",
        user: "root",
        database: "tasks_db",
    })

    return connection

}
module.exports = { connection }
if (connection) {
    console.log('se conectó correctamente a la base de datos');
  } else {
    console.error('fallo en conectar la base de datos:', error);
  }
