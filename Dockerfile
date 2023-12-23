FROM node:latest
WORKDIR /user/src/app

COPY  package*.json ./

RUN npm install

COPY . .

EXPOSE 6022

CMD ["node","node_app.js"]