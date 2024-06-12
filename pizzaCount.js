import { Bot, session, Keyboard } from "grammy";
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
const phoneKeyboard = new Keyboard()
  .text("Samsung")
  .text("Nothing")
  .row()
  .text("Xiomi")
  .text("Iphone")
  .row()
  .text("Orqaga");
const samsungPhoneKeyboard = new Keyboard()
  .text("Samsung 21")
  .text("Samsung 41")
  .row()
  .text("Samsung 12")
  .text("Samsung 44")
  .row()
  .text("Orqaga");
const mainKeyboard = new Keyboard()
  .text("Telefonlar")
  .text("Laptoplar")
  .row()
  .text("Dilbuzar")
  .text("Texnik");

bot.command("start", async (ctx) => {
  await ctx.reply("Here is your main keyboard!", {
    reply_markup: mainKeyboard,
  });
});

bot.command("phone", async (ctx) => {
  await ctx.reply("Here is your Phones keyboard!", {
    reply_markup: phoneKeyboard,
  });
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

bot.hears("Telefonlar", async (ctx) => {
  ctx.session.currentMenu = "Telefonlar";

  await ctx.reply("Here is your Phones keyboard!", {
    reply_markup: phoneKeyboard,
  });
});

bot.hears("Samsung", async (ctx) => {
  ctx.session.currentMenu = "Samsung";
  await ctx.reply("Here is your Sumsung Phones keyboard!", {
    reply_markup: samsungPhoneKeyboard,
  });
});

bot.hears("Orqaga", async (ctx) => {
  const currentMenu = ctx.session.currentMenu;
  console.log({ currentMenu });
  if (["Telefonlar", "Dilbuzar", "Laptoplar", "Texnik"].includes(currentMenu)) {
    ctx.session.currentMenu = "mainMenu";

    return await ctx.reply("Here is your main keyboard!", {
      reply_markup: mainKeyboard,
    });
  } else if (["Samsung", "Nothing", "Xiomi", "Iphone"].includes(currentMenu)) {
    ctx.session.currentMenu = "Telefonlar";
    return await ctx.reply("Here is your main keyboard!", {
      reply_markup: phoneKeyboard,
    });
  }
  await ctx.reply("Here is your Phones keyboard!", {
    reply_markup: phoneKeyboard,
  });
});

bot.start();
