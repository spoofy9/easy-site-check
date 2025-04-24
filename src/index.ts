import { check } from "./checker";
import { Telegram } from "./telegram";

const site = Bun.env.SITE!;
const telegramToken = Bun.env.TELEGRAM_TOKEN!;
const telegramChatId = Bun.env.TELEGRAM_CHAT_ID!;
if (!site || !telegramToken || !telegramChatId) {
  console.error("Not all environment variables are set");
  process.exit(1);
}

(async()=> {
  const result = await check(site);
  if (!result.status) {
    const telegram = Telegram(telegramToken, telegramChatId);
    await telegram.send(`❌ Site down\n\nURL: ${site}\nResponse code: ${result.code}\nResponse time: ${result.time}ms\nDate: ${new Date().toLocaleString()}`);
  }
})();