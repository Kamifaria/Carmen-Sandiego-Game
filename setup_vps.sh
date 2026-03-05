#!/bin/bash
# Carmen Sandiego VPS Setup Script

# 1. Update and install dependencies
apt update && apt install -y nginx certbot python3-certbot-nginx docker.io docker-compose-plugin

# 2. Create directory structure
mkdir -p /opt/carmen-game/prod
mkdir -p /opt/carmen-game/dev

# 3. Apply Nginx Configuration
cp /opt/carmen-game/nginx_carmen.conf /etc/nginx/sites-available/carmen
ln -s /etc/nginx/sites-available/carmen /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default
nginx -t && systemctl restart nginx

# 4. Instructions for SSL
echo "--- SETUP COMPLETE ---"
echo "Next step: Run 'certbot --nginx -d trupe.globalviewai.cloud -d dev.globalviewai.cloud' to enable HTTPS."
