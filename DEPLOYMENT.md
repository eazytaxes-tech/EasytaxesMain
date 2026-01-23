# Digital Ocean Deployment Guide

## Deployment Flow: Local → Git → Digital Ocean Droplet

## Prerequisites
- Git repository (GitHub/GitLab/Bitbucket)
- Digital Ocean account
- Domain name configured (optional)

## Step 1: Push to Git (Local)

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Production ready"

# Add remote and push
git remote add origin <your-repo-url>
git push -u origin main
```

## Step 2: Create Digital Ocean Droplet

1. Log into Digital Ocean
2. Create Droplet:
   - **Image**: Ubuntu 22.04 LTS
   - **Plan**: Basic (2GB RAM, 1 vCPU minimum)
   - **Datacenter**: Choose closest to your users
   - **Authentication**: SSH Key (recommended) or Password
3. Note your droplet IP address

## Step 3: Setup Droplet

### SSH into droplet
```bash
ssh root@your_droplet_ip
```

### Install Docker
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

### Install Docker Compose
```bash
apt-get update
apt-get install docker-compose-plugin -y
```

### Setup Firewall
```bash
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable
```

## Step 4: Deploy Application

### Clone repository
```bash
cd /opt
git clone <your-repo-url> eazytaxes
cd eazytaxes
```

### Create .env file
```bash
cp .env.example .env
nano .env
```

Add your credentials:
```
EMAIL_USER=contact@eazytaxes.com
EMAIL_APP_PASSWORD=your_app_password
NODE_ENV=production
```

Save: `Ctrl+X`, then `Y`, then `Enter`

### Build and start
```bash
docker compose up -d --build
```

### Check status
```bash
docker compose ps
docker compose logs -f
```

App is now running on `http://your_droplet_ip:5000`

## Step 5: Setup Domain (Optional)

### Install Nginx
```bash
apt-get install nginx -y
```

### Create Nginx config
```bash
nano /etc/nginx/sites-available/eazytaxes
```

Add:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Enable site
```bash
ln -s /etc/nginx/sites-available/eazytaxes /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

### Setup SSL
```bash
apt-get install certbot python3-certbot-nginx -y
certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Step 6: Update Application (Future Updates)

```bash
cd /opt/eazytaxes
git pull
docker compose down
docker compose up -d --build
```

## Useful Commands

### View logs
```bash
docker compose logs -f
```

### Restart
```bash
docker compose restart
```

### Stop
```bash
docker compose down
```

### Check health
```bash
curl http://localhost:5000
```

### Monitor resources
```bash
docker stats
```

## Troubleshooting

### Container not starting
```bash
docker compose logs
```

### Port already in use
```bash
lsof -i :5000
kill -9 <PID>
```

### Rebuild from scratch
```bash
docker compose down -v
docker compose up -d --build
```
