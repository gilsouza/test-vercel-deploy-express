const express = require('express');
const app = express();
const transcribe = require('./transcribe');

app.use(express.json({ extended: false }));
app.use('/transcribe', transcribe);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Server is listening on port ' + PORT));
