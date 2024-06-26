FROM node

WORKDIR /frontend2.0

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "preview" ]
