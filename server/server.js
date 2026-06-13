require('dotenv').config();
const app = require('./src/app');
const slackBot = require('./src/handler/slack-bot');

const PORT = process.env.PORT || 3000;

(async () => {
    try {
        await slackBot.start();
        console.log('⚡️ Slack Bot is running!');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
    }
})();