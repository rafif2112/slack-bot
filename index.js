require("dotenv").config();

const { App } = require("@slack/bolt");
const axios = require("axios");

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true
});

const commands = [
    {
        command: "/text-ping",
        description: "Check bot latency",
        handler: async ({ command, ack, respond }) => {
            const start = Date.now();
            await ack();
            const latency = Date.now() - start;
            await respond({ text: `Pong!\nLatency: ${latency}ms` });
        }
    },
    {
        command: "/fifdev-catfact",
        description: "Get a random cat fact",
        handler: async ({ command, ack, respond }) => {
            await ack();
            try {
                const response = await axios.get("https://catfact.ninja/fact");
                await respond({ text: `Cat Fact:\n${response.data.fact}` });
            } catch (err) {
                await respond({ text: "Failed to fetch cat fact. Please try again later." });
            }
        }
    },
    {
        command: "/fifdev-joke",
        description: "Get a random joke",
        handler: async ({ command, ack, respond }) => {
            await ack();
            try {
                const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
                await respond({ text: `${response.data.setup} ${response.data.punchline}` });
            } catch (err) {
                await respond({ text: "Failed to fetch a joke." });
            }
        }
    },
    {
        command: "/hello",
        description: "Say hello to the bot",
        handler: async ({ command, ack, respond }) => {
            await ack();
            await respond({ text: `Hello <@${command.user_id}>! How can I help you today?` });
        }
    },
    {
        command: "/echo",
        description: "Echo back your message",
        handler: async ({ command, ack, respond }) => {
            await ack();
            await respond({ text: `You said: ${command.text || "(nothing)"}` });
        }
    },
    {
        command: "/quote",
        description: "Get a random inspirational quote",
        handler: async ({ command, ack, respond }) => {
            await ack();
            try {
                const response = await axios.get("https://zenquotes.io/api/random");
                const quote = response.data[0];
                await respond({ text: `"${quote.q}" - *${quote.a}*` });
            } catch (err) {
                await respond({ text: "Failed to fetch a quote." });
            }
        }
    }
];

commands.forEach(cmd => {
    app.command(cmd.command, cmd.handler);
});

app.command("/help", async ({ command, ack, respond }) => {
    await ack();
    
    const blocks = [
        {
            type: "section",
            text: {
                type: "mrkdwn",
                text: "*Available Commands:*"
            }
        },
        {
            type: "divider"
        }
    ];

    commands.forEach(cmd => {
        blocks.push({
            type: "section",
            text: {
                type: "mrkdwn",
                text: `*${cmd.command}*\n${cmd.description}`
            }
        });
    });

    await respond({ blocks });
});

app.event("app_home_opened", async ({ event, client }) => {
    try {
        const blocks = [
            {
                type: "header",
                text: {
                    type: "plain_text",
                    text: "Welcome to your Slack Bot Dashboard!",
                    emoji: true
                }
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "Here are all the commands you can use with this bot:"
                }
            },
            {
                type: "divider"
            }
        ];

        commands.forEach(cmd => {
            blocks.push({
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `*${cmd.command}*\n${cmd.description}`
                }
            });
        });

        await client.views.publish({
            user_id: event.user,
            view: {
                type: "home",
                blocks: blocks
            }
        });
    } catch (error) {
        console.error(error);
    }
});

(async () => {
    await app.start();
    console.log("⚡️ Bot is running with a structured UI!");
})();