// Instantiate Express Server
const express = require('express');
// Enable CORS
const cors = require('cors');
// Import all routes
const routerApi = require('./routes');
// Import error handlers middlewares
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.API_PORT || 3000;

// Enable JSON responses
app.use(express.json());

// For private API
const allowedlist = [
    'http://localhost:8080',
    'https://myapp.com',
];
const options = {
    origin: (origin, callback) => {
        if (allowedlist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('no permitido'));
        }
    }
}
// app.use(cors(options));

// For public API
app.use(cors());

app.get('/api/status', (req, res) => {
    res.send('ok');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

const pjson = require('../package.json');
app.listen(port, () => {
    console.log(`🧩 Running ${pjson.name} v${pjson.version} on port ${port}...`);
});