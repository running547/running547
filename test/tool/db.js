const mysql = require('mysql')
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'deity99547',
  database: 'project2018'
})

class Db {
  static getInstance() {

    if (!Db.instance) {
      Db.instance = new Db();
    }
    return Db.instance;
  }
  constructor() {
    this.dbClient = '';
    this.connect();
  }
  connect() {
    let _that = this;
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err)
        } else {
          resolve(connection)
        }
      })
    })
  }
  query(sql, values) {
    return new Promise((resolve, reject) => {
      this.connect().then((db) => {
        db.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          db.release()
        })
      })
    })
  }
}

module.exports = Db.getInstance();
































// let query = function (sql, values) {
//   return new Promise((resolve, reject) => {
//     pool.getConnection(function (err, connection) {
//       if (err) {
//         reject(err)
//       } else {
//         connection.query(sql, values, (err, rows) => {

//           if (err) {
//             reject("账号密码错误")
//           } else {
//             resolve(rows)
//           }
//           connection.release()
//         })
//       }
//     })
//   })
// }

// module.exports = { query }
