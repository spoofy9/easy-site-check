module.exports = {
  apps: [
    {
      name: 'track - github.com',
      script: './src/index.ts',
      interpreter: 'bun',
      watch: false,
      restart_delay: 60000,
      env: {
        SITE: 'https://github.com',
        TELEGRAM_TOKEN: '123:abc',
        TELEGRAM_CHAT_ID: 123
      },
    },
  ],
};