import { Bot, session } from "grammy";
import { config } from "dotenv";
config();

const bot = new Bot(process.env.BOT_TOKEN);
function initial() {
  return { pizzaCount: 0, currentMenu: "mainMenu" };
}
bot.use(session({ initial }));

await bot.api.setMyCommands([
  { command: "start", description: "Start the bot" },
  { command: "hunger", description: "Show pizza level count" },
  { command: "change", description: "change current menu" },
]);


bot.command("start", async (ctx) => {
  const count = ctx.session.pizzaCount;
  const menu = ctx.session.currentMenu;
  await ctx.reply(`Your hunger level is ${count} ${menu}`);
});

bot.command("hunger", async (ctx) => {
  const count = ctx.session.pizzaCount;
  const menu = ctx.session.currentMenu;
  await ctx.reply(`Your hunger level is ${count} ${menu}`);
});


bot.command("change", async (ctx) => {
  const count = ctx.session.pizzaCount;
  ctx.session.currentMenu = "courseMenu";
  await ctx.reply(`Your hunger level is ${count}!`);
});

bot.hears(/.*pizza.*/, (ctx) => ctx.session.pizzaCount++);

bot.start();
