const express = require('express');
const postsController = require('../controllers/postsController');
const postStoreValidator = require('../middlewares/validation/postStoreValidator');
const postUpdateValidator = require('../middlewares/validation/postUpdateValidator');
const postModifyValidator = require('../middlewares/validation/postModifyValidator');

const router = express.Router();

// Index
router.get('/', postsController.index);
// Show
router.get('/:id', postsController.show);
// Store
router.post('/', postStoreValidator, postsController.store);

// Update
router.put('/:id', postUpdateValidator, postsController.update);

// Modify
router.patch('/:id', postModifyValidator, postsController.modify);

// Destroy
router.delete('/:id', postsController.destroy)

module.exports = router;