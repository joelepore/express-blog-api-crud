const postStoreValidator = (req, res, next) => {
  const post = req.body;
  if (!post.title || typeof post.title !== 'string') {
    return res.status(400).json({ error: 'Title is required and must be a string.' });
  }
  if (!post.slug || typeof post.slug !== 'string') {
    return res.status(400).json({ error: 'Slug is required and must be a string.' });
  }
  if (!post.content || typeof post.content !== 'string') {
    return res.status(400).json({ error: 'Content is required and must be a string.' });
  }
  if (!post.image || typeof post.image !== 'string') {
    return res.status(400).json({ error: 'Image is required and must be a string.' });
  }
  if (!post.tags || !Array.isArray(post.tags)) {
    return res.status(400).json({ error: 'Tags is required and must be an array.' });
  }
  next();
}

module.exports = postStoreValidator;