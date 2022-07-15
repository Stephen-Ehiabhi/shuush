FROM node:lts-alpine

WORKDIR /

COPY package.json ./

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

RUN npm install --force --omit=dev

USER node

CMD [ "npm", "start"]

EXPOSE 9800