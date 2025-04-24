#!/bin/bash

# Create necessary directories
mkdir -p mergefunding/{frontend,backend}

# Clone the repository
git clone https://github.com/babyJohnDev360/update.git

# Move to the project directory
cd update

# Install backend dependencies
cd mergefunding/backend
npm install

# Build backend
npm run build

# Install frontend dependencies
cd ../frontend
npm install

# Build frontend
npm run build

# Create a production configuration file
cd ../backend
cat > .env << EOL
NODE_ENV=production
MONGODB_URI=mongodb+srv://babyjohndev360:bf1vUqEJ6ikoHK3r@cluster0.tegwg.mongodb.net/fundApp
PORT=4000
JWT_SECRET=your_jwt_secret
EOL

# Start the backend server
npm run start:prod 