const posts = require('../data/posts');

const index = (req, res) => {
  let filteredPosts = posts;

  if (req.query.tag) {
    filteredPosts = filteredPosts.filter(post => post.tags.includes(req.query.tag));
  }
  res.json(filteredPosts);
}

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(post => post.id === id);

  if (!post) {
    res.status(404).json({
      message: 'Post not found',
      status: 404,
      error: 'Not Found'
    });
  } else {
    res.json(post);
  }
}

const store = (req, res) => {
  const newId = posts.at(-1).id + 1;
  const newPost = {
    id: newId,
    ...req.body
  }
  posts.push(newPost);
  res.status(201).json(posts);
}

const update = (req, res) => {
  res.send(`Rotta UPDATE: modifico interamente il post con id ${req.params.id}`);
}

const modify = (req, res) => {
  res.send(`Rotta MODIFY: modifico parzialmente il post con id ${req.params.id}`);
}

const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex(post => post.id === id);

  if (postIndex > -1) {
    posts.splice(postIndex, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({
      message: 'Post not found',
      status: 404,
      error: 'Not Found'
    })
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}