FROM node:18
RUN npm install pm2 yarn -g --force
WORKDIR /backend
COPY package*.json ./
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn","pm2:deploy:app"]