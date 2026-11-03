FROM node:22-slim
WORKDIR /app
COPY package*.json ./
RUN npm i ci
COPY . . 
ENV PORT=5001
CMD ["node", "app.js"]