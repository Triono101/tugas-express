const express = require('express');
const app = express();
const router = require('./routes');
const port = process.env.PORT || "4000";

// Module Router
app.use(router);

// Menangani Error 404
app.use((req, res) => {
    res.status(404);
    res.send({
        Status: 'Failed',
        Message: 'Resource ' + req.originalUrl + ' Not Found'
    });
});

// App Server
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });