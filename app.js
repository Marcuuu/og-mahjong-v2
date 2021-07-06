require('dotenv').config()
// const { Telegraf } = require('telegraf');
const { Composer } = require('micro-bot');

// const bot = new Telegraf(process.env.TOKEN);
const bot = new Composer;

bot.start(ctx => {
  ctx.reply('Bot has started');
});

bot.command('play', (ctx) => {
  console.log(ctx.from);
  ctx.reply('hihi')
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