FROM node:18-alpine AS dev

ENV NODE_ENV dev

WORKDIR /app

COPY . .

RUN npm install

CMD [ "npm", "start" ]