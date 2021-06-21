const searchAppointmentController = require('./controllers/searchAppointmentController');
const addPatientController = require('./controllers/addPatientController');
const listTreatmentsController = require('./controllers/listTreatmentsController');
const { createConnectionPool, closeConnectionPool } = require('./repositories/db');

const command = process.argv[2];
const value = process.argv[3];
const value2 = process.argv[4];

createConnectionPool().then(async () => {
  switch (command) {
    case 'search-appointment':
      await searchAppointmentController(value);
      break;
    case 'add-patient':
      await addPatientController(value,value2);
      break;
    case 'list-treatments':
      await listTreatmentsController();
      break;
    default:
      console.error('Unsupported command.');
  }

  closeConnectionPool().then(() => {
  });

});
