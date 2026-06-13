const express = require('express');
const router = express.Router();
const slackRoutes = require('./slack-bot.route');

router.use('/', slackRoutes);

module.exports = router;