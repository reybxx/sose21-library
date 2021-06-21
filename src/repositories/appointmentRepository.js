const { getConnection } = require('./db');

async function getAppointment(name) {
    let connection = await getConnection();
    try {
        const treatment = await connection.query(
            'SELECT appointments.date AS date, treatments.name AS treatments FROM treatments LEFT JOIN appointments ON treatments.id = appointments.treatments WHERE treatments.name = ? AND appointments.patients is null',
            [name]
        );
        return treatment;

    } catch (err) {
        throw err;
    } finally {
        if (connection) connection.close();
    }
}

async function allTreatments() {
    let connection = await getConnection();
    try {
        const alltreatments = await connection.query('SELECT * from treatments');
        return alltreatments;
    } catch (err) {
        throw err;
    } finally {
        if (connection) connection.close();
    }
}


module.exports = {getAppointment, allTreatments};