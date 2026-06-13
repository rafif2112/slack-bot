const axios = require('axios');

module.exports = {
    async ping(req, res) {
        const start = Date.now();
        const latency = Date.now() - start;
        res.json({ message: "Pong!", latency: `${latency}ms` });
    },

    async catFact(req, res) {
        try {
            const response = await axios.get("https://catfact.ninja/fact");
            res.json({ fact: response.data.fact });
        } catch (err) {
            res.status(500).json({ error: "Failed to fetch cat fact. Please try again later." });
        }
    },

    async getRandomJoke(req, res) {
        try {
            const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
            res.json({ joke: `${response.data.setup} ${response.data.punchline}` });
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch a joke." });
        }
    },

    async sayHello(req, res) {
        const userId = req.query.user_id || "there";
        res.json({ message: `Hello <@${userId}>! How can I help you today?` });
    },

    async echo(req, res) {
        const message = req.query.message || "";
        res.json({ echo: message });
    },

    async getQuotes(req, res) {
        try {
            const response = await axios.get("https://api.quotable.io/random");
            res.json({ quote: `${response.data.content} — ${response.data.author}` });
        } catch (error) {
            
        }
    }
}