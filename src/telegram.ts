export function Telegram(token: string, chat_id: string) {
  async function send(message: string) {
    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    const payload = {
      chat_id,
      text: message,
    };
  
    const res = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  
    if (!res.ok) {
      console.error("❌ Error sending message to Telegram:", res.statusText);
    }
  }
  return {
    send,
  }
}