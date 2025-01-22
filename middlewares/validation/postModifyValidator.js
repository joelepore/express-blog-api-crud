const postModifyValidator = (req, res, next) => {
  const post = req.body;
  let message = '';
  if (post.title && typeof post.title !== 'string') {
    message = 'Title must be a string';
  } else if (post.slug && typeof post.slug !== 'string') {
    message = 'Slug must be a string';
  } else if (post.content && typeof post.content !== 'string') {
    message = 'Content must be a string';
  } else if (post.image && typeof post.image !== 'string') {
    message = 'Image must be a string';
  } else if (post.tags && !Array.isArray(post.tags)) {
    message = 'Tags must be an array';
  }
  if (message !== '') {
    return res.status(400).json({ error: message });
  }
  next();
}

module.exports = postModifyValidator;