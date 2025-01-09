const express = require('express');
const postsController = require('../controllers/postsController');
const postStoreValidator = require('../middlewares/validation/postStoreValidator');

const router = express.Router();

// Index
router.get('/', postsController.index);
// Show
router.get('/:id', postsController.show);
// Store
router.post('/', postStoreValidator, postsController.store);

// Update
router.put('/:id', postsController.update);

// Modify
router.patch('/:id', postsController.modify);

// Destroy
router.delete('/:id', postsController.destroy)

module.exports = router;