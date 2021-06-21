const {getAppointment, allTreatments} = require("../repositories/appointmentRepository");

async function searchAppointment(name) {
    const treatment = await getAppointment(name);
    delete treatment.meta;
    return treatment;
}

async function listAllTreatments() {
    const treatment = await allTreatments();
    delete treatment.meta;
    return treatment;
}

module.exports = {searchAppointment, listAllTreatments};
