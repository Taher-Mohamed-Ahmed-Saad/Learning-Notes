const express = require('express');
const blogControllers = require('../controllers/blogController');

// like snall instance of the app
// must be created inside express app
const router = express.Router();

router.get('/', blogControllers.blog_index ); 
router.get('/create',blogControllers.blog_create_get );
router.get('/:id', blogControllers.blog_details );
router.post('/', blogControllers.blog_create_post);
router.delete('/:id',blogControllers.blog_delete );

module.exports = router;