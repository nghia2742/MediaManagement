const FileController = require('../app/controllers/fileController');
const express = require('express');

const router = express.Router();

router.get('/:folderName', FileController.index);
router.get('/', FileController.index);

// router.get('/classroom/:id?', auth, SiteController.classroom);

// router.get('/student', auth, SiteController.student);

// router.get('/teacher', auth, SiteController.teacher);

// router.get('/package', auth, SiteController.package);

// router.get('/lookup', auth, SiteController.lookup);

// router.get('/text', auth, SiteController.text);

module.exports = router;
