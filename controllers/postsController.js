const posts = require('../data/posts');

const index = (req, res) => {
  res.json(posts);
}

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(post => post.id === id) ?? { result: 'Post not found' };
  res.json(post);
}

const store = (req, res) => {
  res.send(`Rotta STORE: creo un nuovo post`);
}

const update = (req, res) => {
  res.send(`Rotta UPDATE: modifico interamente il post con id ${req.params.id}`);
}

const modify = (req, res) => {
  res.send(`Rotta MODIFY: modifico parzialmente il post con id ${req.params.id}`);
}

const destroy = (req, res) => {
  res.send(`Rotta DESTROY: elimino il post con id ${req.params.id}`);
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}