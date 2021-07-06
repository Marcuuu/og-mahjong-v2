require('dotenv').config()
const { Composer } = require('micro-bot');
const moment = require('moment');

const bot = new Composer;

bot.start(ctx => {
  ctx.reply('Bot has started');
});

bot.command('play', (ctx) => {
  const buttons = []
  let temp = []

  for (let i = 0; i < 6; i++) {
    const mod = i % 2
    const date = moment().add(i, 'days').format('DD MMM')
    const day = moment().add(i, 'days').format('dddd')
    temp.push({
      text: `${date}, ${day}`,
      callback_data: `day${i + 1}`,
    })
    if (mod === 1) {
      buttons.push(temp)
      temp = []
    }
  };

  ctx.telegram.sendMessage(ctx.chat.id, 'Select a date', {
    reply_markup: {
      inline_keyboard: buttons,
    },
  })
});

bot.on('callback_query', ctx => {
  ctx.telegram.answerCbQuery(ctx.callbackQuery.id)
});

bot.catch(err => {
  console.log('Encountered an error', err);
});

// bot.launch();
module.exports = bot;

// aqueous-escarpment-44756
// https://aqueous-escarpment-44756.herokuapp.com/