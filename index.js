require('dotenv').config();
const { App } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN
});

// Listens to incoming messages that contain "hello"
app.message('大島さん', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say(`児島だよ!`);
  });
app.message('児島さん', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say(`そうだよ!`);
  });

  
  (async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);
  
    console.log('⚡️ Bolt app is running!');
  })();
