FROM node:20-alpine
RUN npm install pm2 yarn -g
WORKDIR /backend

COPY . .

RUN yarn
RUN yarn pm2:deploy:app

CMD [ "yarn","start" ]