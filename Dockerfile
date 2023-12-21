FROM node:18-alpine
RUN npm install pm2 yarn -g --force
WORKDIR /backend
COPY package*.json ./
RUN yarn
RUN yarn build --production
COPY . .
EXPOSE 3000
CMD ["yarn","pm2:start:app"]