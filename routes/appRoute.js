const express = require('express');

const appRouter =  express.Router();

const userCtrl = require('./controllers/user');
const postCtrl = require('./controllers/post');

appRouter.get('/user', userCtrl.getAll);
appRouter.get('/posts', postCtrl.getAll);

appRouter.post('/user', userCtrl.create);
//appRouter.post('/posts', postCtrl.addPost);

module.exports = appRouter;
