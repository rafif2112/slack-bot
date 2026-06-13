const axios = require("axios");

const slackService = {
    async ping() {
        const start = Date.now();
        const latency = Date.now() - start;
        return { message: "Pong!", latency: `${latency}ms` };
    },

    async getCatFact() {
        const response = await axios.get("https://catfact.ninja/fact");
        return { fact: response.data.fact };
    },

    async getRandomJoke() {
        const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
        return { joke: `${response.data.setup} ${response.data.punchline}` };
    },

    async sayHello(userId = "there") {
        return { message: `Hello <@${userId}>! How can I help you today?` };
    },

    async echo(message = "") {
        return { echo: message || "(nothing)" };
    },

    async getQuote() {
        const response = await axios.get("https://zenquotes.io/api/random");
        const quote = response.data[0];
        return { quote: `"${quote.q}" — ${quote.a}` };
    }
};

module.exports = slackService;