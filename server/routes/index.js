const fileRouter = require('./file')

function route(app) {
    
    app.use('/api', fileRouter);
    
    app.use('/', (req, res) => {
        res.send('hello')
    });
}

module.exports = route;
