import { Bot, InlineKeyboard, Keyboard } from "grammy";
import { Menu } from "@grammyjs/menu"

import { config } from "dotenv";

config()


const bot = new Bot(process.env.BOT_TOKEN);


const menu = new Menu('my-menu-identifier')
  .text('A', ctx => ctx.reply('You pressed A!')).row()
  .text('B', ctx => ctx.reply('You pressed B!'))

// const keyboard = new InlineKeyboard()
//   .text('A').text('B', 'callback-data').row()
//   .text('C').text('D').row()
//   .url('Telegram', 'telegram.org')

const keyboard = new Keyboard()
  .requestContact("📱 Kontaktni yuborish")
// .resized();


bot.use(menu)

bot.command("start", (ctx) => {
  console.log(ctx.update.message)
  ctx.reply(`
    Salom ${ctx.update.message.from.first_name} 👋
@node_n11_bot ning rasmiy botiga xush kelibsiz

⬇ Kontaktingizni yuboring (tugmani bosib)
  `, {
    reply_markup: keyboard,

  })
});



// bot.on("::phone_number", (ctx) => {
//   console.log(ctx.update.message)
// });
// 


bot.on("message:contact", async (ctx) => {
  await bot.api.sendMessage(540152508, "Assalomu alaykum")
  console.log(ctx.update.message.contact,)
  ctx.reply("Got another message!", {
    // reply_parameters: true
    force_reply: true
  })
});


bot.start();