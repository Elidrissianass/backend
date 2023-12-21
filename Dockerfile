FROM node:18-alpine
RUN npm install pm2 yarn @nestjs/cli -g --force
WORKDIR /backend
COPY package*.json ./
RUN yarn install --production
RUN yarn build
COPY . .
EXPOSE 3000
CMD ["yarn","pm2:start:app"]