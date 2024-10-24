import { Telegraf, Markup } from 'telegraf';

const token = '7799548406:AAFI2RPxgGjXO42elfb4NTF6ZHXdNkYyxUw';
const webAppUrl = 'https://telegram-test-app-clicker.web.app';

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
  const startMessage = `Привет! Я бот, который поможет тебе отслеживать прогресс в нажатии на кнопки.`;
  const startButton = Markup.button.webApp(
    'Открыть приложение',
    `${webAppUrl}?ref=${ctx.payload}`
  );
  ctx.reply(startMessage, Markup.inlineKeyboard([startButton]));
});

bot.launch();
