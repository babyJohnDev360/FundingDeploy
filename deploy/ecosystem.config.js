module.exports = {
  apps: [
    {
      name: 'mergefunding-backend',
      script: '/Users/bhushan/Desktop/MergeFunding/deploy/backend/main.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 4000
      }
    }
  ]
}; 