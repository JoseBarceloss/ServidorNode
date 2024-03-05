const [app, port] = require('./app');

app.listen(port, () => console.log(`server running on port ${port}!`));
