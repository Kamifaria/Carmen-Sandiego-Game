# 1. Update and install dependencies
apt update && apt install -y nginx certbot python3-certbot-nginx docker.io docker-compose-plugin nodejs npm

# 2. Install PM2 globally for log and process management on the host if needed
npm install -g pm2
pm2 install pm2-logrotate

# 3. Create directory structure
mkdir -p /opt/carmen-game/prod
mkdir -p /opt/carmen-game/dev

# 4. Apply Nginx Configuration
cp /opt/carmen-game/nginx_carmen.conf /etc/nginx/sites-available/carmen
ln -s /etc/nginx/sites-available/carmen /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default
nginx -t && systemctl restart nginx

# 5. Clean old logs
rm -rf /var/log/nginx/*.log*
touch /var/log/nginx/access.log
touch /var/log/nginx/error.log

# 6. Instructions for SSL
echo "--- SETUP COMPLETE ---"
echo "Next step: Run 'certbot --nginx -d trupe.globalviewai.cloud -d dev.globalviewai.cloud' to enable HTTPS."
echo "To monitor: 'pm2 list' or 'docker compose logs -f'"
