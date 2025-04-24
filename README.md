# 🚀 Easy Site Checker

**Лёгкий инструмент для мониторинга доступности сайтов с уведомлениями в Telegram**  
Нужен только Bun + pm2


## 📌 Преимущества

- ✅ Простота: один файл — одна проверка
- 🔁 Автоматический перезапуск каждые 60 секунд
- 📲 Уведомления в Telegram без лишних сервисов

---

## ⚡ Быстрый запуск

Готовые скрипты находятся в `package.json`.

▶️ **Запуск проверки google.com:**
```bash
npm run track google.com
```

▶️ **Запуск проверки github.com:**
```bash
npm run track github.com
```

---

## ⚙️ Конфигурация сайтов

Конфигурационные файлы находятся в папке `runners/`.

Пример конфигурации (`google.com.config.js`):
```js
module.exports = {
  apps: [
    {
      name: 'EasySiteChecker - google.com',
      script: './src/index.ts',
      interpreter: 'bun',
      restart_delay: 60000, // перезапуск каждую минуту
      env: {
        SITE: 'https://google.com',
        TELEGRAM_TOKEN: 'ваш_токен / your_token',
        TELEGRAM_CHAT_ID: 'ваш_чат_ID / your_chat_id'
      },
    },
  ],
};
```

