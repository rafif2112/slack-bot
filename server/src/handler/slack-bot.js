require("dotenv").config();
const { App } = require("@slack/bolt");
const slackService = require("../services/slack-bot.service");

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true
});

const commands = [
    {
        command: "/fidev-ping",
        description: "Check bot latency",
        handler: async ({ ack, respond }) => {
            await ack();
            const result = await slackService.ping();
            await respond({ text: `${result.message}\nLatency: ${result.latency}` });
        }
    },
    {
        command: "/fidev-catfact",
        description: "Get a random cat fact",
        handler: async ({ ack, respond }) => {
            await ack();
            try {
                const result = await slackService.getCatFact();
                await respond({ text: `Cat Fact:\n${result.fact}` });
            } catch {
                await respond({ text: "Failed to fetch cat fact. Please try again later." });
            }
        }
    },
    {
        command: "/fidev-joke",
        description: "Get a random joke",
        handler: async ({ ack, respond }) => {
            await ack();
            try {
                const result = await slackService.getRandomJoke();
                await respond({ text: result.joke });
            } catch {
                await respond({ text: "Failed to fetch a joke." });
            }
        }
    },
    {
        command: "/fidev-hello",
        description: "Say hello to the bot",
        handler: async ({ command, ack, respond }) => {
            await ack();
            const result = await slackService.sayHello(command.user_id);
            await respond({ text: result.message });
        }
    },
    {
        command: "/fidev-echo",
        description: "Echo back your message",
        handler: async ({ command, ack, respond }) => {
            await ack();
            const result = await slackService.echo(command.text);
            await respond({ text: `You said: ${result.echo}` });
        }
    },
    {
        command: "/fidev-quote",
        description: "Get a random inspirational quote",
        handler: async ({ ack, respond }) => {
            await ack();
            try {
                const result = await slackService.getQuote();
                await respond({ text: result.quote });
            } catch {
                await respond({ text: "Failed to fetch a quote." });
            }
        }
    }
];

commands.forEach(cmd => app.command(cmd.command, cmd.handler));

app.command("/fidev-help", async ({ ack, respond }) => {
    await ack();
    const blocks = [
        { type: "section", text: { type: "mrkdwn", text: "*Available Commands:*" } },
        { type: "divider" },
        ...commands.map(cmd => ({
            type: "section",
            text: { type: "mrkdwn", text: `*${cmd.command}*\n${cmd.description}` }
        }))
    ];
    await respond({ blocks });
});

module.exports = app;