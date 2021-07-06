require('dotenv').config()
const { Composer } = require('micro-bot');
const moment = require('moment');

const bot = new Composer;

bot.start(ctx => {
  ctx.reply('Bot has started');
});

// const dates = [];
// const days = [];

// for (let i = 0; i < 6; i++) {
//   const temp = [];
//   const date = moment().add(i, 'days').format('DD MMM');
//   const day = moment().add(i, 'days').format('dddd');
//   temp.push({
//     text: `${i + 1} - ${date}, ${day}\nPlayers: ${players}`,
//     callback_data: ''
//   });
//   console.log(temp)
// }

bot.command('play', (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    'Select a date',
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'hihi',
              callback_data: 'nono'
            }
          ]
        ]
      }
    }
  )
});

bot.hears('animals', ctx => {
  console.log(ctx.from);
  ctx.telegram.sendMessage(
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