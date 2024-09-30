const db = require('../config/db');
const information = {
    save:(data, callback) => {
        const query = "insert into information (firstname, lastname, middlename,birthdate) values(?,?,?,?)";
        db.query(query, [data.firstname, data.lastname, data.middlename, data.birthdate], callback);
    },
    getAllInformation:(callback)=>{
        const query = "select * from information";
        db.query(query, callback);

    }
};
module.exports = information;