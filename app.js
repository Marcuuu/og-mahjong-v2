require('dotenv').config()
// const { Telegraf } = require('telegraf');
const { Composer } = require('micro-bot');

// const bot = new Telegraf(process.env.TOKEN);
const bot = new Composer;

bot.command('start', (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    'Hello there! Welcome to my new telegram bot.'
  );
});

bot.hears('animals', ctx => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    'You like animals?',
    {
      reply_markup: {
        one_time_keyboard: true,
        keyboard: [
          [{
            text: 'My location',
            request_location: true,
            one_time_keyboard: true
          }],
          ['Cancel']
        ]
      }
    }
  );
});

// bot.launch();
module.exports = bot;

// aqueous-escarpment-44756
// https://aqueous-escarpment-44756.herokuapp.com/