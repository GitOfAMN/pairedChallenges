const express = require('express')
const router = express.Router()

// GET /api/blog
router.get('/', blogCtrl.index)
// GET /api/blog/:id
router.get('/:id', blogCtrl.show)
// PUT /api/blog
router.put('/blog', blogCtrl.put)

module.exports = router