# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=build /app/build ./public
COPY server_remote_fix.js ./server.js

# Expor a porta 3000
EXPOSE 3000

CMD ["node", "server.js"]
