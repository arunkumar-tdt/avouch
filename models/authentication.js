const postgresUtils = require("../utils/postgres");
const verifyUser = (selection, db) =>
  new Promise((resolve, reject) => {
    postgresUtils
      .findOne(selection, db, "prometheus_user_table")
      .then(response => resolve(response))
      .catch(error => {
        reject(error);
      });
  });
const createUser = (data, db) =>
  new Promise((resolve, reject) => {
    postgresUtils
      .insertMany([data], db, "prometheus_user_table")
      .then(response => {
        resolve({
          ...response,
          type: 200
        });
      })
      .catch(error => reject(error));
  });
const updateUser = (selection, data, db) =>
  new Promise((resolve, reject) => {
    postgresUtils
      .updateRecord(selection, data, db, "prometheus_user_table")
      .then(result => {
        resolve({
          ...result,
          type: 200
        });
      })
      .catch(error => {
        reject(error);
      });
  });


module.exports = Object.assign({}, {
  verifyUser,
  createUser,
  updateUser
});
