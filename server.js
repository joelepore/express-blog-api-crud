// Express
const express = require('express');
const errorsHandler = require('./middlewares/errorsHandler');
const notFound = require('./middlewares/notFound');
const postsRouter = require('./routers/posts');

const app = express();
const port = 3000;

// Imposto il body parser json
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`<h1>Server del mio blog</h1>`)
})

app.use('/posts', postsRouter);

// Error handlers
app.use(errorsHandler);
app.use(notFound);

app.listen(port, () => console.log(`Listening on port ${port}`));