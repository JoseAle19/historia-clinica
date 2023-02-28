const express = require("express");
const app = express();

app.use('/api/users', require('./routes/user.routes' ));
app.use('/api/clinicalSheet', require('./routes/clinicalSheet.routes' ));
app.use('/api/patient', require('./routes/patient.routes' ));
app.use('/api/pediatrics', require('./routes/pediatrics.routes' ));
app.use('/api/generaldata', require('./routes/generalData.routes' ));
app.use('/api/disease', require('./routes/disease.routes' ));
app.use('/api/personalHistory', require('./routes/personalHistory.routes' ));
app.use('/api/physicalExam', require('./routes/physicalExam.routes' ));

module.exports = app;