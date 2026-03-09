# Production stage
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev --legacy-peer-deps
# O diretório 'public' será montado via volume ou copiado se já existir
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
