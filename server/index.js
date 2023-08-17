require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT;
const route = require('./routes');
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(cors());

// ROUTES
//Use router
route(app);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
