# Build stage
  FROM node:20-alpine AS builder

  WORKDIR /app

  COPY package*.json ./

  RUN npm i

  COPY . .

  RUN npm run build

  # Production stage
  FROM node:20-alpine AS production

  WORKDIR /app

  COPY package*.json ./

  RUN npm i --only=production

  COPY --from=builder /app/dist ./dist

  ENV NODE_ENV=production
  ENV PORT=80

  EXPOSE 80

  CMD ["node", "dist/index.cjs"]
  