FROM node:18-alpine AS dev

ENV NODE_ENV dev

WORKDIR /app

COPY package.json package-lock.json ./
COPY . .

RUN npm install

CMD [ "npm", "start" ]