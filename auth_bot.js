import { Bot, session } from "grammy";
import dotenv from "dotenv";
import { conversations, createConversation } from "@grammyjs/conversations";

dotenv.config();

const users = [];

const bot = new Bot(process.env.BOT_TOKEN);

//middlewared
bot.use(session({ initial: () => ({}) }));
bot.use(conversations());
bot.use(createConversation(greeting));
bot.use(createConversation(movie));

await bot.api.setMyCommands([
  { command: "start", description: "Start the bot" },
  { command: "signup", description: "user sign up command" },
  { command: "signin", description: "user sign in command" },
  { command: "getme", description: "get user data" },
]);

async function greeting(conversation, ctx) {
  await ctx.reply("Hi there! What is your name?");
  const { message } = await conversation.wait();
  await ctx.reply(`Welcome to the chat, ${message.text}!`);
  await ctx.conversation.end();
}

async function movie(conversation, ctx) {
  await ctx.reply("How many favorite movies do you have?");
  const count = await conversation.form.number();
  const movies = [];
 
  for (let i = 0; i < count; i++) {
    await ctx.reply(`Tell me number ${i + 1}!`);
    const titleCtx = await conversation.waitFor(":text");
    movies.push(titleCtx.msg.text);
  }

  await ctx.reply("Here is a better ranking!");
  movies.sort();
  await ctx.reply(movies.map((m, i) => `${i + 1}. ${m}`).join("\n"));
}

bot.command("start", async (ctx) => {
  await ctx.conversation.enter("greeting");
});

bot.command("movie", async (ctx) => {
  await ctx.conversation.enter("movie");
});
bot.command("signup", (ctx) => {
  const id = ctx.update.message.from.id;

  return ctx.reply("salom");
});

bot.start();
