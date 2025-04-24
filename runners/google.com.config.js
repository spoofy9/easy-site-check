module.exports = {
  apps: [
    {
      name: 'track - google.com',
      script: './src/index.ts',
      interpreter: 'bun',
      watch: false,
      restart_delay: 60000,
      env: {
        SITE: 'https://google.com',
        TELEGRAM_TOKEN: '123:abc',
        TELEGRAM_CHAT_ID: 123
      },
    },
  ],
};