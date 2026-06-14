# Fidev Bot

A lightweight, efficient, and fun Slack bot designed to enhance workspace productivity and team engagement. Built with **Node.js** and the **Slack Bolt Framework**, Fidev Bot provides a suite of useful slash commands and an interactive dashboard.

---

## Key Features

### Productivity & Utilities
- **`/fidev-ping`**: Check the bot's status and response latency.
- **`/fidev-echo [message]`**: Repeats your message—great for testing formatting.
- **`/fidev-help`**: Displays a neatly organized list of all available commands.

### Team Engagement
- **`/fidev-joke`**: Delivers a random developer joke to keep the mood light.
- **`/fidev-catfact`**: Shares interesting facts about cats for a quick mental break.
- **`/fidev-quote`**: Provides inspirational quotes to keep the team motivated.

### App Home Dashboard
Fidev Bot features a custom **App Home** within Slack. Whenever a user opens the bot's home tab, they are greeted with a structured dashboard showcasing all available commands and how to use them.

### Static Landing Page
The project includes a clean, responsive landing page in the `public/` directory, perfect for showcasing the bot to your team or as a base for a future web dashboard.

---

## How I Made It

Fidev Bot was designed with simplicity and performance in mind:

1.  **Framework**: Built on the **@slack/bolt** framework, which simplifies handling Slack events and commands.
2.  **Connection**: Uses **Slack Socket Mode**, allowing the bot to run behind firewalls or on local machines without needing a public HTTP endpoint or complicated proxy setup.
3.  **External APIs**: Integrated with several public APIs to fetch real-time content:
    - **Official Joke API** for the humor.
    - **CatFact Ninja API** for the trivia.
    - **ZenQuotes API** for daily inspiration.
4.  **Frontend**: Crafted a minimalist landing page using **Vanilla HTML5 and CSS3** to ensure zero dependencies and lightning-fast load times.

---

## Getting Started

### Prerequisites
- **Node.js** (v18+)
- A **Slack App** configured in the [Slack API Dashboard](https://api.slack.com/apps).

### 1. Installation
```bash
# Clone the repository
git clone https://github.com/rafif2112/slack-bot.git
cd slack-bot

# Install dependencies
npm install
```

### 2. Configuration
Create a `.env` file in the root directory and add your Slack credentials:
```env
SLACK_BOT_TOKEN=xoxb-your-bot-token
SLACK_APP_TOKEN=xapp-your-app-token
```

### 3. Run the Bot
```bash
node index.js
```
The bot will connect via Socket Mode and respond with:
`Bot is running with a structured UI!`

---

## Preview

### Interactive Help Menu
![Slack Help Command](https://via.placeholder.com/600x300?text=Slack+/fidev-help+Preview)

### Landing Page
![Landing Page](https://via.placeholder.com/600x300?text=Static+Landing+Page+Preview)

---

## Author
**Muhamad Rafif**  
*Built with passion for the Hack Club community.*

---

## License
This project is licensed under the ISC License.
