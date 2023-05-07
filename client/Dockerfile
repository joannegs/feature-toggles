FROM node:14.17-alpine

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install

RUN npm run start

EXPOSE 4200

CMD ["npm", "run", "start"]