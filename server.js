// Express
const express = require('express');
const app = express();
const port = 3000;
// Routers
const postsRouter = require('./routers/posts');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`<h1>Server del mio blog</h1>`)
})

app.use('/posts', postsRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));