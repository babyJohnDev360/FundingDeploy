# Hostinger Deployment Guide

## Prerequisites
- Node.js (v14 or higher)
- NPM
- Git

## Deployment Steps

1. **Prepare Your Application**
   ```bash
   # Clone your repository
   git clone <your-repository-url>
   cd <your-project-directory>

   # Install dependencies and build
   npm run build:prod
   ```

2. **Upload to Hostinger**
   - Log in to your Hostinger control panel
   - Go to File Manager
   - Navigate to your domain's public_html directory
   - Upload the contents of the `dist` directory

3. **Configure Node.js on Hostinger**
   - In Hostinger control panel, go to "Advanced" → "Node.js"
   - Enable Node.js
   - Set the Node.js version to match your local version
   - Set the application path to your project directory
   - Set the application URL to your domain
   - Set the application startup file to `main.js`

4. **Environment Variables**
   Create a `.env` file in your project directory with the following variables:
   ```
   NODE_ENV=production
   MONGODB_URI=your_mongodb_connection_string
   PORT=3001
   JWT_SECRET=your_jwt_secret
   ```

5. **Start the Application**
   - In Hostinger control panel, go to "Advanced" → "Node.js"
   - Click "Start Application"

## Important Notes
- Make sure your MongoDB connection string is accessible from Hostinger's servers
- The application will run on the port specified in your environment variables
- You may need to configure your domain's DNS settings to point to your Hostinger server
- If you're using a custom domain, make sure to update the CORS settings in your backend

## Troubleshooting
- Check the Node.js logs in Hostinger control panel for any errors
- Ensure all environment variables are properly set
- Verify that your MongoDB connection is working
- Check if the port you're using is available on Hostinger 