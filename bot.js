import { Bot, Keyboard } from "grammy";
import { Menu } from "@grammyjs/menu"
import { config } from "dotenv";
import { setUpDb, pool as db } from './db.js';
import otp from 'otp-generator';

config()


const bot = new Bot(process.env.BOT_TOKEN);


const menu = new Menu('my-menu-identifier')
  .text('A', ctx => ctx.reply('You pressed A!')).row()
  .text('B', ctx => ctx.reply('You pressed B!'))


const keyboard = new Keyboard()
  .requestContact("📱 Kontaktni yuborish")
  .resized()

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


bot.hears("create pg table", async (ctx) => {
  setUpDb()
  console.log(ctx.update.message)
  ctx.reply(`table creates`)

});
// bot.on("::phone_number", (ctx) => {
//   console.log(ctx.update.message)
// });
// 
bot.on("message:contact", async (ctx) => {
  // await bot.api.sendMessage(540152508, "Assalomu alaykum")
  const OTP = otp.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false
  })

  const quertString = `
  INSERT INTO otp (otp, phone_number)
  VALUES
  ($1, $2);
  `

  db.query(quertString, [OTP, ctx.update.message.contact.phone_number])

  ctx.reply(`OTP  ${OTP}`)
});
bot.catch(err => {
  console.log(err)
})

bot.start();
