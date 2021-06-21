const { getConnection } = require('./db');

async function addPatient(name, email) {
    let connection = await getConnection();
    try {
        const patients = await connection.query('INSERT INTO patients(name, email) VALUES (?, ?)', [name,email]);
        return patients;

    } catch (err) {
        throw err;
    } finally {
        if (connection) connection.close();
    }
}

module.exports = addPatient;