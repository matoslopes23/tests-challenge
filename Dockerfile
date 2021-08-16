FROM node


WORKDIR /usr/apps

COPY package.json ./

RUN npm install


COPY . .

EXPOSE 3333

CMD ["npm","run","dev"]
