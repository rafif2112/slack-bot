const express = require('express');
const router = express.Router();
const slackController = require('../controllers/slack-bot.controller');

router.get('/ping', slackController.ping);
router.get('/catfact', slackController.catFact);
router.get('/joke', slackController.getRandomJoke);
router.get('/hello', slackController.sayHello);
router.get('/echo', slackController.echo);
router.get('/quote', slackController.getQuotes);

module.exports = router;