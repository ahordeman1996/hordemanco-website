const Client = require('ssh2-sftp-client');
const path = require('path');
require('dotenv').config();

const config = {
  host: process.env.CLOUDWAYS_IP,
  port: 22,
  username: process.env.CLOUDWAYS_USER,
  password: process.env.CLOUDWAYS_PASSWORD,
};

// The remote path where your application lives (e.g., /home/master/applications/YOUR_APP_NAME/public_html)
// Update this with your actual folder path from the Cloudways dashboard
const remotePath = process.env.CLOUDWAYS_REMOTE_PATH;

const localPath = path.join(__dirname, 'dist');

async function deploy() {
  const sftp = new Client();
  try {
    console.log(`📡 Connecting to Cloudways server at ${config.host}...`);
    await sftp.connect(config);
    console.log(`✅ Connected successfully.`);
    
    console.log(`🚀 Uploading contents of ./dist to ${remotePath}...`);
    // The true parameter forces clearing of the remote directory before uploading 
    // to ensure old or removed files don't persist on standard HTML/React sites
    await sftp.uploadDir(localPath, remotePath);
    
    console.log(`🎉 Deployment successful!`);
  } catch (err) {
    console.error(`❌ Deployment failed:`, err.message);
  } finally {
    sftp.end();
  }
}

deploy();
