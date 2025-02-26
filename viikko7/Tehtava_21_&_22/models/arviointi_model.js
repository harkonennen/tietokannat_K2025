const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from arviointi where idArviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (Opiskelija_idOpiskelija,Opintojakso_idOpintojakso,arvosana,päivämäärä) values(?,?,?,?)',
      [arviointi.Opiskelija_idOpiskelija, arviointi.Opintojakso_idOpintojakso, arviointi.arvosana, arviointi.päivämäärä],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where idArviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set Opiskelija_idOpiskelija=?,Opintojakso_idOpintojakso=?, arvosana=?, päivämäärä=? where idArviointi=?',
      [arviointi.Opiskelija_idOpiskelija, arviointi.Opintojakso_idOpintojakso, arviointi.arvosana, arviointi.päivämäärä, id],
      callback
    );
  }
};
module.exports = arviointi;