const conn = require('../config/connect')

module.exports = {
  getPattern: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM tb_pattern', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err)) 
        }
      })
    })
  },
  getPatternNow: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM tb_pattern WHERE status = 1 ',(err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err)) 
        }
      })
    })
  },
  insertPattern: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO tb_pattern SET ? ', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    }) 
  },
  updatePatternNow: (id_pattern) => {
    const data = 0
    const dataaktif = 1
    return new Promise((resolve, reject) => {
      conn.query('UPDATE tb_pattern SET status = ?', data, (err, result) => {
        conn.query('UPDATE tb_pattern SET status = ? WHERE id_pattern=?', [dataaktif, id_pattern], (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        } )
      })
    }) 
  },
}