const express = require('express');
const router = express.Router();
const controller=require('../controller/controller')
const pers = require ("../controller/article.controller")

router.post('/register',controller.register);

router.post('/login',controller.login);
router.post('/profil',pers.create);
router.get('/profil',pers.findAll);
router.get('/profil/:profilId', pers.findOne);
router.get('/user/:photo_profil', pers.lireImage);

module.exports = router;