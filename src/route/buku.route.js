const express = require('express');
const router = express.Router();
const bukuController = require('../controllers/buku.controller');

router.get('/', bukuController.getAllBuku);
router.post('/', bukuController.createBuku);
router.get('/:id', bukuController.getBukuById);
router.put('/:id', bukuController.updateBuku);
router.delete('/:id', bukuController.deleteBuku);


module.exports = router;



