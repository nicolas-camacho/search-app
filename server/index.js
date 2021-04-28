const express = require('express');
const PORT = 8080;

let items = require('./items');

let app = express();
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`its alive on http://localhost:${PORT}`));

app.use('/api/items', items);