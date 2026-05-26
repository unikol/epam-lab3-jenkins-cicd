FROM node:7.8.0

WORKDIR /opt

COPY package.json /opt/package.json
RUN npm install

COPY . /opt

EXPOSE 3000

CMD ["npm", "run", "start"]
