# MergeFunding Deployment Guide

## Prerequisites
- Node.js (v14 or higher)
- NPM
- PM2
- Nginx
- MongoDB

## Server Setup

1. Install required software:
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js (this will install the latest LTS version)
brew install node

# Install PM2 globally
npm install -g pm2

# Install Nginx using Homebrew
brew install nginx

# Install MongoDB
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community
```

2. Create project directory
```bash
mkdir -p ~/mergefunding
cd ~/mergefunding

# Clone your repository
git clone https://github.com/babyJohnDev360/update.git .
```

3. Make the deployment script executable:
```bash
chmod +x deploy.sh
```

4. Run the deployment script:
```bash
./deploy.sh
```

5. Configure Nginx:
```bash
# Copy the nginx configuration
sudo cp nginx.conf /etc/nginx/sites-available/mergefunding
sudo ln -s /etc/nginx/sites-available/mergefunding /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

6. Start the backend with PM2:
```bash
pm2 start ecosystem.config.js
```

## Environment Variables

Create a `.env` file in the backend directory with the following variables:
```
NODE_ENV=production
MONGODB_URI=your_mongodb_uri
PORT=4000
JWT_SECRET=your_jwt_secret
```

## Updating the Deployment

To update the deployment:
```bash
# Navigate to project directory
cd ~/mergefunding

# Pull latest changes
git pull

# Rebuild and restart backend
cd mergefunding/backend
npm install
npm run build
pm2 restart mergefunding-backend

# Rebuild frontend
cd ../frontend
npm install
npm run build
```

## Monitoring

- Check PM2 status: `