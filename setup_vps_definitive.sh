#!/bin/bash
# Carmen Sandiego VPS Setup Script
# Ubuntu 24.04 noble

# 1. Update and fix potentially broken packages
export DEBIAN_FRONTEND=noninteractive
apt-get clean
apt-get update
# Note: npm standard repo might conflict with nodesource repo.
# Already confirmed node and npm are present!
# So we only need nginx and certbot.

apt-get install -y nginx certbot python3-certbot-nginx nodejs npm 2>/dev/null || true

# Check if nginx is installed
if ! command -v nginx &> /dev/null; then
    # try one more time without nodejs/npm Standard
    apt-get install -y nginx certbot python3-certbot-nginx
fi

# 2. Directory structure
mkdir -p /opt/carmen-game/prod
mkdir -p /opt/carmen-game/dev

# 3. Nginx config
cat << 'EOF' > /etc/nginx/sites-available/carmen
server {
    listen 80;
    server_name trupe.globalviewai.cloud;
    location / {
        proxy_pass http://localhost:8081;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
server {
    listen 80;
    server_name dev.globalviewai.cloud;
    location / {
        proxy_pass http://localhost:8082;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

ln -sf /etc/nginx/sites-available/carmen /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# 4. Handle port 80 conflicts (CyberPanel/OpenLiteSpeed)
systemctl stop openlitespeed || true
systemctl stop lscpd || true
fuser -k 80/tcp || true

# 5. Start Nginx
nginx -t && systemctl restart nginx

# 6. PM2 (Already have npm/node)
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
fi
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 5

echo "Setup done!"
